import React, { useRef, useState } from 'react';
import './Carousel.scss';

export interface PageProps {
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

export default function Carousel({ css_prefix = 'cssPrefix' }: PageProps) {
    const [num_slide_groups, setNumSlideGroups] = useState(3);
    const [curr_slide_group, setCurrSlideGroup] = useState(0);

    const silderEl: React.MutableRefObject<HTMLDivElement> = useRef(null as any);

    return (
        <div className={`${css_prefix + '__carousel-wrap'}`}>
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
        </div>
    );
}
