import React from "react";

import ReviewerLink from "./ReviewerLink";

function Reviewers({ assignees = [], reviewers = [], approvals = [] }) {
  const approvedByIds = React.useMemo(
    () => approvals.map((item) => item.user.id),
    [approvals]
  );

  return (
    <li className="gl-display-flex issuable-reviewers">
      {assignees.map((user) => (
        <ReviewerLink
          user={user}
          isApproved={approvedByIds.includes(user.id)}
        />
      ))}
      {reviewers.map((user) => (
        <ReviewerLink
          user={user}
          isApproved={approvedByIds.includes(user.id)}
        />
      ))}
    </li>
  );
}

export default Reviewers;
