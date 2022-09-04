import React from "react";
import ReactDOM from "react-dom/client";

import './styles.css';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)