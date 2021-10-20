import React from 'react';
import Logo from '../assets/Pizza logo1.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo}/>
            </div>
            <div className="rightSide"> 
                <Link> Home </Link>
            </div>
        </div>
    )
}

export default Navbar
