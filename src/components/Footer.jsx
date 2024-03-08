import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <ul class="social-icon">
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </a></li>
            </ul>
            <ul class="menu">
                <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                <li class="menu__item"><a class="menu__link" href="#">About</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

            </ul>
            <p>&copy;2024 Grant Writing Essentials | All Rights Reserved</p>
        </footer>

    );
}

export default Footer;
