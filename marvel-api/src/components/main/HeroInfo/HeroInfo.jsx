import {Button, SubTitle, Text} from "../../../styles";
import HeroMocIMG from '../../../assets/loki.jpg';
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

export const HeroInfo = () => (
    <HeroInfoContainer>
        <HeroInfoHeader>
            <HeroInfoHeaderWrap>
                <img src={HeroMocIMG} alt={HeroMocIMG}/>
                <HeroInfoContent>
                    <SubTitle>Loki</SubTitle>
                    <ButtonWrap>
                        <Button
                            margin='10px 0'
                        >homepage</Button>
                        <Button>wiki</Button>
                    </ButtonWrap>
                </HeroInfoContent>
            </HeroInfoHeaderWrap>
            <Text>
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the
                brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir,
                and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the
                stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse
                Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda
            </Text>
        </HeroInfoHeader>
        <HeaderInfoFooter>
            <BlockTitle>Comics:</BlockTitle>
            <BlockInfo>All-Winners Squad: Band of Heroes (2011) #3</BlockInfo>
            <BlockInfo>Alpha Flight (1983) #50</BlockInfo>
            <BlockInfo>Amazing Spider-Man (1999) #503</BlockInfo>
            <BlockInfo>Amazing Spider-Man (1999) #504</BlockInfo>
            <BlockInfo>AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</BlockInfo>
            <BlockInfo>Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</BlockInfo>
            <BlockInfo>Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</BlockInfo>
            <BlockInfo>Vengeance (2011) #4</BlockInfo>
            <BlockInfo>Avengers (1963) #1</BlockInfo>
            <BlockInfo>Avengers (1996) #1</BlockInfo>
        </HeaderInfoFooter>
    </HeroInfoContainer>
)