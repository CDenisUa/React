import {assign, Machine} from "xstate";
import './DataLoad.css';
import {useMachine} from "@xstate/react";


export const DataLoad = () => {
    const allData = new Array(25).fill(0).map((_val,i) => i + 1);
    const perPage = 10;

    const dataMachine = new Machine({
        id: 'dataMachine',
        initial: 'loading',
        context: {
            data: []
        },
        states: {
            loading: {
                invoke: {
                    id: 'dataLoader',
                    src: (context, _event) => {
                        return (callback, _onEvent) => {
                            setTimeout(() => {
                                const {data} = context;
                                const newData = allData.slice(data.length, data.length + perPage);
                                const hasMore = newData.length === perPage;

                                if(hasMore){
                                    callback({type: 'DONE_MORE', newData});
                                }else{
                                    callback({type: 'DONE_COMPLETE', newData});
                                }
                            },1000)
                        }
                    }
                },
                on: {
                    DONE_MORE: {
                        target: 'more',
                        actions: assign({
                            data: ({data}, {newData = []}) => [...data, ...newData]
                        })
                    },
                    DONE_COMPLETE: {
                        target: 'complete',
                        actions: assign({
                            data: ({data}, {newData = []}) => [...data, ...newData]
                        })
                    },
                    FAIL: 'failure',
                }
            },
            more: {
                on:{
                    LOAD: 'loading'
                }
            },
            complete: {
                type: 'final',
            },
            failure: {type: 'final'}
        }
    })

    const [current, send] = useMachine(dataMachine);
    const {data} = current.context;

    return (
        <div>
            <ul>
                {
                    data.map(row => (
                        <li key={row} className='listItem block'>
                            {row}
                        </li>
                    ))
                }

                <li>{current.matches('loading') && 'Loading...'}</li>

                {current.matches('more') && (
                    <li className='mainBlock'>
                        <button
                            onClick={() => {
                                send('LOAD');
                            }}>Load More
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}