import React from "react";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

const calculatePages = (current, totalPages) => {
  if (current <= 2) {
    return range(1, 5).concat([totalPages]);
  } else if (current >= totalPages - 5) {
    return [1].concat(range(totalPages - 5, totalPages));
  }
  return range(current - 2, current + 2).concat([totalPages]);
};

const Paginator = ({ current, total, onPageClick }) => {
  const pages = calculatePages(current, total);

  return (
    <div className="flex justify-center">
      {pages.map((page) => (
        <span
          className={`mx-3 text-lg cursor-pointer ${
            page === current ? "font-bold" : ""
          }`}
          key={page}
          onClick={() => onPageClick(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
