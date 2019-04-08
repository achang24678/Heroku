import React from 'react';

const LoadingPage = () => (     // arrow function implicitly return some JSX
    <div className="loader">
        <img className="loader__image" src="/images/loader.gif" />
    </div>
);

export default LoadingPage;