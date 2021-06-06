import {UseStateComponent} from "./components/useState/UseStateComponent";
import {UseEffectComponent} from "./components/useEffect/UseEffectComponent";
import './App.css';

function App() {
  return (
    <div className='main'>
      <UseStateComponent />
      <UseEffectComponent />
    </div>
  );
}

export default App;
