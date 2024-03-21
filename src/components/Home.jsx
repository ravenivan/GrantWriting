import React from 'react';
import Logo from '../assets/Logo-clear.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleRight, faCheckCircle, faClipboard, faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Blob from './ui/Blob';

const Home = () => {
    return (
        <section id="home">
            <Blob className="blob-header" />
            <div className="container">
                <div className="row home__row">
                    <div className="home__content">
                        <h2 className="home__content__subtitle">
                            Learn how to write grants
                        </h2>
                        <h1 className="home__content__title">
                            Welcome to Grant Writing Essentials
                        </h1>
                        <p className="home__content__para">
                            Teaching grant writing success in small dosage! Understand the common mistakes and challenges. Get funding and so much more.
                        </p>
                        <div className="home__content__btns">
                            <a href="">
                                <button className="home__content__btn home__content__sign-up">
                                    Sign up
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </button>
                            </a>
                            <a href="#about">
                                <button className="home__content__btn home__content__learn">
                                    Learn More
                                    <FontAwesomeIcon icon={faAngleRight} className="home__content__learn__icon" />
                                </button>
                            </a>
                        </div>
                        <a href="#about" className="home__scroll">
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </a>
                    </div>
                    <div className="home__img__wrapper">
                        <img src={Logo} alt="" className="home__img" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;
