import React from 'react';
import Title from "./components/Title";
import SimpleTab from "./components/SimpleTab";
import Test from "./components/Test";
import YourTaskElement from "./components/YourTaskElement";
import './App.css';

const initialTasks = () => [
  {id:0, name:"clean my room", done: false},
  {id:1, name:"sleep a lot", done: false},
  {id:2, name:"learn programming", done: false},
]

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState(initialTasks);
  return (
    <div>
      <Title text={"todoapp"} />
      <SimpleTab
        titles={["private","global"]}
        elements={[<Test text={"contents of private"} />,<Test text={"contents of global"} />]}
      />
      {
        tasks.map((task,key)=>(
          <YourTaskElement
            key={key}
            name={task.name}
            done={task.done}
            doneHandler={()=>setTasks(tasks.map(doneTask=>doneTask.id===task.id ? {...doneTask,done:!doneTask.done} : doneTask))}
            removeHandler={()=>setTasks(tasks.filter(removeTask=>removeTask.id!==task.id))}
          />
          )
        )
      }
    </div>
  )
}

export default App;
