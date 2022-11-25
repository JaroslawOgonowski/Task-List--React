import { ButtonsDiv, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <ButtonsDiv>
            <Button
                onClick= {toggleHideDone}
                >
                {hideDone ? "Pokaż " : "Ukryj "}
                zakończone
            </Button>
            <Button
                onClick= {setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
        </ButtonsDiv>)
);

export default Buttons;