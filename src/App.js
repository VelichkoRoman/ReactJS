// import logo from './logo.svg';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import DialogsContainer from './components/Dialogs/DialogsConatainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import store, { addMessage, addPost } from './redux/store';
const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state = { props.state } />
      <div className = 'app-wrapper-content'>
        <Route path = "/profile" 
          render = { () => <Profile 
            // profilePage = { props.state.profilePage } 
            // dispatch={props.dispatch} 
            store = {props.store}
            />} />
        <Route path = "/dialogs" 
          render={ () => <DialogsContainer 
            store ={props.store}
            // dialogsPage = {props.state.dialogsPage}
            // state = { props.state.dialogsPage } 
            // dispatch={props.dispatch}
            // addMessage={props.addMessage}
            // updateNewMessageText={props.state.updateNewMessageText}
            />} />
        <Route path = "/news" render = { () => <News />} />
        <Route path = "/music" render = { () => <Music />} />
        <Route path = "/settings" render = { () => <Settings />} />
      </div>
    </div>
  );
}

export default App;
