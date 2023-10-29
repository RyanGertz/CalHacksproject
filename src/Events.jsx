import SearchBar from "./Search";
import './Events.css';
import Navbar from "./Navbar";

export default function Events() {
    return(
        <div className="Events">
            <Navbar/>
             <h1>Events</h1>
             <div className="Results">
                <SearchBar />   
            </div>
        </div>
    )
}