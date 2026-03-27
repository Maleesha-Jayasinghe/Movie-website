import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return(
        <nav className="navbar">
            <h1>Movie Marathon</h1>
             <p>Explore New Movies and TV Series</p>
    
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
             <li>  <Link to="/tv">TV Series</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
</ul>

        </nav>
  
    );
}