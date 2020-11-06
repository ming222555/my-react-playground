import React, { useRef, useState} from 'react';
import './HomePage.scss';
import Carousel from 'components/Carousel/Carousel';

function HomePage() {
    const [carouselChoice, setCarouselChoice] = useState(0);
    /* const [counterForceRedraw, setCounterForceRedraw] = useState(0);

    const itemsRef: React.MutableRefObject<{}[]> = useRef([<p key="111">111</p>, <p key="222">222</p>, <p key="333">333</p>, <p key="444">444</p>, <p key="555">555</p>, <p key="666">666</p>, <p key="777">777</p>]);
    const itemIDsRef: React.MutableRefObject<string[]> = useRef(['111', '222', '333', '444', '555', '666', '777']); */

    const out = carouselChoice == 0 ? <Carousel 
                                        breakpoints="520:7,768:8,1200:1" 
                                        items={[<p key="111">111</p>, <p key="222">222</p>, <p key="333">333</p>, <p key="444">444</p>, <p key="555">555</p>, <p key="666">666</p>, <p key="777">777</p>]} 
                                        itemIDs={['111', '222', '333', '444', '555', '666', '777']}
                                    />
                                    :
                                    carouselChoice == 1 ?
                                    <Carousel 
                                        breakpoints="520:7,768:8,1200:1" 
                                        items={[<p key="1.1.1">1.1.1</p>, <p key="2.2.2">2.2.2</p>, <p key="3.3.3">3.3.3</p>, <p key="4.4.4">4.4.4</p>, <p key="5.5.5">5.5.5</p>, <p key="6.6.6">6.6.6</p>, <p key="7.7.7">7.7.7</p>, <p key="8.8.8">8.8.8</p>, <p key="9.9.9">9.9.9</p>, <p key="e.e.e">e.e.e</p>]} 
                                        itemIDs={['1.1.1', '2.2.2', '3.3.3', '4.4.4', '5.5.5', '6.6.6', '7.7.7', '8.8.8', '9.9.9', 'e.e.e']}
                                    />
                                    :
                                    <Carousel 
                                        breakpoints="520:7,768:8,1200:1" 
                                        items={[]} 
                                        itemIDs={[]}
                                    />;

    return (
        <div className="homePage">
            I am HomePage   <button onClick={() => setCarouselChoice(0)}>Carousel 0</button> 
                            <button onClick={() => setCarouselChoice(1)}>Carousel 1</button> 
                            <button onClick={() => setCarouselChoice(2)}>Carousel 2</button>
    {/* {counterForceRedraw}    <button onClick={() => setCounterForceRedraw(counterForceRedraw => counterForceRedraw + 1)}>setCounterForceRedraw</button> */}
            {out}
            {/* <Carousel 
                breakpoints="520:7,768:3,1200:2" 
                items={[<p key="111">111</p>, <p key="222">222</p>, <p key="333">333</p>, <p key="444">444</p>, <p key="555">555</p>, <p key="666">666</p>, <p key="777">777</p>]} 
                itemIDs={['111', '222', '333', '444', '555', '666', '777']}
            /> */}
            {/* <Carousel /> */}
            {/* <Carousel 
                breakpoints="520:7,768:3,1200:2" 
                items={itemsRef.current} 
                itemIDs={itemIDsRef.current}
            /> */}
        </div>
    );
}

export default HomePage;
