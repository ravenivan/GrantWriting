import React from 'react';
import Logo from '../assets/Logo-clear.png'
import Woman from '../assets/MPL5.jpeg'
import AboutImg from '../assets/GWE_Who_We_Are.jpg'
import Blob from './ui/Blob';

const About = () => {
    return (
        <section id="about">
            {/* <Blob className="blob-about" /> */}
            <div className="container about__container">
                <div className="row about__row">
                    <div className="about__content">
                        <div className="about__who">
                            <h4 className="about__who__subtitle">
                                About Us
                            </h4>
                            <h2 className="about__who__title">
                                Who we are
                            </h2>
                            <p className="about__who__para">
                                Grant Writing Essentials is a product of
                                CRAMS Consulting which is designed to
                                teach potential grant writers how to
                                effectively craft their stories of impact. The
                                facilitator, Marlyn Paris-Lawson, is an
                                experienced and successful grant writer
                                and grant reviewer at the state and federal
                                levels. Grant writing can be a daunting and
                                intimidating task. With that in mind, we
                                have created a series of workshops where
                                we dissect and deliver the "HOW-TO" in
                                smaller parts to make understanding and
                                consumption of the writing process more
                                manageable.
                            </p>
                        </div>
                        <div className="about__content__img__wrapper">
                            <img src={Woman} alt="" className="about__content__img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
