import React, { useEffect, useState } from "react";
import { learningMaterials } from '../data/learningMaterials';

export default function FilterComponent({handleSortMaterials, materials}) {
  // const [isAscending, setIsAscending] = useState(true); // Initial sorting state
  const [sortedMaterials, setSortedMaterials] = useState(materials);

  console.log("materials in filter: " , materials);
  

  // Prevent the page from reloading on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Sorting logic based on selected option
  const handleSortChange = (e) => {
    // const sortOption = e.target.value;
    console.log(e.target.value)

    let sorted;
    if (e.target.value === "A-Z") {
      // console.log(e.target.value)
      sorted = [...sortedMaterials].sort((a, b) => a.title.localeCompare(b.title));
    } else if (e.target.value === "Z-A") {
      sorted = [...sortedMaterials].sort((a, b) => b.title.localeCompare(a.title));
    }

    setSortedMaterials(sorted); // Update the state with the sorted array
    handleSortMaterials(sorted)
  };

  useEffect(() => {
    setSortedMaterials(materials);
  }, [materials])

  return (
    <div>
      <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <select
            id="filterLearningMaterials"
            name="filterLearningMaterials"
            className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
            onChange={handleSortChange} // Handle sort option change
          >
            <option hidden value="">Sort By</option>
            <optgroup label="Sort By">
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </optgroup>
          </select>
        </div>
      </form>

      {/* Render sorted learning materials */}
      {/* <div>
        {sortedMaterials.map((item, index) => (
          <div key={index} className="mt-2">
            <h3>{item.title}</h3>
            <p>Posted on: {item.postedAt}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
