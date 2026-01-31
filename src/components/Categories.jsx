import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const { categories } = useContext(DataContext);
  const navigate = useNavigate();

  const uniqueCategories = categories;

  return (
    <div className="mt-8">
      <h1 className="text-2xl text-center md:text-6xl font-black uppercase tracking-tighter italic ">
        Categories
      </h1>
      <div className="flex justify-center gap-6 mt-11  flex-wrap">
        {uniqueCategories.map((cat) => (
          <button
            onClick={() => navigate(`/category/${cat.toLowerCase()}`)}
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
    </div>
  );
};

export default Categories;
