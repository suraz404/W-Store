import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  // Logic to calculate which page numbers to show
  const getPages = () => {
    const pages = [];
    const showMax = 5; // How many numbers to show at once

    if (totalPages <= showMax) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1); // Always show first page

      if (currentPage > 3) pages.push("...");

      // Show neighbors of current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) end = 4;
      if (currentPage >= totalPages - 1) start = totalPages - 3;

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");

      if (!pages.includes(totalPages)) pages.push(totalPages); // Always show last
    }
    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex flex-col items-center gap-6 mt-20 mb-10">
      {/* Page Info for User */}
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-1 md:gap-3">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="p-3 border border-zinc-200 hover:border-black disabled:opacity-20 disabled:hover:border-zinc-200 transition-all group"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </button>

        {/* Dynamic Page Numbers */}
        <div className="flex items-center">
          {pages.map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-3 text-zinc-300 font-bold">...</span>
              ) : (
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 md:w-12 md:h-12 text-xs font-black transition-all border-y border-x -ml-[1px]
                    ${
                      currentPage === page
                        ? "bg-black text-white border-black z-10"
                        : "bg-white text-black border-zinc-200 hover:bg-zinc-50"
                    }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-3 border border-zinc-200 hover:border-black disabled:opacity-20 disabled:hover:border-zinc-200 transition-all group"
        >
          <ChevronRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
