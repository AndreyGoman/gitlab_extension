import React from "react";

import List from "components/List";
import MergeRequest from "./MergeRequest";
import request from "utils/request";

function MergeRequestList({ title, queryParams }) {
  const [mergeRequests, setMergeRequests] = React.useState(null);

  async function fetchMergeRequests() {
    const data = await request(queryParams);

    data.sort((first, second) => {
      const firstDate = new Date(first.updated_at).getTime();
      const secondDate = new Date(second.updated_at).getTime();
      return secondDate - firstDate;
    });

    setMergeRequests(data);
  }

  React.useEffect(() => {
    fetchMergeRequests();
    const interval = setInterval(fetchMergeRequests, 20_000);
    return () => clearInterval(interval);
  }, []);

  return mergeRequests ? (
    <List title={title} items={mergeRequests} ItemComponent={MergeRequest} />
  ) : (
    "getting merge requests..."
  );
}

export default MergeRequestList;
