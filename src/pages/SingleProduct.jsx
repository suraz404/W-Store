import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import ProductGallery from "../components/ProductGallery";
import ProductDetail from "../components/ProductDetail";
import ReviewsSection from "../components/ReviewsSection";
import RecommendedProducts from "../components/RecommendedProducts";
import { DataContext } from "../context/DataContext";

const SingleProduct = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2
          className="animate-spin text-black mb-4"
          size={40}
          strokeWidth={1}
        />
        <p className="uppercase tracking-[0.3em] text-[10px] font-black">
          Loading Experience
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center border border-black p-10 max-w-md">
          <p className="uppercase font-black tracking-widest text-red-600 mb-4">
            System Error
          </p>
          <p className="text-sm text-gray-500 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Recommended products logic
  const recommended = data
    .filter(
      (item) =>
        item.id !== product.id &&
        (item.category === product.category || item.brand === product.brand),
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white px-10">
      {/* Breadcrumb / Top Bar */}
      <div className="max-w-[1440px] mx-auto px-6 py-8 flex items-center justify-between">
        <Link
          to="/products"
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Collection
        </Link>

        <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
          <Link to="/" className="hover:text-black transition">
            W-Store
          </Link>
          <span>/</span>
          <div
            onClick={() => navigate(`/category/${product.category}`)}
            className="hover:text-black transition"
          >
            {product.category.toUpperCase()}
          </div>
          <span>/</span>
          <span className="text-black">{product.title}</span>
        </div>
      </div>

      {/* Main Layout Grid */}
      <main className="max-w-[1440px] mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
          {/* LEFT COLUMN: Gallery */}
          <div className="flex-1">
            <ProductGallery images={product.images} title={product.title} />
          </div>

          {/* RIGHT COLUMN: Details (Sticky) */}
          <div className="lg:w-[450px] xl:w-[500px]">
            <div className="lg:sticky lg:top-10">
              <ProductDetail product={product} />
            </div>
          </div>
        </div>

        {/* Reviews */}
        <ReviewsSection reviews={product.reviews} rating={product.rating} />

        {/* Recommended */}
        <RecommendedProducts products={recommended} />
      </main>
    </div>
  );
};

export default SingleProduct;
