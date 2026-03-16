import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";

import { useState } from "react";
import { Link } from 'react-router-dom';

export default function OurApproach() {
  return (
    <>
        <NavBar />
        <HeaderBanner title="Our Approach" />
        <main>
            <section>
                <div className="information-section">
                    <div className="section-header">
                        <i className="fa fa-pencil-square-o fa-3x custom-fa-icon"></i>
                        <h2>Approach</h2>
                    </div>
                    <p>We built the ExerciseRx™ digital health platform to integrate as part of routine medical care for physical activity and exercise support. The ExerciseRx platform consists of a patient facing app and provider dashboard in the electronic health records (EHR). It leverages cutting-edge AI/ML and novel exercise sensing technologies using consumer smart devices. Developed in partnership with The Sports Institute, UW Ubicomp Lab in the Paul G. Allen School of Computer Science & Engineering, and UW Human Centered Design and Engineering (HCDE) faculty, the ExerciseRx platform promotes sustainable behavior change around physical activity and home-based exercise.</p>
                </div>
            </section>
        </main>

    </>
  );
}