import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./Categories";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 
               cursor-pointer bg-black/60 p-3 rounded-full text-white"
  >
    ▶
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 
               cursor-pointer bg-black/60 p-3 rounded-full text-white"
  >
    ◀
  </div>
);

const Carousel = () => {
  const { data } = useContext(DataContext);

  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };

  return (
    <div className="overflow-hidden relative">
      <Slider {...settings}>
        {data?.slice(0, 7).map((item) => (
          <div
            key={item.id}
            className="bg-linear-to-r from-black via-neutral-900 to-neutral-600"
          >
            <div className="flex gap-10 justify-center items-center h-150 px-4 text-white">
              <div className="space-y-6 md:w-125">
                <h3 className="font-semibold">
                  Powering the e-commerce in one
                </h3>
                <h1 className="text-4xl font-bold uppercase">{item.title}</h1>
                <p className="line-clamp-3 pr-7 text-sm">{item.description}</p>
<<<<<<< HEAD
                <Link to={`/products/${item.id}`}>
                  <button className="px-4 py-2 bg-gray-500 rounded-xl hover:bg-gray-400">
                    Shop Now
                  </button>
                </Link>
=======
                <button className="px-4 py-2 bg-gray-500 rounded-xl hover:bg-gray-400">
                  Shop Now
                </button>
>>>>>>> 4ddab64d5d37e4c590dc68235d450ab849be0545
              </div>

              <img
                src={item.images[0]}
                alt={item.title}
                className="h-100 w-100 hover:scale-105 transition-all 
                           shadow-2xl shadow-gray-500 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </Slider>
      <Categories />
    </div>
  );
};

export default Carousel;
