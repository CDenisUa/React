// Core
import { useEffect, useMemo, useRef, useCallback } from 'react';

const useKeyDown = (
    key: string,
    handler: (event: KeyboardEvent) => void
): void => {
    const savedHandler = useRef<(event: KeyboardEvent) => void>();
    const memoizedHandler = useMemo(() => handler, [handler]);

    const eventListener = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === key) {
                savedHandler.current?.(event);
            }
        },
        [key]
    );

    useEffect(() => {
        savedHandler.current = memoizedHandler;
    }, [memoizedHandler]);

    useEffect(() => {
        document.addEventListener('keydown', eventListener);

        return () => {
            document.removeEventListener('keydown', eventListener);
        };
    }, [eventListener]);
};

export default useKeyDown;

// How to use hook
// useKeyDown('Enter', handleEnterKey);
