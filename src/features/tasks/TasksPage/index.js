import TaskList from "./TaskList";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container"
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form />}
        extraHeaderContent={<ExampleTasksButton/>}
      />
      <Section
        title="Wyszukiwarka zadań"
        content={<Search/>}
      />
      <Section
        title="Lista zadań"
        content={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
