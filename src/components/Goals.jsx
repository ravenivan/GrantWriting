import React from 'react';
import Image1 from '../assets/Goals1-img.jpg';
import Image2 from '../assets/Goals2-img.webp';
import Image3 from '../assets/Goals3-img.avif'

const Goals = () => {
    return (
        <section id="goals">
            <div className="container">
                <div className="row goals__row">
                    <div className="goals__goals">
                        <div className="goals__goal">
                            <h3 className="goals__goal__title">
                                Our Mission
                            </h3>
                            <div className="goals__goal__img__wrapper">
                                <img src={Image1} alt="" className="goals__goal__img" />
                            </div>
                            <p className="goals__goal__para">
                                Our mission is to demystify the grantwriting
                                process while producing confident and
                                successful grant writers at all levels.
                            </p>
                        </div>
                        <div className="goals__goal">
                            <h3 className="goals__goal__title">
                                Our Purpose
                            </h3>
                            <div className="goals__goal__img__wrapper">
                                <img src={Image2} alt="" className="goals__goal__img" />
                            </div>
                            <div className="goals__goal__para">
                                Our purpose is to reduce the number of rejected
                                grant proposals submitted due to avoidable
                                errors, while increasing the number of funded
                                mission-driven projects.
                            </div>
                        </div>
                        <div className="goals__goal">
                            <h3 className="goals__goal__title">
                                Our Approach
                            </h3>
                            <div className="goals__goal__img__wrapper">
                                <img src={Image3} alt="" className="goals__goal__img" />
                            </div>
                            <div className="goals__goal__para">
                                Teaching Grant Writing Success In Small Dosage!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Goals;
