import HeroCards from "./HeroCards";
import HeroInfo from "./HeroInfo";
import { MainSection } from './styles';

export const Main = () => {
    return (
        <MainSection>
            <HeroCards/>
            <HeroInfo/>
        </MainSection>
    );
};
