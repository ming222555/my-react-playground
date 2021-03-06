import React, { useRef, useState, useEffect } from 'react';
import './Carousel.scss';

export interface PageProps {
    outerClazz?: string; // consumer specified css class
    breakpoints: string; /* e.g. "768:4,1200:2" which says 
                            "at viewport >= 768px,  no. of visible items shown in carousel is 4",
                            "at viewport >= 1200px, no. of visible items shown in carousel is 2"
                            *** IMPORTANT! THE viewport SIZES (px) ARE ASSUMED TO BE IN INCREASING ORDER! ***
                        */
    items: {}[]; /* array of jsx objects 
                       e.g. [
                           <MyCatalogItem key="123" id="123" name="tshirt" />,
                           <MyCatalogItem key="456" id="456" name="jacket" />
                       ]
                    */
    itemIDs: string[];
}

interface IBreakpoints {
    breakpointPixels: number; // pixels
    itemsPerGroup: number;
}

enum NavDirection {
    Prev,
    Next
}

function getNumberOfItemGroups(winWidth: number, arrayBreakpoints: IBreakpoints[], numberOfItems: number): number {
    let ret = numberOfItems;
    for (let i = arrayBreakpoints.length - 1; i >= 0 ; i--) {
        if (winWidth >= arrayBreakpoints[i].breakpointPixels) {
            const itemsPerGroup = arrayBreakpoints[i].itemsPerGroup;
            ret = Math.ceil(numberOfItems / itemsPerGroup);

            // console.log('getNumberOfItemGroups winWidth',winWidth);
            // console.log('getNumberOfItemGroups winWidth',arrayBreakpoints[i].breakpointPixels);

            break;
        }
    }
    return ret;
}

