import NavBar from "./NavBar";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header(props) {
    const {title} = props;
    return (
        <>
            <section>
                <div className="header-banner">
                    <img
                        src="images/TSI-headers_about-us-1.png"
                        alt="About Us Banner"
                    />
                    <div className="header-banner-overlay">
                        <h1 className="header-banner-title">
                            {title}
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}