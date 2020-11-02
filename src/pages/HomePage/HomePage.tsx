import React from 'react';
import './HomePage.scss';
import Carousel from 'components/Carousel/Carousel';

function HomePage() {
    return (
        <div className="homePage">
            I am HomePage
            <Carousel 
                breakpoints="768:4,1200:6" 
                itemtags={[<p>111</p>, <p>222</p>, <p>333</p>, <p>555</p>, <p>555</p>, <p>666</p>]}
            />
            {/* <Carousel /> */}
        </div>
    );
}

export default HomePage;
