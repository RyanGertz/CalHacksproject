import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <ul>
<<<<<<< Updated upstream
                <li><NavLink to="/"  end>Home</NavLink></li>
                <li><NavLink to="/creators">Creators</NavLink></li>
                <li><NavLink to="/nfts">NFTs</NavLink></li>
                <li><NavLink to="/events">My Events</NavLink></li>
                <li><NavLink to="/account">Login/Sign-up</NavLink></li>
=======
                <li><a href="/" className="Home"> Home </a></li>
                <li><a href="/creators"> Creators </a></li>
                <li><a href="/events"> My Events </a></li>
                <li><a href="/account"> Login/Sign-up </a></li>
>>>>>>> Stashed changes
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
