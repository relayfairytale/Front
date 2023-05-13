import React from "react";
import Router from "./shared/Router";
import { useSelector } from "react-redux"; 


function App() {
  
  const fairytaleStore = useSelector((state) => state);

  return <Router />;
}

export default App;
