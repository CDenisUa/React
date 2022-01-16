import HeroCard from "../HeroCard";
import {CardsSection, CardsSectionWrap} from './styles';
import {Button } from "../../../styles";
import {useContext} from "react";
import Context from "../../../context";
import PreLoader from "../../pre-loader";

export const HeroCards = () => {
    const {data} = useContext(Context)

    if(!data) {
        return <PreLoader />
    }

    return (
        <CardsSectionWrap>
            <CardsSection>
                {
                    data && data.data.results.map(hero =>
                    <HeroCard hero={hero} key={hero.id}/>)
                }
            </CardsSection>
            <Button
                margin='45px 0 0'
                width='180px'
            >
                LOAD MORE
            </Button>
        </CardsSectionWrap>

    );
}