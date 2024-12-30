import { useState } from "react";
import Hello from "./components/hello";
import Fruits from "./components/fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
function App() {
  const person = {
      name: "Xuan Son",
      message: "goalll",
      emjoi: "clap",
      seatNumber: [1,2,4]
    }
  return (
    
    <div className="App">
      {/* <Hello person={person}></Hello> */}
      {/* <Fruits></Fruits> */}
      {/* <ConditionalComponent></ConditionalComponent> */}
      <Message />
    </div>
  );
}

export default App;
