import React from 'react'
import "./Nav.css"

import Search from "./Media/Search.svg"
import Cart from "./Media/Cart.svg"
import User from "./Media/User.svg"

export default function Nav() {
  return (
    <>

   <header>
        <p>Sign up and get 20% off on your first order. <span><a href="Sign Up Now"></a></span></p>
   </header>

   <nav>

    <h2>SHOP.CO</h2>

    <ul>
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arivals</li>
        <li>Brands</li>
    </ul>

    <div id = "Third">
        <img id = "SearchLogo" src={Search} />
        <input placeholder='Search Your Products...' type="text" />

        <div>
            <img src={Cart} />
            <img src={User} />
        </div>
    
    </div>


   </nav>

    </>
  )
}
