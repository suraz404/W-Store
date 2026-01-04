import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col gap-1">
      {/* Image */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />

      {/* Product Name */}
      <h3 className="text-md line-clamp-2  font-medium text-gray-900 mb-1">
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-base font-semibold text-gray-900 mb-2">
        ${product.price}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${
              i < Math.round(product.rating?.rate || 0)
                ? "fill-gray-900 text-gray-900"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Button */}
      <button className="mt-auto bg-black text-white text-sm py-2.5 rounded-full hover:bg-gray-900 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
