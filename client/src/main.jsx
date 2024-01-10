import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AppRouter from "./appRoutes/AppRouter.jsx";

/*React-Bootstrap and Bootstrap setup*/
import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
/*Toast css */
import "react-toastify/dist/ReactToastify.css";

const root = document.getElementById("root");

createRoot(root).render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
);
