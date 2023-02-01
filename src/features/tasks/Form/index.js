import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Button, Input } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimedNewTaskContent = newTaskContent.trim();
        if (!trimedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
    };

    const inputRef = useRef("");
    const focusInput = () => { inputRef.current.focus() };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button
                onClick={focusInput}
            >
                Dodaj zadanie
            </Button>
        </StyledForm >
    );
}

export default Form;