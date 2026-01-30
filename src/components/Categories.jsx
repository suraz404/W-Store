import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Categories = () => {
  const { categories } = useContext(DataContext);

  const uniqueCategories = categories;

  return (
    <div className="flex justify-center gap-6 mt-11  flex-wrap">
      {uniqueCategories.map((cat) => (
        <button
          key={cat}
          className="
            px-5 py-2
            border border-black
            bg-white text-black
            rounded-full
            text-sm font-medium
            transition-all
            hover:bg-black hover:text-white
            
          "
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
