import React from "react";
import clsx from "clsx";

function Comments({ value, url }) {
  return (
    <a
      className={clsx("has-tooltip", { "no-comments": !value })}
      title="Comments"
      href={`${url}#notes`}
    >
      <span
        className="s16 gl-vertical-align-text-bottom"
        data-testid="comments-icon"
      >
        &#128490;
      </span>
      {` ${value}`}
    </a>
  );
}

export default Comments;
