import React from "react";

const MidBanner = () => {
  return (
    <div className=" md:py-15">
      <div
        className="relative max-w-6xl mx-auto md:rounded-2xl pt-22 bg-cover bg-center h-137.5 md:h-150 "
        style={{
          backgroundImage: `url(https://notbasics.co.uk/cdn/shop/articles/blogpost-covers-2_f7ed82fd-00b4-44ef-9524-f0d1554e1bad_1200x.png?v=1744311305)`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Next-Gen at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the latest tech innovations with unbeatable prices and
              free shipping on all orders.
            </p>
            <button
              className="
            px-5 py-2
            border border-black
            bg-white text-black
            rounded-full
            text-sm font-medium
            transition-all
            hover:bg-black hover:text-white"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
