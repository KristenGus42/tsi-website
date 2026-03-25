import NavBar from "./NavBar";
import HeaderBanner from "./HeaderBanner";

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Publications() {
    const [references, setReferences] = useState([]);
    const [conferences, setConferences] = useState([]);


    useEffect(() => {
        fetch("/data/references.json")
        .then((res) => res.json())
        .then((data) => {
            setReferences(data);
        })
        .catch((err) => {
            console.error("Failed to load references:", err);
        });
    }, []);

    
    useEffect(() => {
        fetch("/data/conferences.json")
        .then((res) => res.json())
        .then((data) => {
            setConferences(data);
        })
        .catch((err) => {
            console.error("Failed to load conferences:", err);
        });
    }, []);

    const referenceElems = references.map((ref) => {
        return <Reference authors={ref.authors} title={ref.title} info={ref.info} url={ref.url} key={ref.id}/>;
    });

    const conferenceElems = conferences.map((ref) => {
        return <Conference text={ref.text} key={ref.id}/>;
    });

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
                    {referenceElems}
                </div>

                {/* Conferences */}
                <div>
                <div className="section-header">
                    <h2>Conferences</h2>
                </div>
                    {conferenceElems}
                </div>
            </section>
        </main>
    </>
  );
}

export function Reference(props) {
    const {authors, title, info, url} = props;
    return (
    <>
        <p>{authors} <a href={url}>{title}</a>{info} </p>
    </>
  );
}

export function Conference(props) {
    const {text} = props;
    return (
    <>
        <p>{text}</p>
    </>
  );
}