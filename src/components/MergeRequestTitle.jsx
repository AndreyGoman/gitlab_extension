import React from "react";

function MergeRequestTitle({ title, url }) {
  return (
    <div className="merge-request-title title">
      <span className="merge-request-title-text js-onboarding-mr-item">
        <a className="js-prefetch-document" href={url}>
          {title}
        </a>
        <span
          className="merge-request-title-warning has-tooltip"
          data-container="body"
          title="Has conflicts"
        >
          &#9888;
        </span>
      </span>
    </div>
  );
}

export default MergeRequestTitle;
