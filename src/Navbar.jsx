import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <ul>
                <li><NavLink to="/"  end>Home</NavLink></li>
                <li><NavLink to="/creators">Creators</NavLink></li>
                <li><NavLink to="/nfts">NFTs</NavLink></li>
                <li><NavLink to="/events">My Events</NavLink></li>
                <li><NavLink to="/account">Login/Sign-up</NavLink></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
