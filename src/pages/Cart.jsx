import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
<<<<<<< HEAD
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

=======
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.qty || 1),
    0,
  );

>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
        <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={32} strokeWidth={1} />
        </div>
        <h1 className="text-2xl font-black uppercase tracking-tighter mb-6">
          Your bag is empty
        </h1>
        <Link
          to="/"
          className="bg-black text-white px-10 py-4 uppercase text-xs font-black tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-20 lg:px-32 py-24">
<<<<<<< HEAD
      {/* Header */}
=======
      {/* Page Header */}
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
      <div className="flex items-baseline justify-between border-b-4 border-black pb-6 mb-12">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
          Bag
        </h1>
        <span className="font-bold text-sm md:text-lg uppercase tracking-widest text-zinc-400">
<<<<<<< HEAD
          [{totalItems} Items]
=======
          [{cart.length} Items]
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
<<<<<<< HEAD
        {/* Cart Items */}
        <div className="grow space-y-10">
=======
        {/* Left: Cart Items List */}
        <div className="flex-grow space-y-10">
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
          {cart.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col md:flex-row gap-6 md:items-center justify-between border-b border-zinc-100 pb-10"
            >
              <div className="flex gap-6 items-center">
<<<<<<< HEAD
                <div className="w-24 h-32 md:w-32 md:h-40 bg-zinc-50 overflow-hidden">
                  <Link to={`/products/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                  </Link>
=======
                {/* Product Image */}
                <div className="w-24 h-32 md:w-32 md:h-40 bg-zinc-50 overflow-hidden flex-shrink-0">
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

<<<<<<< HEAD
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg md:text-xl font-black uppercase tracking-tight">
=======
                {/* Product Info */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg md:text-xl font-black uppercase tracking-tight leading-tight">
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
                    {item.title}
                  </h2>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                    Unit Price: ₹{item.price}
                  </p>

<<<<<<< HEAD
                  {/* Quantity */}
                  <div className="flex items-center border border-zinc-200 w-fit mt-4">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-2 hover:bg-zinc-50"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="px-4 font-bold text-xs">{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-2 hover:bg-zinc-50"
                    >
=======
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-zinc-200 w-fit mt-4">
                    <button className="p-2 hover:bg-zinc-50">
                      <Minus size={14} />
                    </button>
                    <span className="px-4 font-bold text-xs">
                      {item.qty || 1}
                    </span>
                    <button className="p-2 hover:bg-zinc-50">
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Price + Remove */}
              <div className="flex md:flex-col items-center md:items-end gap-4">
                <p className="text-xl font-black tracking-tighter">
                  ₹{(item.price * item.qty).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-zinc-300 hover:text-black transition-colors"
=======
              {/* Price & Action */}
              <div className="flex md:flex-col items-center md:items-end justify-between gap-4">
                <p className="text-xl font-black tracking-tighter">
                  ₹{(item.price * (item.qty || 1)).toFixed(2)}
                </p>
                <button
                  className="text-zinc-300 hover:text-black transition-colors"
                  title="Remove Item"
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
                >
                  <Trash2 size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Summary */}
=======
        {/* Right: Summary Sidebar */}
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
        <div className="lg:w-[400px]">
          <div className="bg-zinc-50 p-8 lg:sticky lg:top-24">
            <h2 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-zinc-200 pb-4">
              Summary
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-zinc-400 uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
              </div>
<<<<<<< HEAD

=======
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
              <div className="flex justify-between text-sm">
                <span className="font-bold text-zinc-400 uppercase tracking-widest">
                  Shipping
                </span>
<<<<<<< HEAD
                <span className="font-bold text-green-600 text-[10px] uppercase tracking-widest">
=======
                <span className="font-bold text-green-600 uppercase tracking-widest text-[10px]">
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
                  Free
                </span>
              </div>
            </div>

            <div className="flex justify-between items-end border-t border-black pt-6 mb-10">
              <span className="font-black uppercase tracking-[0.2em] text-xs">
                Total
              </span>
              <span className="text-4xl font-black tracking-tighter">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>

<<<<<<< HEAD
            <button className="w-full bg-black text-white py-5 uppercase font-black tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95">
              Checkout
              <ArrowRight size={18} />
            </button>

            <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-6 text-center">
=======
            <button className="w-full bg-black text-white py-5 uppercase font-black tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all group active:scale-95">
              Checkout{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-6 text-center leading-relaxed">
              Taxes and shipping calculated at checkout <br />
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
              Secure Encrypted Payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
