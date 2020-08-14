import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, massage:'Hi, how are you?',likesCount: "15" },
    {id: 2, massage:'It`s my first post',likesCount: "20" }
]

let dialogsData = [
    {id: 1, name: "Dasha"},
    {id: 2, name: "Masha"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Valera"},
]

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your work"},
    {id: 3, message: "Yo"},

]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
