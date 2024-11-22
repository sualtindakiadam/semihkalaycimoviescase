import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const range = 2; // Ne kadar öncesi ve sonrası görünsün

    // Başlangıç ve bitiş sayfası için gerekli aralıkları belirle
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);

    // İlk sayfa
    if (start > 1) {
      pageNumbers.push(
        <button
          key={1}
          className="mx-1 px-3 py-1 border bg-white text-blue-500"
          onClick={() => handlePageClick(1)}
        >
          1
        </button>
      );
      if (start > 2) {
        pageNumbers.push(
          <span key="dots-1" className="mx-1 text-blue-500">...</span>
        );
      }
    }

    // Orta sayfalar
    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 border ${
            i === currentPage ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    // Son sayfa
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pageNumbers.push(
          <span key="dots-2" className="mx-1 text-blue-500">...</span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          className="mx-1 px-3 py-1 border bg-white text-blue-500"
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className={`mx-1 px-3 py-1 border ${currentPage === 1 ? "opacity-50" : ""}`}
        disabled={currentPage === 1}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        className={`mx-1 px-3 py-1 border ${currentPage === totalPages ? "opacity-50" : ""}`}
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
