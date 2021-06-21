import {useRef, useState} from "react";

export const UseRefComponent = () => {
    const refContainer = useRef();
    const toggleRef = useRef(false);
    const [toggleState,setToggleState] = useState(false);
    const focusInput = () => {
       refContainer.current?.focus();
    };

    const onChange = event => {
       const text = event.target.value;
       if(text === 'blur'){
           refContainer.current?.blur()
       }
    }

    const changeRef = () => {
       toggleRef.current = !toggleRef.current;
       console.log(`toggled to: ${toggleRef.current}`)
    }

    const changeState = () => {
        setToggleState(prev => !prev)
    }

    console.log(`toggledRef: ${toggleRef.current}, toggleState ${toggleState} `);

   return (
       <div>
           <h2 className="title">Use Ref Component</h2>
           <input ref={refContainer} onChange={onChange}/>
           <p>
               <button className='button' onClick={focusInput}>FOCUS</button>

           </p>
           <p>
               <button className='button' onClick={changeRef}>Toggle Ref</button>
               <button className='button' onClick={changeState}>Toggle State</button>
           </p>
       </div>
   )
}