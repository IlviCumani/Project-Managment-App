import NewTasks from "./NewTasks"
import Modal from "./Modal"

import { useRef } from "react"

export default function Tasks( {selectedProject, onAddTask, onDeleteTask} ){
    const newTaskRef = useRef()
    const modalRef = useRef()

    function handleAddTask(){
        const newTask = newTaskRef.current.value

        if(newTask.trim().length === 0){
            modalRef.current.open()
            return
        }

        onAddTask(newTask)
        newTaskRef.current.value = ''
    }

    let content = <p className="text-stone-800 my-4">The project doesct have any tasks yet</p>

    if(selectedProject.tasks.length > 0){
        content = (
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {selectedProject.tasks.map((task, index) => (
                    <li key={index} className="flex justify-between my-4">
                        <span>{task}</span>
                        <button onClick={() => onDeleteTask(index)} className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>
                ))}
            </ul>
        )
    }

    return(
        <section>
            <Modal ref={modalRef} buttonCaption='Close'>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Ooops ... looks like you forgot to enter a value.</p>
            </Modal>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks ref={newTaskRef} onAddTask={handleAddTask}/>
            {content}
        </section>
    )
}