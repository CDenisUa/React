// Core
import {
    RefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

const useClickAnywhere = (): [boolean, RefObject<HTMLDivElement | null>] => {
    const [clicked, setClicked] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const handleWindowClick = useCallback(
        (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
                setClicked(true);
            }
        },
        [ref]
    );

    const memoizedHandleWindowClick = useMemo(
        () => handleWindowClick,
        [handleWindowClick]
    );

    useEffect(() => {
        document.addEventListener('click', memoizedHandleWindowClick);
        return () => {
            document.removeEventListener('click', memoizedHandleWindowClick);
        };
    }, [memoizedHandleWindowClick]);

    return [clicked, ref];
};

export default useClickAnywhere;

// How to use hook
// Body of component:
// const [ clickOutSide, drawingToolsRef ] = useClickAnywhere();
// useEffect(() => {
// if(clickOutSide) setOpenDrawingTools(false);
// },[clickOutSide])
//  JSX:
// <div ref={drawingToolsRef}> some code </div>
