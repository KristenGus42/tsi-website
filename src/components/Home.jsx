import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";

import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
        <NavBar />
        <HeaderBanner title="Home" />
        <main>
            <section>
            <h1 class="mb-4 title-text"> The ExerciseRx.ai Platform </h1>
            <div class="information-section">
                <h2>How it Works </h2>
                <p>The ExerciseRxTM platform integrates physical activity into routine medical care. The platform connects providers and patients through a patient-facing mobile app and a provider dashboard embedded in the EPIC electronic health record.</p>
                <p>Providers recommend personalized exercise and activity for wellness support. Patients track activity on their existing iOS or Android devices. Advanced AI and machine learning monitors their activity through sensors in devices they already own. ExerciseRx helps patients build sustainable healthy movement habits at scale.</p>
                <p>The platform helps patients manage chronic conditions, prepare for surgery, or increase daily movement. It works on iOS and Android and integrates with standard EHR systems. </p>
                <p>ExerciseRx is adaptable and works across medical specialties. Current applications include urology, oncology, multiple sclerosis, rheumatology, and primary care. </p>
            </div>
            {/** TOOD ADD LOGOS */}
            <div class="information-section">
                <h2> Used By </h2>
                {/**<p>UW Medical Center, Seattle Children's Hospital, Fred Hutchinson Cancer Research Center, UW MS Rehabilitation and Wellness Center, and Hospital for Special Surgery in New York. </p>*/}
                {/* Partner Images */}
                <div clas="container">
                    <div class="partner-container row row-cols-sm-2 row-cols-md-3">
                        <div class="partner-container">
                            <img src="images/partners/seattle_childrens.png"></img>
                        </div>
                        <div class="partner-container">
                            <img src="images/partners/fred-hutch.png"></img>
                        </div>
                        <div class="partner-container">
                            <img src="images/partners/uw-ms-rehab.png"></img>
                        </div>
                        <div class="partner-container">
                            <img src="images/partners/hss.png"></img>
                        </div>
                        <div class="partner-container">
                            <img src="images/partners/uw-med-sq.png"></img>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>

    </>
  );
}