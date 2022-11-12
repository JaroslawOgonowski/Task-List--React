import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li 
            className={`list__itemContainer ${task.done && props.hideDoneTask ? "list__itemContainer--hidden" : ""}`}
            >
                <button className="list__button">{task.done ? "✔" : ""}</button>
                <span className={`"list__item ${task.done ? " list__item--done" : "" }`}> {task.content}</span>    
                <button className="list__button list__button--red">🗑</button>
            </li>
))}
    </ul>
);

export default Tasks;