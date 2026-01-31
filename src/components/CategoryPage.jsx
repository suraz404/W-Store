import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Filter, ChevronDown, X } from "lucide-react";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("featured"); // featured, price-low, price-high
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const url =
          categoryName === "all"
            ? "https://dummyjson.com/products?limit=200"
            : `https://dummyjson.com/products/category/${categoryName}`;

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryName]);

  // --- SORTING LOGIC ---
  const sortedProducts = useMemo(() => {
    let result = [...products];
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "discount") {
      result.sort((a, b) => b.discountPercentage - a.discountPercentage);
    }
    return result;
  }, [products, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-t-black border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen selection:bg-black selection:text-white">
      {/* 1. Header & Controls */}
      <div className="sticky top-0 z-40 bg-white px-4 md:px-12 py-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">
            {categoryName.replace("-", " ")}
            <span className="text-gray-400 font-medium not-italic ml-2">
              ({products.length})
            </span>
          </h1>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-50 transition">
                Sort By:{" "}
                <span className="text-gray-400">
                  {sortBy.replace("-", " ")}
                </span>{" "}
                <ChevronDown size={16} />
              </button>

              {/* Sort Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 z-50">
                {["featured", "price-low", "price-high", "discount"].map(
                  (option) => (
                    <button
                      key={option}
                      onClick={() => setSortBy(option)}
                      className="w-full text-left px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 capitalize"
                    >
                      {option.replace("-", " ")}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-4 md:px-12 py-10 transition-all duration-500">
        <div className="flex-1">
          <div className=" grid gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16 transition-all duration-500 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {sortedProducts.map((product) => (
              <div
                onClick={() => navigate(`/products/${product.id}`)}
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] bg-[#f6f6f6] overflow-hidden mb-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-contain mix-blend-multiply p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {product.discountPercentage > 12 && (
                    <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                      Top Seller
                    </div>
                  )}
                </div>

                <div className="space-y-0.5 px-1">
                  <h3 className="font-bold uppercase text-[14px] tracking-tight leading-tight group-hover:text-gray-600 transition">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium capitalize">
                    {product.category.replace("-", " ")}
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <span className="font-black text-sm tracking-tight">
                      $
                      {Math.round(
                        product.price -
                          (product.price * product.discountPercentage) / 100,
                      )}
                    </span>
                    <span className="text-gray-400 line-through text-[11px] font-bold tracking-tighter">
                      ₹{product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 text-center border-t border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 italic">
          Victory through recovery — W-Store
        </p>
      </div>
    </div>
  );
};

export default CategoryPage;
