import { useState, useRef } from "react";
import { FormContent, FormButton, FormInput } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return
        } else addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    const inputRef = useRef("");
    const focusInput = () => { inputRef.current.focus() };

    return (
        <FormContent onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <FormButton
                onClick={focusInput}
            >
                Dodaj zadanie
            </FormButton>
        </FormContent >
    );
}

export default Form;