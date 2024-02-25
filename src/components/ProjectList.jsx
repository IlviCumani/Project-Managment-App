import Button from "./Button.jsx";

export default function ProjectList({onAddProject, projectState}) {
    const projectsList = projectState.projects;
    const selectedProject = projectState.selectedProject;

    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={() => onAddProject(null)}>+Add Project</Button>
            </div>
            <ul className="mt-8">
                {projectsList.map((project) => {
                    const isSelected = selectedProject && selectedProject.id === project.id;

                    return(
                        <li key={project.id}>
                            <button 
                                className={`w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ${isSelected ? 'bg-stone-800 text-stone-200' : 'text-stone-400'}`}
                                onClick={() => onAddProject(project)}
                                >{project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}