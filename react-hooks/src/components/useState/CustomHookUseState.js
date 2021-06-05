import {useState} from "react";

export const useCustomHookUseState = (initialValue, delta= 1) => {
    const [elem,setElem] = useState(initialValue);
    const increment = () => setElem(prev => prev + delta);
    const decrement = () => setElem(prev => prev - delta);
    const clear = () => setElem(0)
    return [elem,increment,decrement,clear]
}