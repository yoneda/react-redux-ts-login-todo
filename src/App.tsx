import React from 'react';
import Test from "./components/Test";
import SimpleTab from "./components/SimpleTab";
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h2>todoapp</h2>
      <SimpleTab
        titles={["private","global"]}
        elements={[<Test text={"contents of private"} />,<Test text={"contents of global"} />]}
      />
    </div>
  )
}

export default App;
