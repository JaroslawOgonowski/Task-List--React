import Tasks from "./Tasks";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header"
import Container from "./Container"
let hideDoneTask = false;
const tasks = [
  { id: 1, content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", done: true },
  { id: 2, content: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", done: false },
];
function App() {
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
          content={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
        />
      </Container>
    </body>
  );
}
export default App;
