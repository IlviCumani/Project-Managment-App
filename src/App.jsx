import ProjectList from "./components/ProjectList.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleProjectSelect(selectedProject) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject : selectedProject,
      };
    });
  } 

  function handleCreateNewProject(projectData) {
    setProjectState((prevProjectState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevProjectState,
        selectedProject: newProject,
        projects: [... prevProjectState.projects, newProject]
      };
    });
  }

  function handleDeleteProject(selectedProject) {
    setProjectState((prevProjectState) => {
      const updatedProjects = prevProjectState.projects.filter((project) => project.id !== selectedProject.id);
      return {
        projects: updatedProjects,
        selectedProject: undefined,
      };
    });
  }

  function handleAddTask(newTask) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: {
          ...prevProjectState.selectedProject,
          tasks: [...prevProjectState.selectedProject.tasks, newTask],
        },
        projects: prevProjectState.projects.map((project) => {
          if (project.id === prevProjectState.selectedProject.id) {
            return {
              ...project,
              tasks: [...project.tasks, newTask],
            };
          }
          return project;
        }
        ),
      }
    })
  }

  function handleDeleteTask(taskIndex) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: {
          ...prevProjectState.selectedProject,
          tasks: prevProjectState.selectedProject.tasks.filter((_, index) => index !== taskIndex),
        },
        projects: prevProjectState.projects.map((project) => {
          if (project.id === prevProjectState.selectedProject.id) {
            return {
              ...project,
              tasks: project.tasks.filter((_, index) => index !== taskIndex),
            };
          }
          return project;
        }),
      };
    });
  }

  if(projectState.selectedProject){
    console.log(projectState.selectedProject.tasks)
  }
  
  let content = <SelectedProject onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} selectedProject={projectState.selectedProject} onDelete={handleDeleteProject}/>

  if (projectState.selectedProject === null) {
    content = <NewProject onCreateNewProject={handleCreateNewProject} onSetToUndefined={handleProjectSelect}/>
  }else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onAddProject={handleProjectSelect}/>
  }
  

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectList onAddProject={handleProjectSelect} projectState={projectState}/>
      {content}
    </main>
  );
}

export default App;
