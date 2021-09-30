import HeroCard from "../HeroCard";
import {CardsSection, CardsSectionWrap} from './styles';
import {Button } from "../../../styles";
import getHeroFetch from "../../../services";
import {useEffect, useState} from "react";
import PreLoader from "../../pre-loader";

export const HeroCards = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [countHeroes, setCountHeroes] = useState(9);

    useEffect(() => {
        setData(getHeroFetch(countHeroes).then(res => {
            setLoading(false);
            setData(res);
        }))
    }, [countHeroes]);

    const loadMore = () => {
        setCountHeroes(prevState => prevState + 5)
        setLoading(!loading);
        setData(countHeroes);
    }

    if(loading) {
        return <PreLoader />
    }

    return (
        <CardsSectionWrap>
            <CardsSection>
                {data && data?.data?.results.map((item) => <HeroCard item={item} key={item.id}/>)}
            </CardsSection>
            <Button
                margin='45px 0 0'
                width='180px'
                onClick={loadMore}
            >
                LOAD MORE
            </Button>
        </CardsSectionWrap>

    );
}