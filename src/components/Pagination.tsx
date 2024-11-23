import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { setCurrentPage } from 'src/redux/filtersSlice';
import '../app/globals.scss'

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state: RootState) => state.selectedFilters.currentPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1)); 
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1)); 
    }
  };

  const handlePageClick = (page: number) => {
    dispatch(setCurrentPage(page)); 
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
          className="pagination-button first"
          onClick={() => handlePageClick(1)}
        >
          1
        </button>
      );
      if (start > 2) {
        pageNumbers.push(
          <span key="dots-1" className="pagination-dots">......</span>
        );
      }
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`pagination-button ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pageNumbers.push(
          <span key="dots-2" className="pagination-dots">......</span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          className="pagination-button last"
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-wrapper">
      <button
        className={`pagination-button prev ${currentPage === 1 ? 'disabled' : ''}`}
        disabled={currentPage === 1}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        className={`pagination-button next ${currentPage === totalPages ? 'disabled' : ''}`}
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
