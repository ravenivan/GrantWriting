import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo-clear.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (openMenu) {
            document.body.classList.add('open');
        } else {
            document.body.classList.remove('open');
        }
    }, [openMenu])

    return (
        <>
            <nav className="nav">
                <div className="nav__container">
                    <a href="#" className="nav__img__wrapper">
                        <img src={Logo} alt="Log" className="nav__img" />
                    </a>
                    <div className="nav__links">
                        <a href="#home" className="nav__link">Home</a>
                        <a href="#about" className="nav__link">About Us</a>
                        <a href="#services" className="nav__link">Services</a>
                        <a href="#footer" className="nav__link">Contact</a>
                        <a href="https://form.jotform.com/mrslawson/business-essentials_registration" target="_blank" className="nav__btn__wrapper">
                            <button className="nav__btn">Sign up now!</button>
                        </a>
                    </div>
                    <button className="nav__menu" onClick={() => setOpenMenu(true)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </nav>

            <div className="menu__wrapper">
                <nav className="menu">
                    <button className="menu__close" onClick={() => setOpenMenu(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <div className="menu__links">
                        <a href="#home" className="menu__link" onClick={() => setOpenMenu(false)}>
                            Home
                        </a>
                        <a href="#about" className="menu__link" onClick={() => setOpenMenu(false)}>
                            About Us
                        </a>
                        <a href="#services" className="menu__link" onClick={() => setOpenMenu(false)}>
                            Services
                        </a>
                        <a href="#footer" className="menu__link" onClick={() => setOpenMenu(false)}>
                            Contact
                        </a>
                        <a href="https://form.jotform.com/mrslawson/business-essentials_registration" target="_blank" className="menu__btn__wrapper">
                            <button className="menu__btn">Sign up now!</button>
                        </a>
                    </div>
                </nav>
            </div>
        </>



    );
}

export default Nav;
