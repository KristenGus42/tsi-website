import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  const partners = [
    {
      id: 1,
      name: "Seattle Children's",
      logo: "images/partners/seattle_childrens.png"
    },
    {
      id: 2,
      name: "Fred Hutch",
      logo: "images/partners/fred-hutch.png"
    },
    {
      id: 3,
      name: "UW MS Rehab",
      logo: "images/partners/uw-ms-rehab.png"
    },
    {
      id: 4,
      name: "Hospital for Special Surgery",
      logo: "images/partners/hss.png"
    },
    {
      id: 5,
      name: "UW Medicine",
      logo: "images/partners/uw-med-sq.png"
    }
  ];

  const partnerElems = partners.map((partner) => {
    return <PartnerCard key={partner.id} name={partner.name} logo={partner.logo} />;
  });

  return (
    <>
      <NavBar />
      <HeaderBanner title="Home" />
      <main>
        <section>
          <h1 className="mb-4 title-text">The ExerciseRx.ai Platform</h1>
          
          <div className="information-section">
            <h2>How it Works</h2>
            <p>The ExerciseRx™ platform integrates physical activity into routine medical care. The platform connects providers and patients through a patient-facing mobile app and a provider dashboard embedded in the EPIC electronic health record.</p>
            <p>Providers recommend personalized exercise and activity for wellness support. Patients track activity on their existing iOS or Android devices. Advanced AI and machine learning monitors their activity through sensors in devices they already own. ExerciseRx helps patients build sustainable healthy movement habits at scale.</p>
            <p>The platform helps patients manage chronic conditions, prepare for surgery, or increase daily movement. It works on iOS and Android and integrates with standard EHR systems.</p>
            <p>ExerciseRx is adaptable and works across medical specialties. Current applications include urology, oncology, multiple sclerosis, rheumatology, and primary care.</p>
          </div>
          
          <div className="information-section partners-section">
            <h2 className="mb-4">Used by Leading Healthcare Organizations</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {partnerElems}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function PartnerCard(props) {
  const { name, logo } = props;
  
  return (
    <div className="col d-flex">
      <div className="card partner-card h-100 w-100">
        <div className="partner-logo-container">
          <img className="card-img-top partner-logo" src={logo} alt={`${name} logo`} />
        </div>
        <div className="card-body text-center">
          <h5 className="partner-name">{name}</h5>
        </div>
      </div>
    </div>
  );
}