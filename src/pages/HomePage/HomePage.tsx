import React from 'react';
import './HomePage.scss';
import Carousel from 'components/Carousel/Carousel';

function HomePage() {
    return (
        <div className="homePage">
            I am HomePage
            <Carousel 
                breakpoints="768:4,1200:2" 
                itemtags={[
                    <button key="123" id="123" name="tshirt123">Tshirt 123</button>, 
                    <button key="456" id="456" name="tshirt456">Tshirt 456</button>, 
                    <input key="789" id="789" name="jacket789" defaultValue="Jacket 789" />, 
                    <button key="111" id="111" name="tshirt111">Tshirt 111</button>, 
                    <button key="222" id="222" name="tshirt222">Tshirt 222</button>, 
                    <input key="333" id="333" name="jacket333" defaultValue="Jacket 333" />]}
            />
            {/* <Carousel /> */}
        </div>
    );
}

export default HomePage;
