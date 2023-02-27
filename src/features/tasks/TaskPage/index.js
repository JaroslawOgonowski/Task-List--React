import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { StyledLink } from "../styled";


function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                content=
                {!!task && (
                    <>
                        ID zadania: {task.id}
                        <p><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</p>
                        <p>
                            Powrót do listy zadań: {" "}
                            <StyledLink to="/zadania">Twoja lista zadań</StyledLink>
                        </p>
                    </>
                )}
            />
        </Container>
    );
};
export default TaskPage;