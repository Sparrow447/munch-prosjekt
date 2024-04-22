import React from 'react';
import '../css/InformationScreen.css';
import {useNavigate} from "react-router-dom";
import PageContainer from "../components/PageContainer";

const InformationScreen = () => {
    const navigate = useNavigate();

    const handleAccept = () => {
        // Navigate to the TermsPage when the user accepts
        navigate('/terms');
    };

    return (
        <PageContainer>
            <div className="information-container">
                <h1 className="title">AI Image Generator</h1>
                <p className="description">
                    "Welcome to a transformative experience where art meets algorithm. Our exhibit, 'Selfie-stand med AI-manipulation,'
                    invites you to explore the unforeseen and often unsettling consequences of AI in our daily lives.
                    Step into a world where your image is no longer your own, and witness firsthand the powerful impact of deepfake technology.
                    This interactive journey challenges you to question the boundaries of ownership and privacy in the digital age."
                </p>
                <p className="description">
                    Dive into a world where every selfie tells a story, inviting reflection on our digital
                    selves. Join this artistic adventure, and see yourself in a new light.
                </p>
                <button className="accept-button" onClick={handleAccept}>PRESS HERE TO TRY!</button>
            </div>
        </PageContainer>
    );
}

export default InformationScreen;