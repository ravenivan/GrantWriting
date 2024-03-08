import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="row contact__row">
                    <h2 className="contact__title">
                        Contact Us!
                    </h2>
                    <div className="contact__options">
                        <div className="contact__option">
                            <h3 className="contact__option__title">
                                Telephone Number:
                            </h3>
                            <h5 className="contact__option__info">
                                754-248-9775
                            </h5>
                        </div>
                        <div className="contact__option">
                            <h3 className="contact__option__title contact__option__title2">
                                Instagram:
                            </h3>
                            <button className="contact__option__info contact__option__info__btn">
                                <a href="https://www.instagram.com/grantwritingessentials/" target="_blank" className="contact__option__info__link">
                                    <FontAwesomeIcon icon={faInstagram} className="contact__option__info__icon" />
                                </a>    
                            </button>
                        </div>
                        <div className="contact__option">
                            <h3 className="contact__option__title">
                                Email Address:
                            </h3>
                            <a href="mailto:grantwritingessentials@gmail.com" className="contact__option__info">
                                grantwritingessentials@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
