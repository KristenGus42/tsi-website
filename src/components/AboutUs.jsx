import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function AboutUs() {
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

            <div className="col d-flex">
                <div className="card h-100 w-100">
                <img className="card-img-top" src="images/members/cindy-lin.png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Scott Polovitch-Davis, MNPL</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Associate Director</h6>
                    <p className="card-text">Scott serves as Associate Director at The Sports Institute, where he develops and shepherds the Institute's strategic plan, provides administrative and leadership support to staff and projects.</p>
                </div>
                </div>
            </div>

            <div className="col d-flex">
                <div className="card h-100 w-100">
                <img className="card-img-top" src="images/members/scott-polovitch-davis.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Scott Polovitch-Davis, MNPL</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Associate Director</h6>
                    <p className="card-text">Scott serves as Associate Director at The Sports Institute, where he develops and shepherds the Institute's strategic plan, provides administrative and leadership support to staff and projects.</p>
                </div>
                </div>
            </div>

            <div className="col d-flex">
                <div className="card h-100 w-100">
                <img className="card-img-top" src="images/members/christine-macdonald.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Christine Mac Donald, Ph.D.</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Research Director</h6>
                    <p className="card-text">Dr. Mac Donald is a professor of neurological surgery at the UW and holds the James and Gaye Pigott Sports Health and Safety Endowed Chair.</p>
                </div>
                </div>
            </div>

            <div className="col d-flex">
                <div className="card h-100 w-100">
                <img className="card-img-top" src="images/members/theresa-kehne.png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Theresa Kehne</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Research Coordinator</h6>
                    <p className="card-text">Theresa is the Institute's lead Research Coordinator who helps manage and support TSI's research portfolio.</p>
                </div>
                </div>
            </div>

            <div className="col d-flex">
                <div className="card h-100 w-100">
                <img className="card-img-top" src="images/members/otari-ioseliani.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Otari Ioseliani, M.S.</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Software Engineer</h6>
                    <p className="card-text">Otari Ioseliani joined the University of Washington in 2020 and is currently a Software Engineer at the Ubiquitous Computing Lab in the Paul G. Allen School of Computer Science and Engineering.</p>
                </div>
                </div>
            </div>

            </div>
        </section>
        </main>
    </>
  );
}