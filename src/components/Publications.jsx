import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";

import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Publications() {
  return (
    <>
        <NavBar />
        <HeaderBanner title="Publications" />
        <main>
            <section>
                {/* Publications */}
                <div className="information-section">
                <div className="section-header">
                    <h2>Publications</h2>
                </div>
                <p>Ehde DM, Simmons SB, Alschuler KN, Herring TE, Humbert AT, Robles SR, Ioseliani O, Landis K, Kavanagh LB, Lin CY. Increasing Physical Activity via Provider Support and Engagement Using a Digital Health Platform in Adults With Multiple Sclerosis: Protocol for a Randomized Controlled Trial. JMIR Res Protoc. 2025 Nov 21;14:e72213. https://doi.org/10.2196/72213</p>
                <p>Zhu A, Sher J, Li R, Ioseliani O, Cantor L, Brewer EG, Landis K, Bridges D, Munson SA, Hunter H, Lin C, Psutka SP. What motivates bladder cancer patients to be active? A qualitative study assessing attitudes towards physical activity and digital health technologies. Urol Oncol. 2025 Sep;43(9):522.e1-522.e8. https://doi.org/10.1016/j.urolonc.2025.05.002</p>
                <p>Sher J, Lewis CW, Lin CY. Using Wearable Technologies to Monitor Physical Activity and Exercise in Patients: A Narrative Review. Curr Sports Med Rep. 2024 Aug 1;23(8):284-289. https://doi.org/10.1249/JSR.0000000000001187</p>
                <p>Hunter H, Bennington-McKay N, Sher J, Psutka S, Lin CY. Emerging Role of Mobile Applications and Wearable Devices for Prehabilitation in Urologic Oncology. European Urology Focus. 2023, https://doi.org/10.1016/j.euf.2023.10.010.</p>
                <p>Montagnino J, Hou G, Lim S, Ciol M, Lin CY. Physical Activity Vital Sign in Patients with Multiple Sclerosis. PM&amp;R Journal. 2023 Mar 17. https://doi.org/10.1002/pmrj.12971</p>
                <p>Lin CY, Ball T, McDonald VF, Gentile N, Humbert AT. Associations Between Physical Activity Vital Sign and Healthcare Utilization in a Healthcare System, 2018-2020. Journal of Physical Activity &amp; Health. 2022 Dec 8;1-7. https://doi.org/10.1123/jpah.2022-0266</p>
                <p>Sederberg M, Tarkhan A, Ray LS, Lee ES, Lin CY. Physical Activity in Adults with an Amputation as Assessed with a Self-Reported Exercise Vital Sign. PM&amp;R. 2020 Jan 27. https://doi.org/10.1002/pmrj.12333</p>
                </div>

                {/* Conferences */}
                <div>
                <div className="section-header">
                    <h2>Conferences</h2>
                </div>
                <p>El-Sayed AI, Li R, Ruth R, Lavitt L, Essman M, Patel SN, Lin CY. Accuracy Of Home Exercise Detection Using Novel Sonar Mobile Application Technology. American College of Sports Medicine. San Diego, CA. May 31-June 4, 2022. Poster presentation.</p>
                <p>Mozafari S, Raji R, Moroney A, Munson S, Lin CY. Patient Experience in Using ExerciseRx App: Electronic Health Records Embedded Platform to Support Physical Activity in Patients. American Federation for Medical Research, Western Medical Research Conference. January 19-21, 2023. Carmel, CA. Poster &amp; Oral Presentation.</p>
                <p>McCue J, Grenard D, Li T, Reibold C, Leibow C, Lin CY. Experience of Adolescents with Cerebral Palsy with the ExerciseRx App: Qualitative Feedback Regarding App Usability for Home Based Exercises. 2024 Western Medical Research Conference. January 18-20, 2024, Carmel, CA. Poster Presentation.</p>
                <p>Hunter H, Lin CY, Li R, Ioseliani O, Cantor L, Brewer E, Jannat S, Landis K, Bridges D, Munson S, Psutka S. The "Get Moving Trial": A phase I/II RCT of home-based (P)rehabilitation ((P)REHAB) with ExerciseRx in muscle-invasive bladder cancer (MIBC)—Study protocol for a randomized controlled trial. 2024 ASCO Genitourinary Cancers Symposium. San Francisco, CA. January 25-27, 2024. Poster presentation.</p>
                </div>
            </section>
        </main>
    </>
  );
}