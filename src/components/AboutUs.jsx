import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function AboutUs() {
    const [members, setMembers] = useState([]);
    
    
    useEffect(() => {
        fetch("/data/members.json")
        .then((res) => res.json())
        .then((data) => {
            setMembers(data);
        })
        .catch((err) => {
            console.error("Failed to load members:", err);
        });
    }, []);

    const memberElems = members.map((m) => {
        return <Member key={m.id} name={m.name} role={m.role} brief={m.brief} full={m.full} img={m.img} />;
    });
    
    return (
        <>
            <NavBar />
            <HeaderBanner title="About Us" />
            <main id="about-us-main">
            <section>
                <div className="information-section">
                <h2>Who we are</h2>
                <p>The Sports Institute at UW Medicine® works to expand participation and safety in sports. Since its founding, The Sports Institute has led first-of-its-kind legislative efforts and advanced best practices in sports safety. We distinguish ourselves by rapidly translating research into practical tools, programs, and policies that create real-world impact.</p>
                </div>

                <div className="information-section">
                <h2>Our Values</h2>
                <p>We advance our mission with a deep commitment to equity and inclusion, authenticity, positivity and hustle. We value diverse experiences and perspectives and strive to create an open, accepting and supportive culture where individuals can be their true selves. These values are foundational for how we operate internally and externally.</p>
                </div>
            </section>

            <section>
                <h2>Our Team</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 member-container">
                    {memberElems}
                </div>
            </section>
            </main>
        </>
    );
}

export function Member(props) {
    const {name, role, brief, full, img} = props;
    return (
    <>
        <div className="col d-flex">
            <div className="card h-100 w-100">
            <img className="card-img-top" src={img}  alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{role}</h6>
                <p className="card-text">{brief}</p>
            </div>
            </div>
        </div>
    </>
  );
}