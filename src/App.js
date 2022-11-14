import Tasks from "./Tasks";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header"
import Container from "./Container"
import { useState } from "react";

const tasks = [
  { id: 1, content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", done: true },
  { id: 2, content: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", done: false },
];
function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <body className="body">
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          content={<Form />}
        />
        <Section
          title="Lista zadań"
          content={<Tasks tasks={tasks} hideDone={hideDone} />}
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />}
        />
      </Container>
    </body>
  );
}
export default App;
