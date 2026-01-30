import React from "react";
import { Link } from "react-router-dom";
import { Plus, ArrowRight } from "lucide-react";

const RecommendedProducts = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="border-t border-zinc-100 mt-24 py-20 max-w-[1440px] mx-auto px-6">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            Next on your list
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">
            Recommended
          </h2>
        </div>
        <Link to={"/products"}>
          <button className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-all">
            Explore All{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        {products.slice(0, 4).map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="group block bg-white"
          >
            {/* Image Container */}
            <div className="relative aspect-4/5 bg-[#f9f9f9] overflow-hidden mb-6 flex items-center justify-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-[80%] h-[80%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
              />

              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <div className="w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-black text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-2xl hover:bg-zinc-800">
                    <Plus size={14} /> Add to Bag
                  </button>
                </div>
              </div>

              {/* Minimalist Discount Badge */}
              {item.discountPercentage > 0 && (
                <div className="absolute top-0 left-0 bg-black text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-widest">
                  -{Math.round(item.discountPercentage)}%
                </div>
              )}
            </div>

            {/* Product Meta */}
            <div className="space-y-1 px-1">
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-bold uppercase text-[13px] tracking-tight leading-tight truncate">
                  {item.title}
                </h4>
                <span className="font-black text-[13px]">
                  ₹{Math.round(item.price)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                <span>{item.brand || "W-Store"}</span>
                <span className="text-zinc-300 group-hover:text-black transition-colors">
                  Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
