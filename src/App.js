// import logo from './logo.svg';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <BrowserRouter>
        <Navbar />
        <div class='app-wrapper-content'>
          <Route path="/profile" render={() => <Profile posts={props.posts}/>} />
          <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
