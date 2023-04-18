import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import InfoClient from "./Pages/InfoClient";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/info_client" component={InfoClient} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;