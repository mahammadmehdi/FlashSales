import React from 'react'
import "./index.scss"

function Navbar() {
    return (
        <div id='navigation'>
            <div className='navbar'>
                <div className='leftNavbar'>
                    <h3>Exclusive</h3>
                </div>
                <div className='rightNavbar'>
                    <div className='pages'>
                        <ul className='page'><li>Home</li>
                            <li>Contact</li>
                            <li>About</li>
                            <li>Sign Up</li></ul>
                    </div>
                    <div className='icons'>
                        <div className='input'><input type="text" placeholder='What are you loking for?'/><i class="fa-solid fa-magnifying-glass"></i></div>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar