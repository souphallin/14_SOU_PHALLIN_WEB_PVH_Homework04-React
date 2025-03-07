import React from "react";
import {dashboard} from '../data/dashboard'
import {learningMaterials} from '../data/learningMaterials'

export default function DashboardComponent() {
  // console.log(dashboard);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex">
        {dashboard.map((item) => (
          <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
            <div className={`p-3 rounded-xl ${item.color}`}>
              <img src={item.icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-semibold">{item.totalTasks}</p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
