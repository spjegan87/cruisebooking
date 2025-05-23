import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#e84c3d",
        colorInfo: "#0eb0d9",
        borderRadius: 4,
        fontFamily: "'Inter', sans-serif",
      },
    }}
  >
    <App />
  </ConfigProvider>
);
