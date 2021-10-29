import GlobalFonts from './fonts/fonts';
import HeroIMG from './assets/bg asset.png';
import HeaderTitle from "./components/header-title";
import Header from "./components/header";
import Main from "./components/main";
import {
    GlobalStyle,
    Container,
} from './styles';
import {
    useEffect,
    useState,
} from "react";
import Context from './context';
import useGetHeroes from "./services";

const App = () => {
    const [context,setContext] = useState(null);
    const [choseCard,setChoseCard] = useState(1010903);
    const [data,loading] = useGetHeroes();

    useEffect(() => {
       setContext({
           data,
           loading,
           choseCard,
           setChoseCard,
       })
    }, [data,loading,choseCard,setChoseCard]);

    return (
      <Context.Provider value={{...context}}>
          <GlobalFonts />
          <GlobalStyle/>
          <Container>
              <HeaderTitle />
              <Header />
              <Main />
              <img src={HeroIMG} alt={HeroIMG} />
          </Container>
      </Context.Provider>

  );
}

export default App;
