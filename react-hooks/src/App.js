import {UseStateComponent} from "./components/useState/UseStateComponent";
import {UseEffectComponent} from "./components/useEffect/UseEffectComponent";
import {UseLayoutEffectComponent} from "./components/useLayoutEffect/UseLayoutEffectComponent";
import './App.css';

function App() {
  return (
    <div className='main'>
      <UseStateComponent />
      <UseEffectComponent />
      <UseLayoutEffectComponent />
    </div>
  );
}

export default App;
