import Tasks from "./Tasks";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"
import { useState, useEffect } from "react";

const defaultTasks = [
  { id: 1, content: "Zrobić pracę domową", done: true },
  { id: 2, content: "Kupić masło", done: false },
];

function App() {

  const setLocalStorageTasks = () => {
    const localStorageTasks = localStorage.getItem("tasks");
    return localStorageTasks ? JSON.parse(localStorageTasks) : [];
  };

  const setLocalStorageHideDone = () => {
    const localStorageHideDone = localStorage.getItem("hideDone");
    return localStorageHideDone ? JSON.parse(localStorageHideDone) : [];
  };

  const [hideDone, setHideDone] = useState(setLocalStorageHideDone);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const [tasks, setTasks] = useState(setLocalStorageTasks);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) =>
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true, })
    ));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [...tasks,
    {
      content,
      done: false,
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1
    },
    ]);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  }, [hideDone]);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        content={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
      />
    </Container>

  );
}

export default App;
