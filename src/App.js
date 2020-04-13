import React from "react";
import { Router, Link } from "@reach/router";

import SearchParams from "./SearchParams";
import Detail from "./Detail";

function App() {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Detail path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
