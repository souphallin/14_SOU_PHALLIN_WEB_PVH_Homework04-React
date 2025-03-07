import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import CardComponent from "./components/CardComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import React, { useState } from "react";
import { CloudCog } from "lucide-react";

function App() {
  const [projects, setProjects] = useState([]);
  // const handleAddProject = (newProject) => {
  //   setProjects([...projects, newProject])
  // }

  const [searchQuery, setSearchQuery] = useState(""); //store search

  // Function that update searchQuery when user types
  const handleSearch = (data) => {
    setSearchQuery(data);
  };

    // Filter projects dynamically based on the search query
  const filterProject = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLocaleLowerCase());
  });

  console.log("filterProject = ", filterProject);

  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <SidebarComponent />
        </div>

        <div className="bg-[#F5F7F8] col-span-8 p-10">
          {/* pass search handle */}
          <TopNavbarComponent onSearch={handleSearch} />
          <div className="grid grid-cols-8 pt-10">
            <div className="col-span-6">
              <DashboardComponent />
              <div className="pt-5 px-10 flex justify-between">
                <AssignmentsComponent
                  projects={searchQuery === "" ? projects : filterProject}
                  setProjects={setProjects}
                />
                {/* <AddNewProjectComponent onAddProject={handleAddProject}/> */}
              </div>
            </div>
            <div className="col-span-2">
              <LearningMaterialsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
