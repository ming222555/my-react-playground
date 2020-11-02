import React, { useRef, useState, useEffect } from 'react';
import './Carousel.scss';

export interface PageProps {
    breakpoints: string; /* e.g. "768:4,1200:2" which says 
                            "at viewport >= 768px, no. of slides to show in carousel is 4",
                            "at viewport >= 1200px, no. of slides to show in carousel is 2"
                            *** IMPORTANT! THE viewport SIZES (px) ARE ASSUMED TO BE IN INCREASING ORDER! ***
                        */
    itemtags: {}[]; /* array of jsx objects 
                       e.g. [
                           <MyCatalogItem key="123" id="123" name="tshirt" />,
                           <MyCatalogItem key="456" id="456" name="jacket" />
                       ]
                    */
    cssprefix?: string;
}

interface IBreakpoints {
    breakpointPixels: number; // pixels
    slidesPerGroup: number;
}

enum NavDirection {
    Prev,
    Next
}

function getNumberOfSlideGroups(winWidth: number, arrayBreakpoints: IBreakpoints[], numberOfItems: number): number {
    let ret = 0;
    for (let i = arrayBreakpoints.length - 1; i >= 0 ; i++) {
        if (winWidth >= arrayBreakpoints[i].breakpointPixels) {
            const slidesPerGroup = arrayBreakpoints[i].slidesPerGroup;
            ret = Math.ceil(numberOfItems / slidesPerGroup);

            break;
        }
    }
    return ret;
}

function getSlidesPerGroup(winWidth: number, arrayBreakpoints: IBreakpoints[]): number {
    let ret = 0;
    for (let i = arrayBreakpoints.length - 1; i >= 0 ; i++) {
        if (winWidth >= arrayBreakpoints[i].breakpointPixels) {
            ret = arrayBreakpoints[i].slidesPerGroup;

            break;
        }
    }
    return ret;
}

function setupArrayBreakpoints(breakpoints: string): IBreakpoints[] {
    let ret: IBreakpoints[] = [];
    const arry = breakpoints.split(",");
    for (let i = 0; i < arry.length; i++) {
        const pair = arry[i].split(":");
        const breakpointPixels = parseInt(pair[0]);
        const slidesPerGroup = parseInt(pair[1]);
        ret.push({breakpointPixels, slidesPerGroup});
    }
    return ret;
}

function recomputeAndSetCurrSlideGroupForNavOnclick(navi: NavDirection, winWidth: number, arrayBreakpoints: IBreakpoints[], numberOfItems: number, currSlideGroup: number, setter: ( slideGroup: number) => any) {
    const num = getNumberOfSlideGroups( winWidth, arrayBreakpoints, numberOfItems);

    let newSlideGroup = 0;
    if (navi == NavDirection.Next) {
        newSlideGroup = (currSlideGroup + 1) % num
    } else {
        if ( currSlideGroup == 0) {
            return;
        }
        newSlideGroup = (currSlideGroup - 1) % num
    }
    setter( newSlideGroup);
}

function recomputeAndSetCurrSlideGroupForWindowResize() {
    // ... compute newcurrSlideGroup,
    // ... setCurrSlideGroup(newcurrSlideGroup);
};

function recomputeCurrSlideGroupForNewItemstag(prevItemtags: {}[], itemtags: {}[]): number {
    // ... compute newcurrSlideGroup,
    // return newcurrSlideGroup;
    return 100;
}


