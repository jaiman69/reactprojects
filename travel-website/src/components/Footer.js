import React from "react";
import {Link} from "react-router-dom";
import Button from "./Button";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to recieve our best vacation
                    deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            className="footer-input"
                            type="email"
                            name="email"
                            placeholder="Your email"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>ABOUT US</h2>
                        <Link to="/">How It works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>SOCIALS</h2>
                        <Link to="/">Our Team</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">Instagram</Link>
                        <Link to="/">LinkedIn</Link>
                        <Link to="/">Meta</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>SERVICES</h2>
                        <Link to="/">Get a demo</Link>
                        <Link to="/">For Personnel</Link>
                        <Link to="/">For Businesses</Link>
                        <Link to="/">Setup Meeting</Link>
                        <Link to="/">Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
