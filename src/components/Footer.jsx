import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </a></li>
            </ul>
            <ul className="footer__menu">
                <li className="footer__menu__item"><a className="footer__menu__link" href="#">Home</a></li>
                <li className="footer__menu__item"><a className="footer__menu__link" href="#">About</a></li>
                <li className="footer__menu__item"><a className="footer__menu__link" href="#">Services</a></li>
                <li className="footer__menu__item"><a className="footer__menu__link" href="#">Team</a></li>
                <li className="footer__menu__item"><a className="footer__menu__link" href="#">Contact</a></li>

            </ul>
            <p>&copy;2024 Grant Writing Essentials | All Rights Reserved</p>
        </footer>

    );
}

export default Footer;
