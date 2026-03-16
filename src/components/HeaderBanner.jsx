import NavBar from "./NavBar";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header(props) {
    const {title} = props;
    return (
    <>
        <section>
            <div style={{ position: "relative" }}>
            <img
                src="images/TSI-headers_about-us-1.png"
                style={{ width: "100%", display: "block" }}
                alt="About Us Banner"
            />
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center"
            }}>
                <h1 style={{ color: "white", textShadow: "1px 1px 1px rgba(0,0,0,0.7)" }}>
                {title}
                </h1>
            </div>
            </div>
        </section>

    </>
    );
}