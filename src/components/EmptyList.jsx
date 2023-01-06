import React from "react";

function EmptyList() {
  return (
    <div className="col-12">
      <div className="text-content">
        <h4 className="text-center">Sorry, your filter produced no results</h4>
        <p className="text-center">
          To widen your search, change or remove filters above
        </p>
        <div className="text-center"></div>
      </div>
    </div>
  );
}

export default EmptyList;
