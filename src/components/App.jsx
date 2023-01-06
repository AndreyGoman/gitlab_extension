import React from "react";

import MergeRequestList from "containers/MergeRequestList";
import useAuth from "hooks/useAuth";

function App() {
  const { user, isAuthorized } = useAuth();

  return isAuthorized ? (
    <>
      <MergeRequestList
        title="My merge requests"
        queryParams={"merge_requests?state=opened"}
      />
      <MergeRequestList
        title="Review requests for you"
        queryParams={[
          "merge_requests?scope=assigned_to_me&state=opened",
          `merge_requests?scope=all&state=opened&reviewer_id=${user.id}`,
        ]}
      />
    </>
  ) : (
    <>getting user...</>
  );
}

export default App;
