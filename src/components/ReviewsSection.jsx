import React from "react";
import { Star, Check, User } from "lucide-react";

const ReviewsSection = ({ reviews, rating }) => {
  // Calculate star distribution for the bars
  const totalReviews = reviews?.length || 0;
  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const count =
      reviews?.filter((r) => Math.round(r.rating) === star).length || 0;
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return { star, percentage, count };
  });

  return (
    <div className="border-t border-black mt-24 pt-16 max-w-[1440px] mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT: Ratings Dashboard */}
        <div className="lg:w-1/3">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">
            Client Feedback
          </h3>

          <div className="flex items-end gap-4 mb-10">
            <span className="text-7xl font-black leading-none">{rating}</span>
            <div className="pb-1">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(rating)
                        ? "fill-black text-black"
                        : "text-zinc-200"
                    }
                  />
                ))}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Based on {totalReviews} Reviews
              </p>
            </div>
          </div>

          {/* Distribution Bars */}
          <div className="space-y-4">
            {distribution.map((item) => (
              <div key={item.star} className="flex items-center gap-4 group">
                <span className="text-[10px] font-bold w-2">{item.star}</span>
                <div className="flex-1 h-[2px] bg-zinc-100 relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-black transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 w-8 text-right group-hover:text-black transition-colors">
                  {Math.round(item.percentage)}%
                </span>
              </div>
            ))}
          </div>

          <button className="w-full mt-12 py-4 border-2 border-black text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
            Write a Review
          </button>
        </div>

        {/* RIGHT: Review List */}
        <div className="lg:w-2/3">
          <div className="space-y-12">
            {reviews?.map((review, index) => (
              <div
                key={index}
                className="border-b border-zinc-100 pb-12 last:border-0"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    {/* Minimalist Avatar */}
                    <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center rounded-none">
                      <User size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold uppercase text-xs tracking-wider">
                          {review.reviewerName}
                        </span>
                        <div className="flex items-center gap-1 bg-zinc-100 px-1.5 py-0.5">
                          <Check
                            size={10}
                            className="text-black"
                            strokeWidth={3}
                          />
                          <span className="text-[8px] font-black uppercase tracking-tighter">
                            Verified
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            className={
                              i < review.rating
                                ? "fill-black text-black"
                                : "text-zinc-200"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <p className="text-zinc-600 leading-relaxed font-medium pl-14">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
