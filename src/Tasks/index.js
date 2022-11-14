import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`
                list__itemContainer 
                ${task.done && hideDone
                        ? "list__itemContainer--hidden"
                        : ""
                    }
                `}
            >
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="list__button">{task.done ? "✔" : ""}</button>
                <span className={`list__item ${task.done ? "list__item--done" : ""}`}> {task.content}</span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__button list__button--red">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;