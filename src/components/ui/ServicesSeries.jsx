import React from 'react';

const ServicesSeries = ( {number} ) => {
    if (number === "1") {
        return (
            <div className="services__content__text">
                <h3 className="services__content__text__title">
                    Series 1:
                </h3>
                <ul className="services__content__text__list">
                    <li className="services__content__text__list__para">
                        Understand the challenges and benefits of grant writing
                    </li>
                    <li className="services__content__text__list__para">
                        Conceptualize grant writing as a process
                    </li>
                    <li className="services__content__text__list__para">
                        Learn the ten most common mistakes grant writers make and why
                    </li>
                    <li className="services__content__text__list__para">
                        Process the five "W's" and the "H"
                    </li>
                    <li className="services__content__text__list__para">
                    Familiarize with the essential parts of a grant
                    </li>
                </ul>
            </div>
        )
    } else if (number === "2") {
        return (
            <div className="services__content__text">
                <h3 className="services__content__text__title">
                    Series 2:
                </h3>
                <ul className="services__content__text__list">
                    <li className="services__content__text__list__para">
                        Composing <span className="primary-color">A</span> needs assessment
                    </li>
                    <li className="services__content__text__list__para">
                        Creating a fundable project
                    </li>
                    <li className="services__content__text__list__para">
                        Researching & finding the <span className="primary-color">BEST</span>-fit grants
                    </li>
                    <li className="services__content__text__list__para">
                        Preparing a 1-page grant proposal
                    </li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className="services__content__text">
                <h3 className="services__content__text__title">
                    Series 3:
                </h3>
                <ul className="services__content__text__list">
                    <li className="services__content__text__list__para">
                        Drafting the budget
                    </li>
                    <li className="services__content__text__list__para">
                        Aligning the budget to the project narrative
                    </li>
                </ul>
            </div>
        )
    }
    
}

export default ServicesSeries;
