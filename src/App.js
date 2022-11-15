import Tasks from "./Tasks";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header"
import Container from "./Container"
import { useState } from "react";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  const [tasks, setTasks] = useState([
    { id: 1, content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", done: false },
    { id: 2, content: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", done: false },
  ]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(
      task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      }
    ))
  };

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

  return (
    <body className="body">
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
    </body>
  );
}
export default App;