export default function Carousel({ breakpoints, itemtags, cssprefix="cssprefix" }: PageProps) {
    const [curr_slide_group, setCurrSlideGroup] = useState(-1);
    const prevItemtagsRef: React.MutableRefObject<{}[]> = useRef(null as any);
    const arrayBreakpointsRef: React.MutableRefObject<IBreakpoints[]> = useRef([]);
    const prevSlidesPerGroupRef: React.MutableRefObject<number> = useRef(0);
    
    /*const recomputeAndSetCurrSlideGroupForNavOnclick = (navi: NavDirection) => {
        const num_slide_groups = getNumberOfSlideGroups();

        let newSlideGroup = 0;
        if (navi == NavDirection.Next) {
            newSlideGroup = (curr_slide_group + 1) % num_slide_groups
        } else {
            if ( curr_slide_group == 0) {
                return;
            }
            newSlideGroup = (curr_slide_group - 1) % num_slide_groups
        }
        let pct_shift = (-100 * newSlideGroup) + '%';
        setCurrSlideGroup( newSlideGroup);
    };*/

    /*const recomputeAndSetCurrSlideGroupForWindowResize = () => {
        // ... compute newcurrSlideGroup,
        // ... setCurrSlideGroup(newcurrSlideGroup);
    };*/

    /*const recomputeCurrSlideGroupForNewItemstag = (prevItemtagsRef: {}[], itemtags: {}[]): number => {
        // ... compute newcurrSlideGroup,
        // return newcurrSlideGroup;
        return 100;
    }*/
    
    // useEffect(() => {
    //     if (num_slide_groups < 0) {
    //         /* At mounted.
    //         Calc num_slide_groups.
    //         Call setNumSlideGroups() to redraw.
    //         steps ...
    //           1. Initialize array (arrayBreakpointsRef) of {breakpointPixels, slidesPerGroup} objects from prop breakpoints.
    //              see interface PageProps for example prop breakpoints.
    //           2. Read off slidesPerGroup from array by using window.innerWidth to determine object key breakpointPixels.
    //           3. Calc number of slide_groups from slidesPerGroup and prop itemtags's count.
    //           4. Call setNumSlideGroups() to set state. */
    //
    //         // Initialize arrayBreakpointsRef
    //         const arry = breakpoints.split(",");
    //         for (let i = 0; i < arry.length; i++) {
    //             const pair = arry[i].split(":");
    //             const pixels = parseInt(pair[0]);
    //             const slidesPerGroup = parseInt(pair[1]);
    //             arrayBreakpointsRef.current.push({breakpointPixels, slidesPerGroup});
    //         }
    //
    //         // Read off slidesPerGroup from array
    //         const winWidth = window.innerWidth;
    //         for (let i = arrayBreakpointsRef.current.length - 1; i >= 0 ; i++) {
    //             if (winWidth >= arrayBreakpointsRef.current[i].breakpointPixels) {
    //                 const slidesPerGroup = arrayBreakpointsRef.current[i].slidesPerGroup;
    //                 const numOfSlideGroups = Math.ceil(itemtags.length / slidesPerGroup);
    //
    //                 // Set state
    //                 setNumSlideGroups( numOfSlideGroups);
    //
    //                 break;
    //             }
    //         }
    //
    //     } else {
    //  
    //     }
    //   },[]);

    useEffect(() => {
        window.addEventListener("resize", recomputeAndSetCurrSlideGroupForWindowResize);
        /* if (curr_slide_group < 0 || (prevItemtagsRef.current != itemtags)) {
          prevItemtagsRef.current = itemtags;
          setCurrSlideGroup(0);
        } */
        if (curr_slide_group < 0) {
          prevItemtagsRef.current = itemtags;
          arrayBreakpointsRef.current = setupArrayBreakpoints( breakpoints);
          prevSlidesPerGroupRef.current = getSlidesPerGroup( window.innerWidth, arrayBreakpointsRef.current);
          setCurrSlideGroup(0);
        } else if (prevItemtagsRef.current != itemtags) {
          // setCurrSlideGroup(0);
          const curr = recomputeCurrSlideGroupForNewItemstag(prevItemtagsRef.current, itemtags);
          prevItemtagsRef.current = itemtags;
          setCurrSlideGroup(curr);
        }
        return () => window.removeEventListener("resize", recomputeAndSetCurrSlideGroupForWindowResize);
    });

    let out;

    if (curr_slide_group < 0) {
        out = (
            <div className={`${cssprefix + '__carousel-wrap'}`}>
                <p className={`${cssprefix + '__carousel-is-loading'}`}>Initializing...</p>
            </div>
        );
    } else if (itemtags.length == 0) {
        out = null;
    } else if (prevItemtagsRef.current != itemtags) {
        out = (
            <div className={`${cssprefix + '__carousel-wrap'}`}>
                <p className={`${cssprefix + '__carousel-is-loading'}`}>Re-loading...</p>
            </div>
        );
    } else {
        out = (
            <div className={`${cssprefix + '__carousel-wrap'}`}>
                    <div className={`${cssprefix + '__carousel'}`}>
                        <button className={`${cssprefix + '__carousel-nav navigate-to-previousSlide'} ${curr_slide_group > 0 ? "nav-prev-visible" : "nav-prev-hidden"}`} onClick={() => recomputeAndSetCurrSlideGroupForNavOnclick( NavDirection.Prev, window.innerWidth, arrayBreakpointsRef.current, itemtags.length, curr_slide_group, setCurrSlideGroup)}></button>
                        <div className={`${cssprefix + '__carousel-slider-tube'}`}>
                            <div className={`${cssprefix + '__carousel-slider'}`} style={{marginLeft: `${-100 * curr_slide_group}%`}}>
                                <div className={`${cssprefix + '__carousel-slide-group'}`}>
                                    <div className={`${cssprefix + '__carousel-slide'}`}>
                                        <p>slide 1</p>
                                        <p>slide 1</p>
                                        <p>slide 1</p>
                                        <p>slide 1</p>
                                        <p>slide 1</p>
                                    </div>
                                    <div className={`${cssprefix + '__carousel-slide'}`}>
                                        <p>slide 2</p>
                                        <p>slide 2</p>
                                        <p>slide 2</p>
                                        <p>slide 2</p>
                                        <p>slide 2</p>
                                    </div>
                                </div>
                                <div className={`${cssprefix + '__carousel-slide-group'}`}>
                                    <div className={`${cssprefix + '__carousel-slide'}`}>
                                        <p>slide 3</p>
                                        <p>slide 3</p>
                                        <p>slide 3</p>
                                        <p>slide 3</p>
                                        <p>slide 3</p>
                                    </div>
                                    <div className={`${cssprefix + '__carousel-slide'}`}>
                                        <p>slide 4</p>
                                        <p>slide 4</p>
                                        <p>slide 4</p>
                                        <p>slide 4</p>
                                        <p>slide 4</p>
                                    </div>
                                </div>
                                <div className={`${cssprefix + '__carousel-slide-group'}`}>
                                    <div className={`${cssprefix + '__carousel-slide'}`}>
                                        <p>slide 5</p>
                                        <p>slide 5</p>
                                        <p>slide 5</p>
                                        <p>slide 5</p>
                                        <p>slide 5</p>
                                    </div>
                                    <div className={`${cssprefix + '__carousel-slide'}`}>
                                        <p>slide 6</p>
                                        <p>slide 6</p>
                                        <p>slide 6</p>
                                        <p>slide 6</p>
                                        <p>slide 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={`${cssprefix + '__carousel-nav navigate-to-nextSlide'}`} onClick={() => recomputeAndSetCurrSlideGroupForNavOnclick( NavDirection.Next, window.innerWidth, arrayBreakpointsRef.current, itemtags.length, curr_slide_group, setCurrSlideGroup)}></button>
                    </div>
              
            </div>
        );
    }

    return out;
}