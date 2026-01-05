import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  category,
  priceRange,
  setPriceRange,
  handleCategoryChange,
  handleResetButton,
}) => {
  const { categories } = useContext(DataContext);

  const uniqueCategories = categories;
  return (
    <div className="bg-white  text-black m-6 p-4 h-max">
      <input
        type="text "
        placeholder="Search..."
        className="p-2 mt-5 border border-gray-400 rounded-md"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <hr className="mt-6 text-gray-400" />
      <h1 className="  text-md font-semibold mt-4 ">Categories</h1>
      <hr className="mt-4 text-gray-400" />
      <div className="flex flex-col gap-2 mt-2">
        {uniqueCategories.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input
                type="checkbox"
                name={item}
                checked={item === category}
                value={item}
                onChange={handleCategoryChange}
              />
              <button>{item}</button>
            </div>
          );
        })}
      </div>

      <hr className="my-6 text-gray-400" />

      <h1 className="  text-md font-semibold mt-4 ">Price Range</h1>
      <div className="flex flex-col gap-2 mt-2">
        <label className="text-sm" htmlFor="">
          Price:- ${priceRange[0]}-${priceRange[1]}
        </label>
        <input
          type="range"
          name=""
          id=""
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
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
        onClick={handleResetButton}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
