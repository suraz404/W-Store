import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const FilterSection = () => {
  const { categories } = useContext(DataContext);

  const uniqueCategories = categories;
  return (
    <div className="bg-white m-6 p-4 h-max">
      <input
        type="text "
        placeholder="Search..."
        className="p-2 mt-5 border border-gray-400 rounded-md"
      />
      <hr className="mt-6 text-gray-400" />
      <h1 className="  text-md font-semibold mt-4 ">Categories</h1>
      <hr className="mt-4 text-gray-400" />
      <div className="flex flex-col gap-2 mt-2">
        {uniqueCategories.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input type="checkbox" />
              <button>{item}</button>
            </div>
          );
        })}
      </div>
      <hr className="my-6 text-gray-400" />
      <h1 className="  text-md font-semibold mt-4 ">Price Range</h1>
      <div className="flex flex-col gap-2 mt-2">
        <label className="text-sm" htmlFor="">
          Price:- $0-$50000
        </label>
        <input type="range" name="" id="" />
      </div>
      <button
        className="
            px-5 py-2
            border border-black
            bg-white text-black
            rounded-full
            text-sm font-medium
            transition-all
            hover:bg-black hover:text-white mt-4"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
