import React, { useState } from "react";

export default function Pagination({ product, handlepage }) {
  //console.log(props,'props')
  const [pageCount, setPageCount] = useState(1);

  const handlePageNumber = (pagenumber) => {
    handlepage(pagenumber);
    setPageCount(pagenumber);
    // console.log(pagenumber, "page");
  };

  const handlePrevious = () => {
    handlepage(pageCount - 1);
    setPageCount(pageCount - 1);
  };
  const handleNext = () => {
    handlepage(pageCount + 1);
    setPageCount(pageCount + 1);
  };

  return (
    <div className="pagination">
      <button
        className={pageCount == 1 ? "button-visiblity" : ""}
        onClick={() => {
          handlePrevious();
        }}
      >
        prev
      </button>
      {[...Array(product.length / 10)].map((e, i) => {
        return (
          <span
            onClick={() => handlePageNumber(i + 1)}
            className={pageCount == i + 1 ? "pagination_selected" : ""}
          >
            {i + 1}
          </span>
        );
      })}
      <button
        className={product.length / 10 == 10 ? "button-visiblity" : ""}
        onClick={() => {
          handleNext();
        }}
      >
        Next
      </button>
    </div>
  );
}
