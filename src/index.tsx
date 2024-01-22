import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";

ReactDOM.render(
    <App appState={state}/>,
  //  <App postsData={state.posts} dialogs={state.dialogs} messages={state.messages}/>,
  document.getElementById('root')
);