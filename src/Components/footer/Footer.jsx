import React from "react";
import "./footer.css"

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Deepesh Reddy</h1>

                <ul className="footer__list" >

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>

                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                    <i class="bi bi-instagram"></i>
                </a>

            <a href="https://github.com/deepesh-reddy/" className="footer__social-link" target="_blank">
                <i class="bi bi-github"></i>
            </a>

            <a href="https://www.linkedin.com/feed/" className="footer__social-link" target="_blank">
                <i class="bi bi-linkedin"></i>
            </a>
                </div>

                <span className="footer__copy">
                &#169; Deepesh Reddy. All rigths reserved
                </span>

            </div>
        </footer>
    )
}

export default Footer;