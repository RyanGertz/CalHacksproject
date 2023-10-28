import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <nav>
            
            <ul>
                <li><a href="/" className="Home"> Home </a></li>
                <li><a href="/creators"> Creators </a></li>
                <li><a href="/nfts"> NFTs </a></li>
                <li><a href="/events"> My Events </a></li>
                <li><a href="/account"> Login/Sign-up </a></li>
                {/* <li><a href="/search"> </a></li> */}
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
