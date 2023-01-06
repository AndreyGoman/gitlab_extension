import React from "react";
import { createRoot } from "react-dom/client";

import App from "components/App";
import { UserProvider } from "contexts/user";
import "./style.css";

const rootElement = document.getElementById("content-body");
const root = createRoot(rootElement);

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
