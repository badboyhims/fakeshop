import React,{useState,useRef,useEffect} from 'react'
import {Link} from 'react-router-dom'



// importing css 
import '../styles/home.css'





const Navbar = () => {
    
    return (
        <nav id="navbar" className='bgColor'>
            <div className="container heading font1 d-flex align-items-center justify-content-center">
                <Link to='/'>Fale Shop</Link>
            </div>
        </nav>
    )
}

export default Navbar