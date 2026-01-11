import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const Product = () => {
  const { data } = useContext(DataContext);

  // 🔍 Filter states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  // 📄 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 🎯 Filtering logic
  const filteredData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "ALL" || item.category.toUpperCase() === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
    );
  });

  // 📐 Pagination calculation
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayPage = currentPage > totalPages ? 1 : currentPage;

  const paginatedData = filteredData.slice(
    (displayPage - 1) * itemsPerPage,
    displayPage * itemsPerPage
  );

  // 🧠 Handlers
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleResetButton = () => {
    setCategory("ALL");
    setPriceRange([0, 5000]);
    setSearch("");
  };

  return (
    <div className="bg-[rgb(231,231,231)]">
      <div className="max-w-7xl mx-auto px-2 mb-10">
        {data && data.length > 0 ? (
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleCategoryChange={handleCategoryChange}
              handleResetButton={handleResetButton}
            />

            {/* Products + Pagination */}
            <div className="flex-1 mb-3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 m-4">
                {paginatedData.length > 0 ? (
                  paginatedData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500">
                    No item found
                  </p>
                )}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={displayPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">No items found</div>
        )}
      </div>
    </div>
  );
};

export default Product;
