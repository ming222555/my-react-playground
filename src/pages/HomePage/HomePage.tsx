import React from 'react';
import './HomePage.scss';
import Carousel from 'components/Carousel/Carousel';

function HomePage() {
    return (
        <div className="homePage">
            I am HomePage
            <Carousel />
            <Carousel />
        </div>
    );
}

export default HomePage;
