import { createContext, useEffect, useState } from 'react';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask({ title, description }) {
        const newTask = {
            id: self.crypto.randomUUID(),
            name: title,
            description
        }

        setTasks([...tasks, newTask])
    }

    function deleteTask(id) {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext