// import logo from './logo.svg';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ErrorPage from './components/Error/ErrorPage';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import store, { addMessage, addPost } from './redux/store';
const App = (props) => {
// 
// const [count, setCount] = useState(0);
// const [theme, setTheme] = useState('dark');

// const increment=()=>{
//   setCount(i=>i+1)
// }
// const decrement=()=>{
//   setCount(d=>d-1)
// }


  return (
    <div className='app-wrapper'>
      <HeaderContainer />
        <Navbar state = { props.state } />
        <div className = 'app-wrapper-content'>
          {/* <div> 
            <button onClick={()=>increment()} >+</button>
            <span>{count}</span>
            <span>{theme}</span>

            <button onClick={()=>decrement()}>-</button>
          </div> */}
          <Route path = "/profile/:userId?" 
            render = { () => <ProfileContainer 
              // profilePage = { props.state.profilePage } 
              // dispatch={props.dispatch} 
              // store = {props.store}
              />} />
          <Route path = "/dialogs" 
            render={ () => <DialogsContainer 
              // store ={props.store}
              // dialogsPage = {props.state.dialogsPage}
              // state = { props.state.dialogsPage } 
              // dispatch={props.dispatch}
              // addMessage={props.addMessage}
              // updateNewMessageText={props.state.updateNewMessageText}
              />} />
          <Route path = "/news" render = { () => <News />} />
          <Route path = "/music" render = { () => <Music />} />
          <Route path = "/settings" render = { () => <Settings />} />
          <Route path = "/users" render = { () => <UsersContainer />} />

      </div>
    </div>
  );
}

export default App;
