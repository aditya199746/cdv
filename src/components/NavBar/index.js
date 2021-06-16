import React,{useState} from 'react'
import './style.css';
import {NavLink} from 'react-router-dom'
function NavBar(props) {

    const[search,setSearch]=useState(false);



    const submitSearch=(e)=>{
        e.preventDefault();
        alert("Searched");
    }

    const openSearch=()=>{
        setSearch(true);
    }
     const searchClass=search?'searchInput active':"searchInput";

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/aboutus">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                
            </ul>
            <div className="search">
            <form  onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Search" />
            <img onClick={openSearch} className="searchicon" src={require("../../asserts/icons/search_icon.jpg")} alt="search" />
            </form>
                
            </div>
            
        </div>
    )
}

export default NavBar;