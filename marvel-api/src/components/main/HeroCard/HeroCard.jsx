import {SubTitle} from "../../../styles";
import {CardBlock} from "./styles";
import {useContext} from "react";
import Context from "../../../context";
import {makeIMG} from "../../../usefullFunctions";

export const HeroCard = ({hero}) => {
    const {setChoseCard} = useContext(Context);
    const url = makeIMG(hero.thumbnail?.path,hero.thumbnail?.extension);
    return (
        <CardBlock
            onClick={() => setChoseCard(hero.id)}
        >
            <img src={url} alt={url}/>
            <SubTitle
                margin="10px 0 0 10px"
                color="white">
                {hero.name}
            </SubTitle>
        </CardBlock>
    );
}