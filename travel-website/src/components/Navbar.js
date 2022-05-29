import React from "react";
import {Link} from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const [button, setButton] = React.useState(true);

    const handleClick = () => setClick(prev => !prev);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    React.useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        TRVL
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <div>{click ? "❌" : "📝"}</div>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/sign-up"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && (
                        <Button buttonStyle="btn--outline">SIGN UP</Button>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
