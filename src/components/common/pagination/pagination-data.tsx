"use client"
import React from "react";

type PaginationDataProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const PaginationData = ({ currentPage, totalPages, onPageChange }: PaginationDataProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="basic-pagination">
      <nav>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <i className="fas fa-long-arrow-left"></i>
            </button>
          </li>
          {pages.map((page) => (
            <li key={page}>
              {page === currentPage ? (
                <span className="current">{String(page).padStart(2, "0")}</span>
              ) : (
                <button type="button" onClick={() => onPageChange(page)}>
                  {String(page).padStart(2, "0")}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <i className="fas fa-long-arrow-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationData;