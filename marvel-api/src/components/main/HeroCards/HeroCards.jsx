import HeroCard from "../HeroCard";
import {CardsSection, CardsSectionWrap} from './styles';
import {Button } from "../../../styles";

export const HeroCards = () => (
    <CardsSectionWrap>
        <CardsSection>
            {[...Array(9)].map((item, index) => <HeroCard key={index + 1}/>)}
        </CardsSection>
        <Button
            margin='45px 0 0'
            width='180px'
        >
            LOAD MORE
        </Button>
    </CardsSectionWrap>

)