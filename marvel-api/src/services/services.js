const marvelUrl = 'https://gateway.marvel.com:443/v1/public/characters?';
const publicKey = `apikey=${process.env.REACT_APP_PUBLIC_KEY}`;

export const getHeroFetch = async (limit = 9) => {
    const data = await fetch(`${marvelUrl}&limit=${limit}&${publicKey}`);
    return await data.json();
};