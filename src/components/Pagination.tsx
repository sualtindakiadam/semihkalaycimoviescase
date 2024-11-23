import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { setCurrentPage } from 'src/redux/filtersSlice'; 

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const dispatch = useDispatch();

  // Redux store'dan currentPage'i alıyoruz
  const currentPage = useSelector((state: RootState) => state.selectedFilters.currentPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1)); // Redux ile sayfa azalt
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1)); // Redux ile sayfa artır
    }
  };

  const handlePageClick = (page: number) => {
    dispatch(setCurrentPage(page)); // Redux ile belirli bir sayfaya geçiş
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const range = 2;

    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);

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

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 border ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

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
        className={`mx-1 px-3 py-1 border ${currentPage === 1 ? 'opacity-50' : ''}`}
        disabled={currentPage === 1}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        className={`mx-1 px-3 py-1 border ${currentPage === totalPages ? 'opacity-50' : ''}`}
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
