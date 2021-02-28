import React, { useEffect } from "react";

import "./App.css";
import LandingPage from "./Componant/LandingPage";
import ProductPage from "./Componant/ProductPage";
import StorePage from "./Componant/StorePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:section/:type/:productId">
            <ProductPage></ProductPage>
          </Route>
          <Route path="/:section/:type">
            <StorePage></StorePage>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
