import HeroImg from '../../../assets/Thumbnail.jpg';
import {SubTitle} from "../../../styles";
import {CardBlock} from "./styles";

export const HeroCard = () => (
    <CardBlock>
        <img src={HeroImg} alt={HeroImg} />
        <SubTitle color="white">THOR</SubTitle>
    </CardBlock>
)