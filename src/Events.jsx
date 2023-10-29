import SearchBar from "./Search";
import './Events.css';
import Navbar from "./Navbar";

export default function Events() {
    return(
        <div>
            <Navbar/>
            <h1>Events</h1>
            <SearchBar />
        </div>
    )
}