import { List, Item, Content, Button, StyledLink, } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";

const TasksList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        toggleDone
                    >
                        {task.done ? " ✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                        remove
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );


};
export default TasksList;