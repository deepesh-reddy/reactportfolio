import React, { useState } from "react";
import "./header.css"
import {CoolMode} from "../magicui/cool-mode"

const Header = () => {

    //Change background Header
    window.addEventListener("scroll",function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
    });


    // Toggle Menu
    const [Toggle,showMenu] = useState(false);
    const[activeNav,setActiveNav] = useState("home")
    return(
        <header className="header" >
            <nav className="nav container" >
                <a href="../../../index.html" className="nav__logo" >Deepesh Reddy</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} >
                    <ul className="nav__list grid" >

                        <li className="nav__item"  >
                        <CoolMode>
                            <a href="#home" onClick={() => setActiveNav('#home')}
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"} >
                            <i class="bi bi-house nav__icon"></i> Home
                            </a>
                        </CoolMode>
                        </li>

                        <li className="nav__item" >
                        <CoolMode>
                            <a href="#about" onClick={() => setActiveNav('#about')}
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}  >
                            <i class="bi bi-person nav__icon"></i> About
                            </a>
                        </CoolMode>
                        </li>

                        <li className="nav__item" >
                        <CoolMode>
                            <a href="#skills" onClick={() => setActiveNav('#skills')}
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}  >
                            <i class="bi bi-file-earmark nav__icon"></i> Skills
                            </a>
                        </CoolMode>
                        </li>

                        <li className="nav__item" >
                        <CoolMode>
                            <a href="#services" onClick={() => setActiveNav('#services')}
                            className={activeNav === "#services" ? "nav__link active-link" : "nav__link"} >
                            <i class="bi bi-briefcase nav__icon"></i> Services
                            </a>
                        </CoolMode>
                        </li>

                        <li className="nav__item" >
                        <CoolMode>
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
                            className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} >
                            <i class="bi bi-image nav__icon"></i> Portfolio
                            </a>
                        </CoolMode>
                        </li>

                        <li className="nav__item" >
                        <CoolMode>
                            <a href="#contact" onClick={() => setActiveNav('#contact')}
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} >
                            <i class="bi bi-envelope nav__icon"></i> Contact
                            </a>
                        </CoolMode>
                        </li>

                    </ul>

                    <i class="bi bi-x-square nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)} >
                <i class="bi bi-grid"></i>
                </div>
            </nav>
        </header>
    )
}
export default Header;