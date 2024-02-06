import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from "./redux/state";

ReactDOM.render(
    <App appState={state} addPost={addPost}/>,
  //  <App postsData={state.posts} dialogs={state.dialogs} messages={state.messages}/>,
  document.getElementById('root')
);