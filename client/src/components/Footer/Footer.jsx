import React from 'react'
import "./Footer.scss"

function Footer() {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accesories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, ratione! Natus sunt commodi nostrum obcaecati, libero enim. Ducimus, porro officia! Eaque rem vitae libero similique quia labore nemo a ut.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, ratione! Natus sunt commodi nostrum obcaecati, libero enim. Ducimus, porro officia! Eaque rem vitae libero similique quia labore nemo a ut.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className='logo'>Store</span>
                    <span className='copyright'>&copy; Copyright 2023. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer