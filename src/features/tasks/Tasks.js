import TaskList from "./TaskList";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container"


function Tasks() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form />}
      />
      <Section
        title="Lista zadań"
        content={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>

  );
}

export default Tasks;
