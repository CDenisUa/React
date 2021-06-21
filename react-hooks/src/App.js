import {UseStateComponent} from "./components/useState/UseStateComponent";
import {UseEffectComponent} from "./components/useEffect/UseEffectComponent";
import {UseLayoutEffectComponent} from "./components/useLayoutEffect/UseLayoutEffectComponent";
import {UseRefComponent} from "./components/useRef/useRefComponent";
import './App.css';
import {UseCallback} from "./components/useCallback/useCallback";

function App() {
  return (
    <div className='main'>
      <UseStateComponent />
      <UseEffectComponent />
      <UseLayoutEffectComponent />
      <UseRefComponent />
      <UseCallback />
    </div>
  );
}

export default App;
