import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartProvider } from "../context/CartProvider";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-70 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col h-100 gap-1">
      {/* Image */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-40 object-contain mb-4"
        onClick={() => navigate(`./${product.id}`)}
      />

      {/* Product Name */}
      <h2 className="text-md line-clamp-2  font-medium text-gray-900 mb-1">
        {product.title}
      </h2>
      {/* Price */}
      <p className="text-base font-semibold text-gray-900 mb-2">
        ${product.price}
      </p>
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => {
          const full = i + 1 <= Math.floor(product.rating);
          const half = i + 0.5 === product.rating;
          return (
            <Star
              key={i}
              size={14}
              className={`${
                full
                  ? "fill-gray-900 text-gray-900"
                  : half
                    ? "fill-gray-500 text-gray-500"
                    : "text-gray-300"
              }`}
            />
          );
        })}
      </div>
      {/* Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-black text-white text-sm py-2.5 rounded-full hover:bg-gray-900 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
