import {
    GlobalStyle,
    Container,
} from './styles';
import GlobalFonts from './fonts/fonts';
import HeroIMG from './assets/bg asset.png';
import HeaderTitle from "./components/header-title";
import Header from "./components/header";
import Main from "./components/main";

const App = () => {

  return (
      <>
          <GlobalFonts />
          <GlobalStyle/>
          <Container>
              <HeaderTitle />
              <Header />
              <Main />
              <img src={HeroIMG} alt={HeroIMG} />
          </Container>
      </>

  );
}

export default App;
