import React from "react";
import styles from '../Css/nav.css'

const Navbar=()=>{
    return  <nav className="navbar">
        <h1 className='name'>Samarth</h1>
        <div className="buttoncluster">
        <button className="buttons">Home</button>
        <button className="buttons">Project</button>
        <button className="buttons">about</button>
        <button className="buttons">Resume</button>
        <label class="switch">
    <input type="checkbox"/>
    <span class="slider"></span>
</label>

        </div>
       
        
        </nav>
        
  
}

export default Navbar;