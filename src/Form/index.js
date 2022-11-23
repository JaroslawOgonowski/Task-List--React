import { useState, useRef } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskContent}
                autoFocus className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <button
                onClick={focusInput}
                className="form__button"
            >
                Dodaj zadanie</button>
        </form >
    );
}

export default Form;