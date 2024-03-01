import React from 'react';
import Image from '../assets/About-img.png';
import { useState } from 'react'
import ServicesSeries from './ui/ServicesSeries';


const Services = () => {
    const [seriesNum, setSeriesNum] = useState("1");
    console.log(seriesNum)

    return (
        <section id="services">
            <div className="container">
                <div className="row services__row">
                    <div className="services__img__wrapper">
                        <img src={Image} alt="" className="services__img" />
                    </div>
                    <div className="services__content">
                        <h2 className="services__content__title">
                            How Does It Work?
                        </h2>
                        <div className="services__content__btns">
                            <button className="services__content__btn" onClick={() => setSeriesNum("1")} >
                                Series 1
                            </button>
                            <button className="services__content__btn" onClick={() => setSeriesNum("2")} >
                                Series 2
                            </button>
                            <button className="services__content__btn" onClick={() => setSeriesNum("3")} >
                                Series 3
                            </button>
                        </div>
                        <ServicesSeries number={seriesNum} />
                        <div className="services__content__additional">
                            <h4 className="services__content__additional__title">
                                Additional support services
                            </h4>
                            <ul className="services__content__additional__list">
                                <li className="services__content__additional__list__para">
                                    Grant Writing
                                </li>
                                <li className="services__content__additional__list__para">
                                    Grant Review
                                </li>
                                <li className="services__content__additional__list__para">
                                    Project Design
                                </li>
                                <li className="services__content__additional__list__para">
                                    Project Implementation
                                </li>
                                <li className="services__content__additional__list__para">
                                    Marketing
                                </li>
                                <li className="services__content__additional__list__para">
                                    Grant Reporting
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a href="" className="services__btn__wrapper">
                    <button className="services__btn">Sign up now!</button>
                </a>
            </div>
        </section>
    );
}

export default Services;
