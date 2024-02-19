import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/state";

let rerenderTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

rerenderTree();

store.subscribe(rerenderTree);