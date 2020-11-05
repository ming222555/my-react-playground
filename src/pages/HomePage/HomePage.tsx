import React from 'react';
import './HomePage.scss';
import Carousel from 'components/Carousel/Carousel';

function HomePage() {
    return (
        <div className="homePage">
            I am HomePage 
            <Carousel 
                breakpoints="520:7,768:3,1200:2" 
                items={[<p key="111">111</p>, <p key="222">222</p>, <p key="333">333</p>, <p key="444">444</p>, <p key="555">555</p>, <p key="666">666</p>, <p key="777">777</p>]} 
                itemIDs={['111', '222', '333', '444', '555', '666', '777']}
            />
            {/* <Carousel /> */}
        </div>
    );
}

export default HomePage;
