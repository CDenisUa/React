import {Button, SubTitle, Text} from "../../../styles";
import {
    HeroInfoContainer,
    HeroInfoHeader,
    ButtonWrap,
    HeaderInfoFooter,
    BlockInfo,
    BlockTitle,
    HeroInfoHeaderWrap,
    HeroInfoContent,
} from './styles';
import {useContext} from "react";
import Context from "../../../context";
import {makeIMG} from "../../../usefullFunctions";
import SkeletonComponent from "../../skeleton";

export const HeroInfo = () => {
    const {choseCard, data, loading} = useContext(Context);
    const heroData = data?.data?.results.find(element => element.id === choseCard);
    const url = makeIMG(heroData?.thumbnail?.path,heroData?.thumbnail?.extension);
    return (loading ? <SkeletonComponent
            width='483px'
            height='500px'
            number={1} />
        : <HeroInfoContainer>
            <HeroInfoHeader>
                <HeroInfoHeaderWrap>
                    <img src={url} alt={url}/>
                    <HeroInfoContent>
                        <SubTitle>{heroData?.name}</SubTitle>
                        <ButtonWrap>
                            <Button
                                margin='10px 0'
                            >homepage</Button>
                            <Button>wiki</Button>
                        </ButtonWrap>
                    </HeroInfoContent>
                </HeroInfoHeaderWrap>
                <Text>
                    {heroData?.description}
                </Text>
            </HeroInfoHeader>
            <HeaderInfoFooter>
                <BlockTitle>Comics:</BlockTitle>
                {heroData?.comics?.items.map((comics, index) => <BlockInfo key={index}>{comics.name}</BlockInfo>)}
            </HeaderInfoFooter>
        </HeroInfoContainer>)
}