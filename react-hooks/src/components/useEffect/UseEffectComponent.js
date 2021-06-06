import {useCustomHookUseState} from "../useState/CustomHookUseState";
import {useEffect} from "react";

export const UseEffectComponent = () => {
    const [count,inc] = useCustomHookUseState(0,1);

    const updateClicksCount = (clicksCount) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    success: true,
                    clicksCount,
                });
            },1000);
        })
    }

    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count]);

    useEffect(() => {
        (async () => {
           const response = await updateClicksCount(count);
           console.log(response);
       })();
    },[count]);

    useEffect(() => {
       console.log(`>> running effect ${count}`);
       return () => console.log(`<< cleaning up ${count}`);
    },[count]);


    useEffect(() => {
        console.log('component did mount');
        return () => {
            console.log('component will unmount');
        }
    },[]);

    useEffect(() => {
        console.log('executed AFTER each render');
    });

    return (
        <>
            <h2 className="title">Use Effect hook</h2>
            <p>Current count: {count}</p>
             <button className='button' onClick={inc}>+1</button>
        </>
    )
}