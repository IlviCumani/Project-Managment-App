import Tasks from "./Tasks"

export default function SelectedProject({selectedProject, onDelete, onAddTask, onDeleteTask , ...props}){
    const formatedDate = new Date(selectedProject.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    return (
        
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectedProject.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950"
                        onClick={() => onDelete(selectedProject)}
                        >Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{formatedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{selectedProject.description}</p>
            </header>
            <Tasks selectedProject={selectedProject} onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
        </div>

        
    )
} 