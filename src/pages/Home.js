import './Home.css';
import { useRef } from 'react';
import  one  from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';
import five from '../images/five.jpg';
import six from '../images/six.jpg';
import seven from '../images/seven.jpg';
import eight from '../images/eight.jpg';
import nine from '../images/nine.jpg';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar';

export default function Home(){
    const scroller = useRef()

   

    const handleScroll = (direction) => {
        const scrollAmount = 350;
        const reel = scroller.current;
    
        if (direction === 'left') {
          reel.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
          });
        } else {
          reel.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      };

    return(
        <div className="Home">
            <Navbar />
            <div className='Text'>
                <p className='Bio'>Welcome to Audiogroph! With the rise of NFT's, it has never been easier for artists to share memorabilia to their fans, and fans to collect something special from an event. Our projet aims to connect fans with artists to collect special rewards for attending in person events.</p>
            </div>
            <div className='Scroll-Container'>
                <span>NFT's from some of our artists:</span>
                <div className='Scroll' ref={scroller}>
                    <img src={one} alt='nft1'/>
                    <img src={two} alt='nft2'/>
                    <img src={three} alt='nft3'/>
                    <img src={four} alt='nft4'/>
                    <img src={five} alt='nft5'/>
                    <img src={six} alt='nft6'/>
                    <img src={seven} alt='nft7'/>
                    <img src={eight} alt='nft8'/>
                    <img src={nine} alt='nft9'/>
                </div>
                <div className='Scroll-Text'>
                    <button onClick={() => handleScroll('left')}>Left</button>
                    <button onClick={() => handleScroll('right')}>Right</button>
                </div>
            </div>
            <NavLink className='Link' to='/signup'>Join Us</NavLink>
        </div>
    )
}