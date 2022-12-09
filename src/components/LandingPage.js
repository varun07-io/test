import React from "react";
import { Container } from "react-bootstrap";
import Landing from "../assets/images/landing.png";
import "./LandingPage.css";

function LandingPage() {
    return(
        <Container>
            <div className="landing-grid">
                <div className="landing-grid-left">
                    <h1 className="landing-title">
                    COMBINATION OF DESIGN
                    AND ASSIDUOUS
                    WEB DEVELOPMENT
                    </h1>
                    <button className="landing-btn">
                        Get in touch
                    </button>
                </div>
                <div className="landing-grid-right">
                    <img className="landing-img" src={Landing} />
                </div>
            </div>
        </Container>
    )
}

export default LandingPage;