import { Route, Switch } from "react-router-dom";
import { AboutPage } from "./About/AboutPage";
import { HomePage } from "./Home/HomePage";

export const PageRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
