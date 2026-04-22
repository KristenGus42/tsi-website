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
            <h1 className="mb-4 title-text"> The ExerciseRx.ai Platform </h1>
            <div className="information-section">
                <h2>How it Works </h2>
                <p>The ExerciseRxTM platform integrates physical activity into routine medical care. The platform connects providers and patients through a patient-facing mobile app and a provider dashboard embedded in the EPIC electronic health record.</p>
                <p>Providers recommend personalized exercise and activity for wellness support. Patients track activity on their existing iOS or Android devices. Advanced AI and machine learning monitors their activity through sensors in devices they already own. ExerciseRx helps patients build sustainable healthy movement habits at scale.</p>
                <p>The platform helps patients manage chronic conditions, prepare for surgery, or increase daily movement. It works on iOS and Android and integrates with standard EHR systems. </p>
                <p>ExerciseRx is adaptable and works across medical specialties. Current applications include urology, oncology, multiple sclerosis, rheumatology, and primary care. </p>
            </div>
            <div className="information-section">
                <h2> Used By </h2>
                {/**<p>UW Medical Center, Seattle Children's Hospital, Fred Hutchinson Cancer Research Center, UW MS Rehabilitation and Wellness Center, and Hospital for Special Surgery in New York. </p>*/}
                {/* Partner Images */}
                <div className="container">
                    <div className="partner-container row">
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="images/partners/seattle_childrens.png" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-text">Seattle Children's</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="images/partners/fred-hutch.png" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-text">Fred Hutch<br/></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="images/partners/uw-ms-rehab.png" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-text">UW MS Rehab<br/></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="images/partners/hss.png" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-text">Hospital for Special Surgery</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="images/partners/uw-med-sq.png" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-text">UW Medicine<br/><br/></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>

    </>
  );
}

/*
                        <div className="col card">
                            <img className="card-img-top" src="images/partners/fred-hutch.png" alt=""/>
                            <div className="card-body">
                                <h4 className="card-text">Fred Hutch<br/></h4>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="images/partners/uw-ms-rehab.png" alt=""/>
                            <div className="card-body">
                                <h4 className="card-text">UW MS Rehab<br/></h4>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="images/partners/hss.png" alt=""/>
                            <div className="card-body">
                                <h4 className="card-text">Hospital for Special Surgery</h4>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="images/partners/uw-med-sq.png" alt=""/>
                            <div className="card-body">
                                <h4 className="card-text">UW Medidcine<br/><br/></h4>
                            </div>
                        </div>
                        */