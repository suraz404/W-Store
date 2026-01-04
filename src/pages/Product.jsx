import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const { data } = useContext(DataContext);
  console.log(data);

  return (
    <div className="bg-[rgb(231,231,231)] ">
      <div className="max-w-6xl mx-auto  px-4 mb-10 ">
        {data && data.length > 0 ? (
          <div className="flex gap-8  ">
            {/* Sidebar */}
            <FilterSection />

            <div className="grid grid-cols-2 md:grid-cols-3  gap-6 mt-6 m-4">
              {data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
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
