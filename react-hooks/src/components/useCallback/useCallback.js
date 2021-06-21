import {useCustomHookUseState} from "../useState/CustomHookUseState";
import {useCallback, useEffect, useRef} from "react";

const useUpdateEffect = (callback) => {
    const firstRender = useRef(true);

    useEffect(() => {
        if(firstRender.current) {
            firstRender.current = false;
        }else {
            callback();
        }
    },[callback])
}

export const UseCallback = () => {
    const [value, increment] = useCustomHookUseState();

    useEffect(() => {
        console.log('mounted');
    },[]);

    console.log(`render, value: ${value}`);

    const callback = useCallback(() => {
        console.log(`value updated: ${value} `)
    },[value]);

    useUpdateEffect(callback);

    return <button className="button" onClick={increment}>RERENDER</button>
}