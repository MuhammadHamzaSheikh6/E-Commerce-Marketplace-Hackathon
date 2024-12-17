'use client'
import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Total number of pages
  const pagesPerSet = 4; // Number of visible page buttons at a time
  const currentSet = Math.floor((currentPage - 1) / pagesPerSet);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevious = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
    }
  };

  const getVisiblePages = () => {
    const startPage = currentSet * pagesPerSet + 1;
    const endPage = Math.min(startPage + pagesPerSet - 1, totalPages);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 justify-center my-12">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded w-full md:w-auto text-sm md:text-base ${
          currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white text-black border"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex flex-wrap gap-2 justify-center">
        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 rounded text-sm md:text-base ${
              currentPage === page ? "bg-yellow-600 text-white" : "bg-amber-100 text-black"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded w-full md:w-auto text-sm md:text-base ${
          currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white text-black border"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
