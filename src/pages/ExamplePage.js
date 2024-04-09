import React from 'react';
import { useLocation } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import '../css/ExamplePage.css'; // Make sure the CSS file is in the same directory

const ExamplePage = () => {
    const { state } = useLocation();
    const image = state?.image;

    return (
        <PageContainer>
            <div className="pages-container">
                <div className="header-container">
                    <h1>This is you, mf</h1>
                </div>
                <div className="example-container">
                    {image ? (
                        <img src={image} alt="Captured" className="captured-image mirrored"/>
                    ) : (
                        <p>No image found. Please go back and capture an image.</p>
                    )}
                </div>
            </div>
        </PageContainer>
    );
};

export default ExamplePage;