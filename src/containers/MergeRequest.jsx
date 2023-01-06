import React from "react";

import ListItem from "components/ListItem";
import request from "utils/request";

function MergeRequest({ item = {} }) {
  const [approvals, setApprovals] = React.useState([]);

  React.useEffect(async () => {
    const data = await request(
      `projects/${item.project_id}/merge_requests/${item.iid}/approvals`
    );
    setApprovals(data.approved_by);
  }, [item.updated_at]);

  return <ListItem item={item} approvals={approvals} />;
}

export default MergeRequest;
