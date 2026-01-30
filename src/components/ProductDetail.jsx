import React, { useContext, useState } from "react";
import {
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  Box,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Minus,
  Plus,
  Info,
} from "lucide-react";
import { CartContext } from "../context/CartContext";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useContext(CartContext);

  // Price Calculation
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const toggleTab = (tab) => setActiveTab(activeTab === tab ? null : tab);

  return (
    <div className="flex flex-col w-full max-w-xl bg-white text-black font-sans p-6 md:p-0">
      {/* Brand & Title Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
            {product.brand}
          </span>
          <span className="text-[10px] font-bold border border-black px-2 py-0.5 uppercase tracking-widest">
            SKU: {product.sku}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tighter mb-4">
          {product.title}
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-black text-white px-2 py-1 gap-1">
            <span className="text-xs font-bold">{product.rating}</span>
            <Star size={10} className="fill-white" />
          </div>
          <span
            className={`text-xs font-bold uppercase tracking-widest ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}
          >
            • {product.availabilityStatus}
          </span>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex items-baseline gap-4 mb-10 pb-8 border-b border-gray-100">
        <span className="text-4xl font-black tracking-tight">
          ₹{discountedPrice}
        </span>
        <span className="text-xl text-gray-300 line-through font-light">
          ₹{product.price}
        </span>
        <span className="bg-gray-100 text-[10px] font-black px-2 py-1 uppercase ml-auto">
          {Math.round(product.discountPercentage)}% Off
        </span>
      </div>

      {/* Product Summary */}
      <p className="text-gray-600 leading-relaxed text-lg mb-10 font-medium">
        {product.description}
      </p>

      {/* Quantity & CTA */}
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex gap-4">
          <div className="flex items-center border-2 border-black h-14 w-32 justify-between px-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="hover:opacity-50"
            >
              <Minus size={16} strokeWidth={3} />
            </button>
            <span className="font-bold text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              className="hover:opacity-50"
            >
              <Plus size={16} strokeWidth={3} />
            </button>
          </div>
          <button
            className="flex-1 bg-black text-white h-14 uppercase font-black tracking-[0.15em] hover:bg-zinc-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            onClick={() => addToCart(product, quantity)}
          >
            <ShoppingCart size={18} /> Add to Bag
          </button>
        </div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
          Minimum Order Quantity: 1 units
        </p>
      </div>

      {/* Detailed Info (Accordion Style) */}
      <div className="border-t border-black">
        {/* Shipping & Warranty */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => toggleTab("shipping")}
            className="w-full py-5 flex justify-between items-center group"
          >
            <span className="font-bold uppercase tracking-widest text-sm flex items-center gap-3">
              <Truck size={16} /> Shipping & Returns
            </span>
            {activeTab === "shipping" ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {activeTab === "shipping" && (
            <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
              <ul className="text-sm text-gray-600 space-y-3 font-medium">
                <li className="flex justify-between">
                  <span>Delivery</span>{" "}
                  <span className="text-black font-bold">
                    {product.shippingInformation}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Return Policy</span>{" "}
                  <span className="text-black font-bold">
                    {product.returnPolicy}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Warranty</span>{" "}
                  <span className="text-black font-bold">
                    {product.warrantyInformation}
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Dimensions & Logistics */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => toggleTab("specs")}
            className="w-full py-5 flex justify-between items-center group"
          >
            <span className="font-bold uppercase tracking-widest text-sm flex items-center gap-3">
              <Box size={16} /> Specifications
            </span>
            {activeTab === "specs" ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {activeTab === "specs" && (
            <div className="pb-6 text-sm grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3">
                <span className="block text-[10px] text-gray-400 font-bold uppercase mb-1">
                  Dimensions
                </span>
                <span className="font-bold">
                  {product.dimensions.width} x {product.dimensions.height} x{" "}
                  {product.dimensions.depth} cm
                </span>
              </div>
              <div className="bg-gray-50 p-3">
                <span className="block text-[10px] text-gray-400 font-bold uppercase mb-1">
                  Weight
                </span>
                <span className="font-bold">{product.weight} kg</span>
              </div>
              <div className="col-span-2 flex items-center justify-between p-3 border border-dashed border-gray-200">
                <div className="flex items-center gap-3">
                  <Info size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Scan for more info
                  </span>
                </div>
                <img
                  src={product.meta.qrCode}
                  alt="QR Code"
                  className="w-12 h-12 grayscale"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
