import React from "react";
import clsx from "clsx";

import Author from "./Author";
import MergeRequestTitle from "./MergeRequestTitle";
import TargetBranch from "./TargetBranch";
import TimeAgo from "./TimeAgo";
import Comments from "./Comments";
import Reviewers from "./Reviewers";

function ListItem({ item, approvals = [] }) {
  const style = React.useMemo(
    () => ({
      "--avatar-url": `url(${item.author.avatar_url})`,
    }),
    [item.author.avatar_url]
  );
  const hasConflicts = item.merge_status === "has_conflicts";

  return (
    <li
      className={clsx("merge-request", {
        "has-conflicts": hasConflicts,
        wip: item.work_in_progress,
      })}
      data-id={item.id}
      data-labels="[]"
      id={`merge_request_${item.id}`}
      style={style}
    >
      <div className="issuable-info-container">
        <div className="issuable-main-info">
          <MergeRequestTitle title={item.title} url={item.web_url} />
          <div className="issuable-info">
            <Author author={item.author} />
            {"  ·  "}
            <span className="issuable-reference">{item.references.full}</span>
            <TargetBranch
              name={item.target_branch}
              references={item.references.full}
            />
          </div>
        </div>
        <div className="issuable-meta">
          <ul className="controls d-flex align-items-end">
            <Reviewers
              assignees={item.assignees}
              reviewers={item.reviewers}
              approvals={approvals}
            />
            <li className="issuable-comments gl-display-none gl-sm-display-block">
              <Comments value={item.user_notes_count} url={item.web_url} />
            </li>
          </ul>
          <div className="float-right issuable-updated-at d-none d-sm-inline-block">
            <span>
              updated{" "}
              <TimeAgo
                value={item.updated_at}
                className="merge_request_updated_ago"
              />
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
