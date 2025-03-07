import React, { useState } from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";

export default function AssignmentsComponent() {
  const [projects, setProjects] = useState([]);
  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject])
  }
  return (
    <div>
      <div className="flex justify-between w-190">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent onAddProject={handleAddProject}/>
      </div>

      {/* display added project */}
      <div className="pt-10 grid grid-cols-3 gap-5">
        {projects.length> 0 ? (
          projects.map((project) =>(
            // <CardComponent key={project.id} product={project} countDate={project.countDate}/>
            <CardComponent key={project.id} product={project}/>
          ))) : (<p className="text-gray-500">No Project added yet</p>
        )}
      </div>
    </div>
  );
}
