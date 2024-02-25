import { useRef, forwardRef } from "react"

const NewTasks = forwardRef(function NewTasks({onAddTask}, ref){
    return(
        <div className="flex items-center gap-4">
            <input ref={ref} type="text"  className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={onAddTask} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
})

export default NewTasks;