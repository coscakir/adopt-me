import React from "react";
import { Router, Link } from "@reach/router";

import SearchParams from "./SearchParams";
import Detail from "./Detail";

import ThemeContext from "./ThemeContext";

function App() {
  const themeHook = React.useState("rebeccapurple");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Detail path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
