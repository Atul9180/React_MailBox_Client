import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/*React-Bootstrap and Bootstrap setup*/
import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
/*Toast css */
import "react-toastify/dist/ReactToastify.css";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
