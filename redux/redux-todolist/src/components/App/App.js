import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { InputTasks } from "../InputTasks/InputTasks";
import { OutputTasks } from "../OutputTasks/OutputTasks";
import './style.css';

const App = () => {
  return (
    <EuiFlexGroup
      direction="column"
      alignItems="center"
      justifyContent="center"
      className="app"
    >
      <InputTasks />
      <OutputTasks />
    </EuiFlexGroup>
  );
}

export default App;
