// Core
import { useCallback, useEffect, useMemo, useState } from 'react';

const useScript = (src: string): [boolean, boolean] => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setError(true);
    }, []);

    const script = useMemo(() => {
        const newScript = document.createElement('script');
        newScript.src = src;
        return newScript;
    }, [src]);

    useEffect(() => {
        script.addEventListener('load', handleLoad);
        script.addEventListener('error', handleError);

        document.body.appendChild(script);

        return () => {
            script.removeEventListener('load', handleLoad);
            script.removeEventListener('error', handleError);
            document.body.removeChild(script);
        };
    }, [handleLoad, handleError, script]);

    return [isLoaded, error];
};

export default useScript;
