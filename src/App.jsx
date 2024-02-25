import ProjectList from "./components/ProjectList.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

import { useState } from "react";

let k = 0

function App() {
  let l = 0

  console.log(`k: ${k++} l: ${l++}`)

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
  
  let content = <SelectedProject selectedProject={projectState.selectedProject} onDelete={handleDeleteProject}/>

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
