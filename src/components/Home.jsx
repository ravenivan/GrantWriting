import React from 'react';
import Woman from '../assets/MPL5.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faClipboard, faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="row home__row">
                    <div className="home__img__wrapper">
                        <img src={Woman} alt="" className="home__img" />
                    </div>
                    <div className="home__content">
                        <h2 className="home__content__subtitle">
                            Capability Statement
                        </h2>
                        <h1 className="home__content__title">
                            Grant Writing Essentials
                        </h1>
                        <div className="home__content__infos">
                            <div className="home__content__info">
                                <FontAwesomeIcon icon={faUser} color="green"  className="home__content__info__icon" /> 
                                <span>Marlyn Paris-Lawson. Facilitator.</span>
                            </div>
                            <div className="home__content__info">
                                <FontAwesomeIcon icon={faPhone} className="home__content__info__icon" />
                                <span>754 - 248 - 9775</span>
                            </div>
                            <div className="home__content__info">
                                <FontAwesomeIcon icon={faEnvelope} className="home__content__info__icon" />
                                <span>grantwritingessentials@gmail.com</span>
                            </div>
                            <div className="home__content__info">
                                <FontAwesomeIcon icon={faLocationDot} className="home__content__info__icon" />
                                <span>Services offered in-person and virtually on Zoom</span>
                            </div>
                            <div className="home__content__info">
                                <FontAwesomeIcon icon={faClipboard} className="home__content__info__icon" />
                                <span>Sign-up form</span>
                            </div>
                        </div>
                        <a href="#about" className="home__scroll">
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
