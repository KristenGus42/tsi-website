import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";

import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
        <NavBar />
        <HeaderBanner title="Contact Us" />
        <main>
            <div className="d-flex justify-content-evenly">
                <div className="text-center">
                  <h3><i className="fa fa-envelope-o"></i>Email</h3>
                  <p>exerciserx@uw.edu</p>
                </div>
                <div>
                  <h3><i className="fa fa-map-marker"></i>Mailing Address</h3>
                  <div className="text-center">
                    <p className="m-0">The Sports Institute</p>
                    <p className="m-0">Dept. of Rehabilitation Medicine</p>
                    <p className="m-0">325 9th Ave, Box 39594</p>
                    <p className="m-0">Seattle, WA 98104-2499</p>
                  </div>
                </div>
            </div>
        </main>
    </>
  );
}