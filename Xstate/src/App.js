import {useMachine} from '@xstate/react';
import {Machine} from 'xstate';
import './App.css';
import {DataLoad} from "./components/dataLoad/DataLoad";

const toggleMachine = new Machine({
    id: 'toggleMachine',
    initial: 'inactive',
    states: {
        inactive: {
            on: {
                TOGGLE: 'active',
            }
        },
        active: {
            on: {
                TOGGLE: 'inactive',
            }
        }
    }
})

function App() {
    const [current, send] = useMachine(toggleMachine);
    return (
    <div className="App">
      <h1>XState</h1>
        <button
            onClick={() => send("TOGGLE")}
        >
            Toggle
        </button>
        <div style={{display:"flex", flexDirection: 'column', margin: 10}}>
            <span>{current.value}</span>
            <span>{current.matches('active') && 'We are active!!'}</span>
        </div>
        <DataLoad />
    </div>
  );
}

export default App;
