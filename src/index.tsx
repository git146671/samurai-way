import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const iconSrc = "https://www.shareicon.net/data/128x128/2016/10/12/843290_pet_512x512.png"

let postsData = [
    {id: "1", message: "post-1", icon: iconSrc, likes: 22},
    {id: "2", message: "post-2", icon: iconSrc, likes: 2},
    {id: "3", message: "post-3", icon: iconSrc, likes: 66}
]

ReactDOM.render(
    <App postsData={postsData}/>,
  document.getElementById('root')
);