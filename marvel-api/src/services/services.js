import {useState,useEffect} from "react";

export const useGetHeroes = (limit = 9) => {
    const marvelUrl = 'https://gateway.marvel.com:443/v1/public/characters?';
    const publicKey = `apikey=${process.env.REACT_APP_PUBLIC_KEY}`;
    const [data, getData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${marvelUrl}&limit=${limit}&${publicKey}`)
            .then(data => data.json())
            .then(res => {
                getData(res);
                setLoading(false);
            });
    }, [limit,publicKey]);

    return [data,loading];
};