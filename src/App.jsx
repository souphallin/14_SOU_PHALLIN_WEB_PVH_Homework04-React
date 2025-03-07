import "./App.css";
import SidebarComponent from './components/SidebarComponent';
import TopNavbarComponent from './components/TopNavbarComponent';
import DashboardComponent from './components/DashboardComponent';
import LearningMaterialsComponent from './components/LearningMaterialsComponent'
import AssignmentsComponent from './components/AssignmentsComponent'
import CardComponent from './components/CardComponent'
import AddNewProjectComponent from './components/AddNewProjectComponent'
import React, { useState } from "react";


function App() {
  // const [projects, setProjects] = useState([]);
  // const handleAddProject = (newProject) => {
  //   setProjects([...projects, newProject])
  // }
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <SidebarComponent/>
        </div>

        <div className="bg-[#F5F7F8] col-span-8 p-10">
          <TopNavbarComponent/>
          <div className="grid grid-cols-8 pt-10">
            <div className="col-span-6">
              <DashboardComponent/>
              <div className="pt-5 px-10 flex justify-between">
                <AssignmentsComponent/>
                {/* <AddNewProjectComponent onAddProject={handleAddProject}/> */}
              </div>
            </div>
            <div className="col-span-2">
              <LearningMaterialsComponent/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
