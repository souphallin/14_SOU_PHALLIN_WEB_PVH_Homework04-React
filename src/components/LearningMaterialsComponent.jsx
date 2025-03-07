import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import {learningMaterials} from '../data/learningMaterials'
import {format} from 'date-fns'

export default function LearningMaterialsComponent() {
  console.log(learningMaterials)
  const [materials, setSortedMaterials] = useState(learningMaterials);
  const handleSortMaterials = (NewSortedMaterials) => {
    console.log(NewSortedMaterials);
    setSortedMaterials(NewSortedMaterials);
  }

  function handleStar(id) {
    alert("Teacher ជួយ fix code ញុមមួយមក function ដើរតែកូដអត់ដើរ Teacher!!!")
    setSortedMaterials((prevSt) => {
      return prevSt.map((item) => 
        item.id === id ? {...item, isFavorite : !item.isFavorite} : item
      )
    });
  }

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent handleSortMaterials={handleSortMaterials}/>

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      {materials.map((item) => (
        <div className="space-y-3">
          <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
            <img
              src={item.image}
              alt="HTML5"
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{item.title}</p>
                <Star 
                onClick={()=>handleStar(materials.id)}
                  color={materials.isFavorite ?"FAA300" : "black"}
                  fill={materials.isFavorite ? "#FAA300" : "white"}
                
                size={20} />
              </div>
              <p className="text-gray-400 text-sm">Posted at: {format(new Date(item.postedAt), "EEE, MMM dd, yyyy")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
