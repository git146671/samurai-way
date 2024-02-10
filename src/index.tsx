import './index.css';
import {addPost, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderTree = (state: any) => {
    ReactDOM.render(
        <App appState={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}

rerenderTree(state);

subscribe(rerenderTree);