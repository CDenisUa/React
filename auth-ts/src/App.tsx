import {Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";


export const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="*" component={HomePage} />
      </Switch>
  );
}