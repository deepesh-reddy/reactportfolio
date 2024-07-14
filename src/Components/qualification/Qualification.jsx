import React, {useState} from "react";
import "./qualification.css"
import {CoolMode} from "../magicui/cool-mode"

const Qualification = () => {

    const [toggleState,setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                <CoolMode>
                    <div className= { toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" } 
                    onClick={() => toggleTab(1)}>
                        <i class="bi bi-mortarboard qualification__icon"></i> Education
                    </div>
                </CoolMode>

                <CoolMode>
                    <div className= { toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" } onClick={() => toggleTab(2)} >
                        <i class="bi bi-briefcase qualification__icon"></i> Experience
                    </div>
                </CoolMode>
                </div>

                <div className="qualification__sections">

                    <div className= {toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "} >

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">KIIT University</h3>
                                <span className="qualification__subtitle">Bhubaneswar</span>

                                <div className="qualification__calender">
                                    <i class="bi bi-calendar-event"></i> 2021 - Present
                                </div>
                            </div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line">

                            </span>
                        </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Narayana College</h3>
                                <span className="qualification__subtitle">Tirupati</span>

                                <div className="qualification__calender">
                                    <i class="bi bi-calendar-event"></i> 2019 - 2021
                                </div>
                            </div>

                        

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Narayana school</h3>
                                <span className="qualification__subtitle">Madanapalle</span>

                                <div className="qualification__calender">
                                    <i class="bi bi-calendar-event"></i> Till - 2019
                                </div>
                            </div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line">

                            </span>
                        </div>

                        </div>

                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain Institute</span>

                                <div className="qualification__calender">
                                    <i class="bi bi-calendar-event"></i>2017 - 2018
                                </div>
                            </div>

                        

                        </div> */}

                    </div>

                    <div  className= {toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "} >

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">FullStack Developer</h3>
                                <span className="qualification__subtitle">Bhubaneswar </span>

                                <div className="qualification__calender">
                                    <i class="bi bi-calendar-event"></i> 2023 - Present
                                </div>
                            </div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line">

                            </span>
                        </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle"> Bhubaneswar </span>

                                <div className="qualification__calender">
                                    <i class="bi bi-calendar-event"></i> 2022 - 2023
                                </div>
                            </div>

                        

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">Bhubaneswar </span>

                                <div className="qualification__calender">
                                    <i class="bi bi-calendar-event"></i> 2021 - 2022
                                </div>
                            </div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line">

                            </span>
                        </div>

                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;