import reactDom from "react-dom";

import App from "./components/App/index";

import "./css/reset.css"
import "./css/styles.css"

reactDom.render(<App/>, document.querySelector(".root"))