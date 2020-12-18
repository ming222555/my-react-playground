import React, { useState, useRef, useEffect } from 'react';

import './CartBadge.scss';

interface IBreakpoints {
    breakpointPixels: number; // pixels
    width: string; // unit can be in rem, em, px, etc...
    fontSize: string;  // unit can be in rem, em, px, etc...
}

function getCurrentWidthFontsize(winWidth: number, arrayBreakpoints: IBreakpoints[], defaultWidth: string, defaultFontSize: string): string {
    let width = defaultWidth;
    let fontSize = defaultFontSize;
    for (let i = arrayBreakpoints.length - 1; i >= 0 ; i--) {
        if (winWidth >= arrayBreakpoints[i].breakpointPixels) {
            width = arrayBreakpoints[i].width;
            fontSize = arrayBreakpoints[i].fontSize;
            break;
        }
    }
    return width + ':' + fontSize;
}

function setupArrayBreakpoints(breakpoints: string): IBreakpoints[] {
    let ret: IBreakpoints[] = [];
    const arry = breakpoints.split(",");
    for (let i = 0; i < arry.length; i++) {
        const pair = arry[i].split(":");
        const breakpointPixels = parseInt(pair[0]);
        const width = pair[1];
        const fontSize = pair[2];
        ret.push({breakpointPixels, width, fontSize});
    }
    return ret;
}

/*
 *  Props
    qty: number; Qty of cart items.

    defaultWidth: string; Default cart width, e.g. 1.5rem, 200px, 2em, etc...
    defaultFontSize: string; Default font size, e.g. 1.5rem, 200px, 2em, etc...

    breakpoints: string;    E.g. "520:1.75rem:3rem,768:2rem:6rem,1200:2.25rem:8rem" which says 
                            "at viewport >= 520px, cartWidth 1.75rem, font-size 3rem",
                            "at viewport >= 768px, cartWidth 2rem, 6rem",
                            "at viewport >= 1200px, cartWidth 2.25rem, 8rem"
                        *** IMPORTANT! THE viewport SIZES (px) ARE ASSUMED TO BE IN INCREASING ORDER! ***
*/
function CartBadge({ qty, defaultWidth="1rem", defaultFontSize="1rem", breakpoints }:{[key:string]:any}) {
    
    const arrayBreakpointsRef: React.MutableRefObject<IBreakpoints[]> = useRef([]);

    if (!arrayBreakpointsRef.current.length) {
        arrayBreakpointsRef.current = setupArrayBreakpoints( breakpoints);
    }

    const [ currentWidthFontsize, setCurrentWidthFontsize ] = useState( getCurrentWidthFontsize(window.innerWidth, arrayBreakpointsRef.current, defaultWidth, defaultFontSize));

    useEffect(() => {
        let fn = () => setCurrentWidthFontsize( getCurrentWidthFontsize(window.innerWidth, arrayBreakpointsRef.current, defaultWidth, defaultFontSize));
        window.addEventListener("resize", fn);
        
        return () => window.removeEventListener("resize", fn);
    }, []);

    const styles = currentWidthFontsize.split(":");
    const width = styles[0];
    const fontSize = styles[1];
    
    return  (
        <div className="CartBadge">
            <p className="CartBadge__icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.6 91.7" style={{height: `${width}`, width}}><g fill="currentColor"><path d="M33.6 73.3c0 0 0 0 0 0 -5 0-9.2 4.1-9.2 9.2 0 5 4.1 9.2 9.2 9.2 5 0 9.2-4.1 9.2-9.2 0 0 0 0 0 0 0-5-4.2-9.2-9.2-9.2Zm0 12.4c0 0 0 0 0 0 -1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3Z"></path><path d="M64.3 73.3c-5 0-9.2 4.1-9.2 9.2 0 5 4.1 9.2 9.2 9.2 5 0 9.2-4.1 9.2-9.2 0 0 0 0 0 0 0-5-4.2-9.2-9.2-9.2Zm0 12.4c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3Z"></path><path d="M82 31.3c-0.6-0.7-1.4-1.2-2.3-1.2l-59.2 0 -2.5-9.6c-0.3-1.3-1.5-2.2-2.9-2.2l-12.2 0c-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3l9.9 0 2.5 9.5c0 0.1 0 0.1 0 0.2l9.2 35.3c0.3 1.3 1.5 2.2 2.9 2.2l43.1 0c1.3 0 2.5-0.9 2.9-2.2l9.2-35.3c0.2-0.9 0-1.8-0.5-2.6Zm-13.8 34.2l-38.5 0 -7.6-29.4 53.8 0 -7.6 29.4Z"></path></g></svg>
            </p>
            <div className={qty ? 'CartBadge__qty' : 'CartBadge__qty empty'} >
                <span style={{fontSize}}>{ qty }</span>
            </div>
        </div>
    )
}

export default React.memo(CartBadge);
