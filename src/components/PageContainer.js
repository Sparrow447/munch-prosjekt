import React from 'react';
import '../css/PageContainer.css'; // make sure the CSS file is in the same directory

const PageContainer = ({ children }) => {
    return (
        <div className="page-container">
            {children}
        </div>
    );
}

export default PageContainer;