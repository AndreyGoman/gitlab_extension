import React from "react";

import ListTitle from "./ListTitle";
import ListItem from "./ListItem";
import EmptyList from "./EmptyList";

function List({
  title = "Merge Requests",
  items = [],
  ItemComponent = ListItem,
}) {
  return (
    <>
      <ListTitle title={title} count={items.length} />
      {items && items.length ? (
        <ul className="content-list mr-list issuable-list">
          {items.map((item) => (
            <ItemComponent item={item} />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default List;
