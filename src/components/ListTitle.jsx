import React from "react";

function ListTitle({ title = "Default title", count = 0 }) {
  return (
    <div className="page-title-holder d-flex align-items-center">
      <h1 className="page-title">
        {title} <span className="page-title-counter">{count}</span>
      </h1>
      <div className="page-title-controls"></div>
    </div>
  );
}

export default ListTitle;
