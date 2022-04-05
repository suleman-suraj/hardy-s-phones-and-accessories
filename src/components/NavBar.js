import React from 'react'
import {BsFillBadgeHdFill} from "react-icons/bs"
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='header'>
    <BsFillBadgeHdFill className='icon'/>
    <h2>Hardy's Phones And Accessories</h2>
    <ul>
    <li> <Link to ="/">Home</Link> </li>
    <li> <Link to ="/about">About Us</Link> </li>
    <li> <Link to ="/products">Products</Link> </li>
    <li> <Link to ="/contact us">Contact Us</Link> </li>
    </ul>
    
    </div>
  )
}

export default NavBar