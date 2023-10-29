import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { useContext } from 'react';
import { AccountContext } from './AccountContext';


function Navbar() {
  const { accountBool } = useContext(AccountContext);
  return (
    <div className="navbar">
        <nav>
            <ul>
                <li><NavLink to="/"  end>Home</NavLink></li>
                <li><NavLink to="/creators">Creators</NavLink></li>
                <li><NavLink to="/nfts">NFTs</NavLink></li>
                <li><NavLink to="/events">My Events</NavLink></li>
                {!accountBool && <li><NavLink to="/Signup">Login/Sign-up</NavLink></li>}
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
