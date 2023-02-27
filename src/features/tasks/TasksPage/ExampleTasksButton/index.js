import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Wrapper, } from "../../styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const Loading = useSelector(selectLoading);

    return (
        <Wrapper>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={Loading}
            >
                {Loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
                }
            </Button>
        </Wrapper>
    )
};
export default ExampleTasksButton;