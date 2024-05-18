import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

// eslint-disable-next-line react/prop-types
function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // usando el contexto TaskContext
    const { createTask } = useContext(TaskContext)

    const handleSubmit = e => {
        e.preventDefault()

        createTask({ title, description })
        setTitle('')
        setDescription('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl text-white text-center mb-3 font-bold">Crea tu tarea</h1>
                <input
                    type="text"
                    placeholder="Escribe tu tarea"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    className="bg-slate-300 p-3 w-full mb-2"
                />

                <textarea
                    name="description"
                    placeholder="Descripción de la tarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-slate-300 p-3 w-full mb-2"
                >
                </textarea>
                <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm