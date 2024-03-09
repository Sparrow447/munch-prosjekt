import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import '../css/FeedbackPage.css'; // Make sure the CSS file is in the same directory

const FeedbackPage = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(null);
    const [reflection, setReflection] = useState(50);
    const [clarity, setClarity] = useState(50);

    const handleSubmit = (event) => {
        event.preventDefault();
        const feedbackData = { rating, reflection, clarity };
        console.log(feedbackData); // Replace with a POST request to your server
        navigate('/'); // Navigate to a thank you page or back home
    };

    return (
        <PageContainer>
            <div className="feedback-container">
                <h1>Rate Your Experience</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>How was your overall experience?</p>
                        <div className="rating">
                            {['Terrible', 'Bad', 'So-so', 'Good', 'Superb'].map((item, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={item}
                                        onChange={() => setRating(item)}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="slider-question">
                        <p>Did it make you reflect on image misusage and deepfake manipulation?</p>
                        <div className="slider-container">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={reflection}
                                step="10" // This sets the slider to move in increments of 10%
                                onChange={(e) => setReflection(e.target.value)}
                            />
                            <div className="slider-labels">
                                <span>Not at all!</span>
                                <span>Very much!</span>
                            </div>
                        </div>
                    </div>

                    <div className="slider-question">
                        <p>How clear was the message about the potential misuse of personal data?</p>
                        <div className="slider-container">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={clarity}
                                step="10" // This sets the slider to move in increments of 10%
                                onChange={(e) => setClarity(e.target.value)}
                            />
                            <div className="slider-labels">
                                <span>Not at all!</span>
                                <span>Very much!</span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="submit-button">SUBMIT!</button>
                </form>
            </div>
        </PageContainer>
    );
};

export default FeedbackPage;