import React from 'react';
import Title from "./components/Title";
import SimpleTab from "./components/SimpleTab";
import Test from "./components/Test";
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Title text={"todoapp"} />
      <SimpleTab
        titles={["private","global"]}
        elements={[<Test text={"contents of private"} />,<Test text={"contents of global"} />]}
      />
    </div>
  )
}

export default App;
