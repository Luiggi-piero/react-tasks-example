import { useContext } from "react"
import TaskCard from "./TaskCard"
import TaskContext from "../context/TaskContext"

// eslint-disable-next-line react/prop-types
function TaskList() {

    const { tasks } = useContext(TaskContext)

    // eslint-disable-next-line react/prop-types
    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas por mostrar</h1>
    }

    return (
        <div className="grid grid-cols-4 gap-2">
            {
                // eslint-disable-next-line react/prop-types
                tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                    />
                ))
            }
        </div>
    )
}

export default TaskList