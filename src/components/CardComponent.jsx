import { format } from "date-fns";
import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ product, countDate }) {
  // console.log(product);

  // const {product = {}} = props;
  const getProgressColor = (progress) => {
    const progressValue = Number(progress); // Ensure it's a number

    if (progress === 25) return "#F4538A";
    if (progress === 50) return "#F5DD61";
    if (progress === 75) return "#FAA300";
    if (progress === 100) return "#59D5E0";
    return "#55edb8"; // Default Gray
  };
  // console.log("Progress value type:", typeof product.progress, product.progress);

  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`text-custom-sky-blue font-medium`}>
            {format(new Date(product.date), "EEE, MMM dd, yyyy")}
            {/* Jan 17, 2025 */}
          </p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        {/* Title */}
        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>

        {/* Description */}
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {product.description}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{product.progress}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            // className= {`${getProgressColor(product.getProgressColor)} h-2.5 rounded-full`}
            className="text-custom-sky-blue h-2.5 rounded-full"
            style={{
              width: `${product.progress}%`,
              backgroundColor: getProgressColor(product.progress),
            }}
          ></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 w-fit rounded-lg text-center text-[red] font-bold">
            {product.deadLine}
          </p>
          {/* <p>{countDate === 0 ? "Today is the deadline" : `Deadline in ${countDate} day(s)`}</p> */}
        </div>
      </div>
    </div>
  );
}
