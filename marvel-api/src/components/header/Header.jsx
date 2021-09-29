import {
    HeroInfo,
    HeroBlock,
    HeaderBlock,
    HeroDescription,
    ButtonWrap,
    HeroText,
    HeroInfoText,
} from "./styles";
import HeroPhoto from '../../assets/Thumbnail.jpg';
import HeroDecoration from '../../assets/Decoration.png';
import {Button, SubTitle,} from "../../styles";


export const Header = () => (
    <HeaderBlock>
        <HeroBlock>
            <img src={HeroPhoto} alt={HeroPhoto} />
            <HeroDescription>
                <SubTitle>thor</SubTitle>
                <HeroText>
                    As the Norse God of thunder and lightning, Thor wields one
                    of the greatest weapons ever made, the enchanted hammer Mjolnir.
                    While others have described Thor as an over-muscled, oafish
                    imbecile, he's quite smart and compassionate...
                </HeroText>
                <ButtonWrap>
                    <Button>HomePage</Button>
                    <Button>Wiki</Button>
                </ButtonWrap>
            </HeroDescription>
        </HeroBlock>
        <HeroInfo>
            <img src={HeroDecoration} alt={HeroDecoration}/>
            <HeroInfoText>Random character for today!
                <br/> Do you want to get to know him better?
            </HeroInfoText>
            <HeroInfoText>Or choose another one</HeroInfoText>
            <Button maxWidth="101px">try it</Button>
        </HeroInfo>
    </HeaderBlock>
);