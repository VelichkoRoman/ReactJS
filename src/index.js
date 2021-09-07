import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: "Hi, it's first message from react app", likesCount: 16},
  {id: 2, message: 'New user catch', likesCount: 3},
  {id: 3, message: 'I see u', likesCount: 5},
  {id: 4, message: 'whassup men', likesCount: 1},
  {id: 5, message: 'Woww', likesCount: 35},
]

let dialogs = [
  {id: 1, name: 'Romich'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Anton'},
  {id: 5, name: 'Anna'},
]

let messages = [
  {id: 1, message: 'hi'},
  {id: 2, message: 'Как дела?'},
  {id: 3, message: 'Куку'},
  {id: 4, message: 'Чо происходит?'},
  {id: 5, message: 'Сегодня 1сентября'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
