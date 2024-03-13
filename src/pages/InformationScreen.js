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
            <div className="pages-container">
                <h1 className="title">AI Image Generator</h1>
                <p className="description">
                    Transform your selfie into a masterpiece in this captivating art installation.
                    Experience the fusion of your identity with iconic art styles, sparking conversations
                    on digital ethics and the power of technology.
                </p>
                <p className="description">
                    Dive into a world where every selfie tells a story, inviting reflection on our digital
                    selves. Join this artistic adventure, and see yourself in a new light.
                </p>
                <div className="button-container">
                    <button className="button" onClick={handleAccept}>PRESS HERE TO TRY!</button>
                </div>
            </div>
        </PageContainer>
    );
}

export default InformationScreen;