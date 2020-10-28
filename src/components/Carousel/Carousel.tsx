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
    css_prefix?: string;
}

/* let num_slide_groups = 3;
let curr_slide_group = 0;

function onPrev() {
    if ( curr_slide_group == 0) {
        alert(123);
        return;
    }
    curr_slide_group = (curr_slide_group - 1) % num_slide_groups;
    let pct_shift = (-100 * curr_slide_group) + '%';
    document.getElementById("bestsellers-slider").style.marginLeft = pct_shift;
}

function onNext() {
    curr_slide_group = (curr_slide_group + 1) % num_slide_groups;
    let pct_shift = (-100 * curr_slide_group) + '%';
    document.getElementById("bestsellers-slider").style.marginLeft = pct_shift;
} */

function onPrev(el: React.MutableRefObject<HTMLDivElement>, num_slide_groups: number, curr_slide_group: number, cb: (newSlideGroup: number) => void) {
    if ( curr_slide_group == 0) {
        alert(123);
        return;
    }
    const newSlideGroup = (curr_slide_group - 1) % num_slide_groups;
    let pct_shift = (-100 * newSlideGroup) + '%';
    el.current.style.marginLeft = pct_shift;
    cb( newSlideGroup);
}

function onNext(el: React.MutableRefObject<HTMLDivElement>, num_slide_groups: number, curr_slide_group: number, cb: (newSlideGroup: number) => void) {
    const newSlideGroup = (curr_slide_group + 1) % num_slide_groups;
    let pct_shift = (-100 * newSlideGroup) + '%';
    el.current.style.marginLeft = pct_shift;
    cb( newSlideGroup);
}

export default function Carousel({ breakpoints, itemtags, css_prefix='cssPrefix' }: PageProps) {
    const [num_slide_groups, setNumSlideGroups] = useState(-1);
    const [curr_slide_group, setCurrSlideGroup] = useState(0);

    const silderEl: React.MutableRefObject<HTMLDivElement> = useRef(null as any);

    // use as inst variable
    const arry_slide_group_size: React.MutableRefObject<{bp: number, sizeSlideGroup: number}[]> = useRef([]);
    
    useEffect(() => {
        if (num_slide_groups < 0) {
            /* At mounted.
            Calc num_slide_groups.
            Call setNumSlideGroups() to redraw.
            steps ...
              1. Initialize array (arry_slide_group_size) of {bp: numOfPixels, sizeSlideGroup: numOfSlidesPerGroup} objects from prop breakpoints.
                 see interface PageProps for example prop breakpoints.
              2. Read off sizeSlideGroup from array by using window.innerWidth to determine object key bp.
              3. Calc number of slide_groups from sizeSlideGroup and prop itemtags's count.
              4. Call setNumSlideGroups() to set state. */

            // Initialize arry_slide_group_size
            const arry = breakpoints.split(",");
            for (let i = 0; i < arry.length; i++) {
                const pair = arry[i].split(":");
                const numOfPixels = parseInt(pair[0]);
                const numOfSlidesPerGroup = parseInt(pair[1]);
                arry_slide_group_size.current.push({bp: numOfPixels, sizeSlideGroup: numOfSlidesPerGroup});
            }

            // Read off numOfSlidesPerGroup from array
            const winWidth = window.innerWidth;
            for (let i = arry_slide_group_size.current.length - 1; i >= 0 ; i++) {
                if (winWidth >= arry_slide_group_size.current[i].bp) {
                    const numOfSlidesPerGroup = arry_slide_group_size.current[i].sizeSlideGroup;
                    const numOfSlideGroups = Math.floor(itemtags.length / numOfSlidesPerGroup);

                    // Set state
                    setNumSlideGroups( numOfSlideGroups);

                    break;
                }
            }

        } else {
            
        }
      },[]);

    return (
        <div className={`${css_prefix + '__carousel-wrap'}`}>
            {
                num_slide_groups < 0 ? <p className={`${css_prefix + '__carousel-is-loading'}`}>Loading...</p> : 

                <div className={`${css_prefix + '__carousel'}`}>
                    <button className={`${css_prefix + '__carousel-nav navigate-to-previousSlide'}`} onClick={() => onPrev( silderEl, num_slide_groups, curr_slide_group, setCurrSlideGroup)}></button>
                    <div className={`${css_prefix + '__carousel-slider-tube'}`}>
                        <div className={`${css_prefix + '__carousel-slider'}`} ref={silderEl}>
                            <div className={`${css_prefix + '__carousel-slide-group'}`}>
                                <div className={`${css_prefix + '__carousel-slide'}`}>
                                    <p>slide 1</p>
                                    <p>slide 1</p>
                                    <p>slide 1</p>
                                    <p>slide 1</p>
                                    <p>slide 1</p>
                                </div>
                                <div className={`${css_prefix + '__carousel-slide'}`}>
                                    <p>slide 2</p>
                                    <p>slide 2</p>
                                    <p>slide 2</p>
                                    <p>slide 2</p>
                                    <p>slide 2</p>
                                </div>
                            </div>
                            <div className={`${css_prefix + '__carousel-slide-group'}`}>
                                <div className={`${css_prefix + '__carousel-slide'}`}>
                                    <p>slide 3</p>
                                    <p>slide 3</p>
                                    <p>slide 3</p>
                                    <p>slide 3</p>
                                    <p>slide 3</p>
                                </div>
                                <div className={`${css_prefix + '__carousel-slide'}`}>
                                    <p>slide 4</p>
                                    <p>slide 4</p>
                                    <p>slide 4</p>
                                    <p>slide 4</p>
                                    <p>slide 4</p>
                                </div>
                            </div>
                            <div className={`${css_prefix + '__carousel-slide-group'}`}>
                                <div className={`${css_prefix + '__carousel-slide'}`}>
                                    <p>slide 5</p>
                                    <p>slide 5</p>
                                    <p>slide 5</p>
                                    <p>slide 5</p>
                                    <p>slide 5</p>
                                </div>
                                <div className={`${css_prefix + '__carousel-slide'}`}>
                                    <p>slide 6</p>
                                    <p>slide 6</p>
                                    <p>slide 6</p>
                                    <p>slide 6</p>
                                    <p>slide 6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={`${css_prefix + '__carousel-nav navigate-to-nextSlide'}`} onClick={() => onNext( silderEl, num_slide_groups, curr_slide_group, setCurrSlideGroup)}></button>
                </div>
            }
        </div>
    );
}
