import React, { useState } from 'react'
import './ComponentStyle/Header.css';
import cart from './Images/cart.jpg';
import { Link } from 'react-router-dom';
function Header() {
    const [bucket, setBucket]=useState(0);
  return (
   <>
   <div className="navbar">
    <div className="logo">
       <Link to='/'> <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbFouhOC-ZylWe9Q_XhMqCY3UVWdU_niPRRDgVzlb3YS11SCma" alt="Amazon" /></Link>
    </div>
    <div className="searchBar">
        
        <input type="text" id='search'/>
        
        <div className="search">
            <label htmlFor='search'>
            <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-2/512/User_Interface-25-512.png" alt=" search" />
            </label>
        </div>
    </div>
    <div className="headerSection">
        <div className="item">
            <span className="item_1">Hello</span>
            <Link to='/Login'><div className="item_2" ><span >Sign Up / Login</span></div></Link>
        </div>
        <div className="item">
            <span className="item_1">Returns </span>
            <span className="item_2">& Orders</span>
        </div>
        <div className="item">
            <span className="item_1">last</span>
            <span className="item_2">Delivery</span>
        </div>
        <div className="bucket">
            <div className="cart">
           <div className="cartNumber">{bucket}</div>
            <Link to='/cart'><img src={cart} alt="Bucket" /></Link>
            </div>
            Cart
        </div>
    </div>
   </div>
   </>
  )
}

export default Header
