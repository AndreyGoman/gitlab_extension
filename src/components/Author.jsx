import React from "react";

function Author({ author }) {
  return (
    <a
      className="author-link js-user-link"
      data-user-id={author.id}
      data-username={author.username}
      data-name={author.name}
      href={author.web_url}
    >
      <span className="author">{author.name}</span>
    </a>
  );
}

export default Author;
