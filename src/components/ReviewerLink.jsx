import React from "react";
import clsx from "clsx";

function ReviewerLink({ user, isApproved }) {
  const title = React.useMemo(() => {
    if (isApproved) return `Approved by ${user.name}`;
    return `Review requested from ${user.name}`;
  }, [isApproved]);

  return (
    <a
      className={clsx("author-link", "has-tooltip", { approved: isApproved })}
      title={title}
      data-container="body"
      data-qa-selector="assignee_link"
      href={user.web_url}
    >
      <img
        width="20px"
        height="20px"
        className="avatar avatar-inline s16 js-lazy-loaded qa-js-lazy-loaded"
        alt=""
        src={user.avatar_url}
        loading="lazy"
      />
    </a>
  );
}

export default ReviewerLink;
