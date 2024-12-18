import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "utils/theme";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
  </ConfigProvider>
);
