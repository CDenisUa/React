import {SubTitle} from "../../../styles";
import {CardBlock} from "./styles";

export const HeroCard = ({item}) => {
    const url = `${item?.thumbnail?.path}.${item?.thumbnail?.extension} `
    return (
        <CardBlock>
            <img src={url} alt={url}/>
            <SubTitle margin="10px 0 0 10px" color="white">{item.name}</SubTitle>
        </CardBlock>
    );
}