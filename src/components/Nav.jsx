import React from 'react';
import Logo from '../assets/Logo-clear.png'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <a href="#" className="nav__img__wrapper">
                    <img src={Logo} alt="Log" className="nav__img" />
                </a>
                <div className="nav__links">
                    <a href="" className="nav__link">Home</a>
                    <a href="" className="nav__link">Who We Are</a>
                    <a href="" className="nav__link">Our Mission</a>
                    <a href="" className="nav__link">Our Purpose</a>
                    <a href="" className="nav__link">Services</a>
                    <a href="" className="nav__link">Additional</a>
                </div>
                <a href="" className="nav__btn__wrapper">
                    <button className="nav__btn">Sign up now!</button>
                </a>
            </div>
        </nav>
    );
}

export default Nav;
