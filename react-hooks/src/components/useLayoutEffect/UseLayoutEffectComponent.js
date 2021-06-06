import {useEffect, useLayoutEffect, useState} from "react";

export const UseLayoutEffect = (step) => {
    const [left,setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    setLeft(prev => prev - step);
                    break;
                case 'ArrowRight':
                    setLeft(prev => prev + step);
                    break;
                case 'ArrowUp':
                    setTop(prev => prev - step);
                    break;
                case 'ArrowDown':
                    setTop(prev => prev + step);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown',handleKeyDown);
        }
    },[step]);

    return [left, top];
}

const initialStyle =  {
    backgroundColor: '#f00',
    position: 'absolute',
    width: 100,
    height: 100,
    left: 0,
    top: 0,
}


const generateDummies = (count) => {
    const dummies = [];
    for(let i = 0; i < count; i++) {
        dummies.push(<div key={i}>i == {i}</div>)
    }
    return dummies;
}

export const UseLayoutEffectComponent = () => {
    const [left, top] = UseLayoutEffect(50);
    const [style, setStyle] = useState(initialStyle);

    useLayoutEffect(() => {
        setStyle(prev => {
            return {
                ...prev,
                left,
                top,
            }
        })
    },[left,top])

    return (
        <>
            <h2 className='title'>UseLayoutEffect component</h2>
            <div>[{left},{top}]</div>
            <div style={{position: 'relative'}}>
                <div style={style}></div>
            </div>
            {generateDummies(10)}
        </>
    )
}