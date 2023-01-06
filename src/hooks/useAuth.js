import React from "react";

import { UserContext } from "contexts/user";
import request from "utils/request";

function useAuth() {
  const { user, setUser } = React.useContext(UserContext);

  React.useEffect(async () => {
    const data = await request("user");
    setUser(data);
  }, []);

  return {
    user,
    isAuthorized: Boolean(user),
  };
}

export default useAuth;
