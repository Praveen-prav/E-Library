import React from 'react';
import '../styles/navBar.css'

function NavBar() {
    return (
        <div>
            <div className="Bar">
                <img src='images/logo.png' alt='Logo'></img>
                <h1>Free Online Library</h1> 
                <a id='logOut' href='/'>Log Out</a>
            </div>
        </div>
    )
}

export default NavBar;