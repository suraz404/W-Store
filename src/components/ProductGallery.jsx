import { useState } from "react";

const ProductGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // If there are no images, show a placeholdesr
  if (!images || images.length === 0)
    return (
      <div className="w-[420px] aspect-square bg-zinc-50 animate-pulse flex items-center justify-center uppercase text-[10px] tracking-widest font-bold">
        No Image Available
      </div>
    );

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 lg:sticky lg:top-24 h-fit">
      {/*  Thumbnails */}
      <div className="flex md:flex-col gap-3 ">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)} // Hover triggers change for a premium feel
            className={`relative shrink-0 w-16 md:w-20 aspect-square overflow-hidden bg-[#f9f9f9] transition-all duration-300
              ${
                index === activeIndex
                  ? "opacity-100 ring-1 ring-black"
                  : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
              }
            `}
          >
            <img
              src={img}
              alt={`${title} view ${index + 1}`}
              className="w-full h-full object-contain mix-blend-multiply p-1"
            />
          </button>
        ))}
      </div>

      {/* Main Image*/}
      <div className="relative group bg-[#f6f6f6] w-full md:w-[500px] lg:w-[600px] aspect-square flex items-center justify-center overflow-hidden">
        {/* Subtle Brand Watermark Background */}
        <span className="absolute inset-0 flex items-center justify-center text-[12rem] font-black text-black/2 select-none pointer-events-none uppercase">
          W.
        </span>

        <img
          key={activeIndex} // Using key for simple re-mount animation
          src={images[activeIndex]}
          alt={title}
          className="w-[85%] h-[85%] object-contain mix-blend-multiply transition-all duration-700 ease-out group-hover:scale-110 animate-in fade-in zoom-in-95"
        />
        <div className="absolute bottom-6 right-6">
          <p className="text-[10px] font-black tracking-widest uppercase bg-white px-3 py-1 shadow-sm border border-black/5">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
