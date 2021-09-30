import { createStore } from "redux";
import { Provider } from "react-redux";
import GlobalFonts from './fonts/fonts';
import HeroIMG from './assets/bg asset.png';
import HeaderTitle from "./components/header-title";
import Header from "./components/header";
import Main from "./components/main";
import {
    GlobalStyle,
    Container,
} from './styles';
import { reducer } from "./redux/reducer";

let store = createStore(reducer);

const App = () => {
  return (
      <Provider store={store}>
          <GlobalFonts />
          <GlobalStyle/>
          <Container>
              <HeaderTitle />
              <Header />
              <Main />
              <img src={HeroIMG} alt={HeroIMG} />
          </Container>
      </Provider>

  );
}

export default App;