function getItemsPerGroup(winWidth: number, arrayBreakpoints: IBreakpoints[]): number {
    let ret = 1;
    for (let i = arrayBreakpoints.length - 1; i >= 0 ; i--) {
        if (winWidth >= arrayBreakpoints[i].breakpointPixels) {
            ret = arrayBreakpoints[i].itemsPerGroup;
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
        const itemsPerGroup = parseInt(pair[1]);
        ret.push({breakpointPixels, itemsPerGroup});
    }
    return ret;
}

function recomputeAndSetPosItemGroupForNavOnclick(navi: NavDirection, winWidth: number, arrayBreakpoints: IBreakpoints[], numberOfItems: number, posItemGroup: number, itemsPerGroup: number, setter: ( posItemGroupConcatItemsPerGroup: string) => any) {
    const num = getNumberOfItemGroups( winWidth, arrayBreakpoints, numberOfItems);
    // console.log('recomputeAndSetPosItemGroupForNavOnclick num',num);
    let newPosItemGroup = 0;
    if (navi == NavDirection.Next) {
        newPosItemGroup = (posItemGroup + 1) % num
    } else {
        if ( posItemGroup == 0) {
            return;
        }
        newPosItemGroup = (posItemGroup - 1) % num
    }
    setter( newPosItemGroup + ',' + itemsPerGroup);
}

function recomputeAndSetItemsPerGroupForWindowResize(winWidth: number, arrayBreakpoints: IBreakpoints[], posItemGroupConcatItemsPerGroup: string, numberOfItems: number, setter: ( posItemGroupConcatItemsPerGroup: string) => any) {

    if( numberOfItems == 0) {
        return;
    }

    const pair = posItemGroupConcatItemsPerGroup.split(',');
    const itemsPerGroup = parseInt( pair[1]);

    const newItemsPerGroup: number = getItemsPerGroup( window.innerWidth, arrayBreakpoints);

    if ( itemsPerGroup == newItemsPerGroup) {
        return;
    }

    const posItemGroup = parseInt( pair[0]);
    
    if ( posItemGroup == 0) {
        setter( '0,' + newItemsPerGroup);
        return;
    }

    let newPosItemGroup: number;

    const absIdxOfLeadingItemInCurrItemGroup = ( posItemGroup * itemsPerGroup) + 1; // Idx starting with 1 wrt items array

    newPosItemGroup = Math.ceil( absIdxOfLeadingItemInCurrItemGroup / newItemsPerGroup) - 1;
    setter( newPosItemGroup + ',' + newItemsPerGroup);
};

function Carousel({ outerClazz="", breakpoints="", items=[], itemIDs=[]}: PageProps) {
    
    const prevItemsRef: React.MutableRefObject<{}[]> = useRef(null as any);
    const arrayBreakpointsRef: React.MutableRefObject<IBreakpoints[]> = useRef([]);
    
    // console.log('testing Carousel memo');
    const [posItemGroupConcatItemsPerGroup, setPosItemGroupConcatItemsPerGroup] = useState(','); // comma delimiter
    const [counterForceRedraw, setCounterForceRedraw] = useState(0);
    
    useEffect(() => {
        let fn = () => recomputeAndSetItemsPerGroupForWindowResize( window.innerWidth, arrayBreakpointsRef.current, posItemGroupConcatItemsPerGroup, items.length, setPosItemGroupConcatItemsPerGroup);
        window.addEventListener("resize", fn);
        
        if (items.length == 0) {
            prevItemsRef.current = [];
        } else if (posItemGroupConcatItemsPerGroup == ',') {
            prevItemsRef.current = items;
            arrayBreakpointsRef.current = setupArrayBreakpoints( breakpoints);
            setPosItemGroupConcatItemsPerGroup('0,' + getItemsPerGroup( window.innerWidth, arrayBreakpointsRef.current));
        } else if (prevItemsRef.current != items) {
            const pair = posItemGroupConcatItemsPerGroup.split(',');
            const itemsPerGroup = parseInt( pair[1]);
            const posItemGroup = parseInt( pair[0]);

            prevItemsRef.current = items;
            
            if ( posItemGroup != 0) {
                setPosItemGroupConcatItemsPerGroup('0,' + itemsPerGroup);
            } else {
                const newCounterForceRedraw = counterForceRedraw + 1;
                setCounterForceRedraw( newCounterForceRedraw);
            }

        } else {
            // console.log('useEffect PosItemGroupConcatItemsPerGroup',posItemGroupConcatItemsPerGroup); // debug
        }
        return () => window.removeEventListener("resize", fn);
    });

    if (items.length == 0) {

        return null;

    }

    const carouselClassName = outerClazz ? outerClazz + " Carousel" : "Carousel";
    
    if (posItemGroupConcatItemsPerGroup == ',') {

        return (
            <div className={carouselClassName}>
                <p className="Carousel__loading">Initializing...</p>
            </div>
        );

    }
    
    if (prevItemsRef.current != items) {

        return (
            <div className={carouselClassName}>
                <p className="Carousel__loading">Loading...</p>
            </div>
        );

    }
    

    const pair = posItemGroupConcatItemsPerGroup.split(',');
    const itemsPerGroup = parseInt( pair[1]);
    const numberOfItemGroups = Math.ceil(items.length / itemsPerGroup);
    // console.log('out posItemGroupConcatItemsPerGroup',posItemGroupConcatItemsPerGroup);
    const array_groups = [];

    for (let i = 0; i < numberOfItemGroups; i++) {
        const posHeadItemInGroup: number = i*itemsPerGroup;
        const posTailItemInGroup = i < numberOfItemGroups - 1 ? posHeadItemInGroup + itemsPerGroup - 1 : items.length - 1;
        const groupkey: string = itemIDs[posHeadItemInGroup] + itemIDs[posTailItemInGroup];
        
        const groupItems = [];
        
        for (let k = posHeadItemInGroup; k <= posTailItemInGroup; k++) {
            groupItems.push( <div className="Carousel__body-slide" key={itemIDs[k]}>{items[k]}</div>);
        }

        if (i == numberOfItemGroups - 1) { // last iteration for outer for loop
            let remaining: number = items.length % itemsPerGroup;
            if ( remaining > 0) { // final groupItems doesn't meet full occupany of itemsPerGroup, so needs to padd it up
                for (let i = 0; i < itemsPerGroup - remaining; i++) {
                    groupItems.push( <div className="Carousel__body-slide" key={`nill${i}`}></div>);
                }
            }
        }

        // array_groups.push(<div className="Carousel__body-slide-group" key={groupkey} id={groupkey} style={{gridTemplateColumns: `repeat(${itemsPerGroup},1fr)`}}>{groupItems}</div>)
        array_groups.push(<div className="Carousel__body-slide-group" key={groupkey} id={groupkey}>{groupItems}</div>)
    }

    const posItemGroup = parseInt( pair[0]);

    return (
        <div className={carouselClassName}>
                <div className="Carousel__body">
                    <button className={`"Carousel__body-nav navigate-to-previous ${posItemGroup > 0 ? "" : "nav-hidden"}`} onClick={() => recomputeAndSetPosItemGroupForNavOnclick( NavDirection.Prev, window.innerWidth, arrayBreakpointsRef.current, items.length, posItemGroup, itemsPerGroup, setPosItemGroupConcatItemsPerGroup)}></button>
                    <div className="Carousel__body-slider-tube">
                        <div className="Carousel__body-slider" style={{marginLeft: `${-100 * posItemGroup}%`}}>
                            {array_groups}
                            {/* <div className="Carousel__body-slide-group">
                                <div className="Carousel__body-slide">
                                    <div>
                                        <p>item 1</p>
                                        <p>item 1</p>
                                        <p>item 1</p>
                                        <p>item 1</p>
                                        <p>item 1</p>
                                    </div>
                                </div>
                                <div className="Carousel__body-slide">
                                    <div>
                                        <p>item 2</p>
                                        <p>item 2</p>
                                        <p>item 2</p>
                                        <p>item 2</p>
                                        <p>item 2</p>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="Carousel__body-slide-group">
                                <div className="Carousel__body-slide">
                                    <div>
                                        <p>item 3</p>
                                        <p>item 3</p>
                                        <p>item 3</p>
                                        <p>item 3</p>
                                        <p>item 3</p>
                                    </div>
                                </div>
                                <div className="Carousel__body-slide">
                                    <div>
                                        <p>item 4</p>
                                        <p>item 4</p>
                                        <p>item 4</p>
                                        <p>item 4</p>
                                        <p>item 4</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <button className={`Carousel__body-nav navigate-to-next ${items.length > itemsPerGroup ? "" : "nav-hidden"}`} onClick={() => recomputeAndSetPosItemGroupForNavOnclick( NavDirection.Next, window.innerWidth, arrayBreakpointsRef.current, items.length, posItemGroup, itemsPerGroup, setPosItemGroupConcatItemsPerGroup)}></button>
                </div>
            
        </div>
    );
}

export default React.memo(Carousel);
