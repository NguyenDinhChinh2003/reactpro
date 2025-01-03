import { useState } from "react";
import Hello from "./components/hello";
import Fruits from "./components/fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Header from "./components/template/Header";

function App() {
  return (
    
    <div className="App">
      {/* <Hello person={person}></Hello> */}
      {/* <Fruits></Fruits> */}
      {/* <ConditionalComponent></ConditionalComponent> */}
      <Header />
      <Message />
    </div>
  );
}

export default App;
