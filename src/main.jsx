import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalService } from "./context.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalService>
    <App />
  </GlobalService>
);
