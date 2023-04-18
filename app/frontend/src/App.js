import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import InfoClient from "./Pages/InfoClient";
import InfoServices from "./Pages/InfoServices";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/info_client" component={InfoClient} />
        <Route exact path="/info_services" component={InfoServices} />
      </Switch>
    </HashRouter>
  );
};

export default App;