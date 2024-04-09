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

    const continueWithImage = async () => {
        // Convert the base64 image to a Blob
        const response = await fetch(imageSrc);
        const blob = await response.blob();

        // Create a FormData object
        const formData = new FormData();
        formData.append('image', blob);

        // Convert the blob to a base64 string
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
            const base64data = reader.result;

            // Prepare the data for the API request
            const data = JSON.stringify({
                url: base64data,
                accuracy_boost: 2
            });

            // Create a new XMLHttpRequest
            const xhr = new XMLHttpRequest();

            xhr.addEventListener('readystatechange', function () {
                if (this.readyState === this.DONE) {
                    const result = JSON.parse(this.responseText);

                    // Check the API response to see if a face was detected
                    if (result.Detected_faces.length > 0) {
                        // Get the highest probability among the detected faces
                        const highestProbability = Math.max(...result.Detected_faces.map(face => face.Probability));

                        // If the highest probability is 80% or more, navigate to the ProcessingPage
                        // Otherwise, navigate to the FaceNotDetectedPage
                        if (highestProbability >= 80) {
                            navigate('/processing', { state: { image: imageSrc } });
                        } else {
                            navigate('/noface');
                        }
                    } else {
                        navigate('/noface');
                    }
                }
            });

            xhr.open('POST', 'https://face-detection6.p.rapidapi.com/img/face');
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.setRequestHeader('X-RapidAPI-Key', 'b7a4dd7402msh6a00d1b02fe2e16p10645bjsnb395428718bb');
            xhr.setRequestHeader('X-RapidAPI-Host', 'face-detection6.p.rapidapi.com');

            xhr.send(data);
        };
    };

    return (
        <PageContainer>
            <div className="pages-container">
                <div className="header-container">
                    <h1>Take A Selfie</h1>
                </div>
                <div className="capture-container">

                    <div className="webcam-container">
                        {imageSrc ? (
                            <img src={imageSrc} alt="Captured" className="captured-image mirrored"/> // Add the 'mirrored' class here
                        ) : (
                            <Webcam
                                audio={false}
                                height={videoConstraints.height}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width={videoConstraints.width}
                                videoConstraints={videoConstraints}
                                className="webcam-view mirrored" // Add the 'mirrored' class here
                            />
                        )}
                    </div>
                    {imageSrc ? (
                        <div className="button-container">
                            <button onClick={retakeImage} className="button">TRY AGAIN</button>
                            <button onClick={continueWithImage} className="button">CONTINUE</button>
                        </div>
                    ) : (
                        <button onClick={capture} className="button">CAPTURE SELFIE</button>
                    )}
                </div>
            </div>
        </PageContainer>
    );
};

export default CapturePage;