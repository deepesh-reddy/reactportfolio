import React from "react";
import "./scrollup.css"
import {CoolMode} from "../magicui/cool-mode"


const ScrollUp = () => {

    window.addEventListener("scroll",function () {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    });

    return (
        <CoolMode>
        <a href="#home" className="scrollup">
            <i class="bi bi-chevron-double-up scrollup__icon"></i>
        </a>
        </CoolMode>
    )
}
export default ScrollUp;