import React from "react";

const UserContext = React.createContext({});

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);

  return React.createElement(
    UserContext.Provider,
    {
      value: { user, setUser },
    },
    children
  );
}

export { UserContext, UserProvider };

export default {};
