import React, {useCallback, useRef, useState} from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import '../css/CapturePage.css'; // Make sure the CSS file is in the same directory

const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
};

const CapturePage = () => {
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
    const navigate = useNavigate();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
    }, [webcamRef]);

    const retakeImage = () => {
        setImageSrc(null);
    };

    const continueWithImage = () => {
        // Here you would handle the process to send the image to the backend
        // For now, we'll just navigate to the next page
        navigate('/processing', { state: { image: imageSrc } });
    };

    return (
        <PageContainer>
            <div className="capture-container">
                <h1>Take A Selfie</h1>
                <div className="webcam-container">
                    {imageSrc ? (
                        <img src={imageSrc} alt="Captured" className="captured-image"/>
                    ) : (
                        <Webcam
                            audio={false}
                            height={videoConstraints.height}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={videoConstraints.width}
                            videoConstraints={videoConstraints}
                            className="webcam-view"
                        />
                    )}
                </div>
                {imageSrc ? (
                    <div className="button-container">
                        <button onClick={retakeImage} className="capture-button">TRY AGAIN</button>
                        <button onClick={continueWithImage} className="capture-button">CONTINUE</button>
                    </div>
                ) : (
                    <button onClick={capture} className="capture-button">CAPTURE SELFIE</button>
                )}
            </div>
        </PageContainer>
    );
};

export default CapturePage;

