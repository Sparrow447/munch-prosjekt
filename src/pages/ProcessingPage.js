import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import '../css/ProcessingPage.css'; // Make sure the CSS file is in the same directory

const ProcessingPage = ({ mockImage }) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [processedImage, setProcessedImage] = useState(null);

    const image = mockImage || state?.image;

    useEffect(() => {
        // Simulate sending the image to the backend and receiving a processed image
        const processImage = async () => {
            const formData = new FormData();
            formData.append('image', image); // Use the mock image if it's provided

            try {
                const response = await fetch('https://your-backend-url.com/process', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setProcessedImage(result.processedImage); // Assuming the response contains the processed image
                navigate('/result', { state: { image: result.processedImage } });
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        processImage();
    }, [image, navigate]);

    return (
        <PageContainer>
            <div className="processing-container">
                <h1>Loading</h1>
                <div className="loader"></div>
                <p>Processing your image, please wait...</p>
            </div>
        </PageContainer>
    );
};

export default ProcessingPage;