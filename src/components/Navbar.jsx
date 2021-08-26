import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="profile"><a>Profile</a></div>
            <div className="messages"><a>Messages</a></div>
            <div className="news"><a>News</a></div>
            <div className="music"><a>Music</a></div>
            <div className="settings"><a>Settings</a></div>
        </nav>
    );
}

export default Navbar;