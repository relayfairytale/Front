import React from "react";
import Router from "./shared/Router";
import { CookiesProvider } from "react-cookie";

// import { useSelector } from "react-redux";

function App() {
  // const fairytaleStore = useSelector((state) => state);

  return (
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  );
}

export default App;
