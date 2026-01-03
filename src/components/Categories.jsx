import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Categories = () => {
  const { data } = useContext(DataContext);

  const getUniqueCategories = (products) => {
    if (!products) return [];

    return [...new Set(products.map((item) => item.category.name))];
  };

  const uniqueCategories = getUniqueCategories(data);
  console.log(uniqueCategories);

  return (
    <div className=" flex justify-center gap-6  mt-11">
      {uniqueCategories.map((cat) => (
        <button
          key={cat}
          type="button"
          className="
            
            px-5 py-2
            border border-black
            bg-white text-black
            rounded-full
            text-sm font-medium
            cursor-pointer
            transition-all duration-200
            hover:bg-black hover:text-white
            focus:outline-none focus:ring-2 focus:ring-black
          "
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
