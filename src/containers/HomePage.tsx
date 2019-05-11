import React from 'react';
import Header from "../components/Header";
import Title from "../components/Title";
import Line from "../components/Line";
import SimpleTab from "../components/SimpleTab";
import Tasks from "../components/Tasks";
import TaskElement from '../components/TaskElement';
import YourTaskElement from "../components/YourTaskElement";
import { Link } from "react-router-dom";

const initialTasks = () => [
  { id: 0, name: "clean my room", done: false },
  { id: 1, name: "sleep a lot", done: false },
  { id: 2, name: "learn programming", done: false },
]

const otherTasks = () => [
  { id: 0, name: "read a book", done: false, user: "yoneda" },
  { id: 1, name: "clean my window", done: false, user: "yoneda" },
  { id: 2, name: "write texts", done: true, user: "tanaka" },
]

const HomePage: React.FC = () => {
  const [tasks, setTasks] = React.useState(initialTasks);
  const renderPrivateTasks = () => tasks.map((task, key) => (
    <YourTaskElement
      {...task}
      key={task.id}
      doneHandler={() => setTasks(tasks.map(doneTask => doneTask.id === task.id ? { ...doneTask, done: !doneTask.done } : doneTask))}
      removeHandler={() => setTasks(tasks.filter(removeTask => removeTask.id !== task.id))}
    />
  ))
  const renderGlobalTasks = () => otherTasks().map(task => (
    <TaskElement
      {...task}
      key={task.id}
    />
  ))
  return (
    <div>
      <Header>
        <Title text="todoapp" />
        <Link to="home">home</Link><br />
        <Link to="register">sign up</Link><br />
        <Link to="login">sign in</Link>
        <Line />
      </Header>
      <SimpleTab
        titles={["private", "global"]}
        elements={[
          <Tasks>{renderPrivateTasks()}</Tasks>,
          <Tasks>{renderGlobalTasks()}</Tasks>
        ]}
      />
    </div>
  )
}

export default HomePage;
