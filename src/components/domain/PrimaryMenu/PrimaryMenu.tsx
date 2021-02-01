import React from 'react';

import './PrimaryMenu.scss';

let data = 
[
    {
        root_category : {
            id: '1',
            name: 'WOMENoo'
        },
        child_categories: [
            {
                id: '2',
                name: 'SKIRTSoo'
            },
            {
                id: '3',
                name: 'DRESSESoo'
            },
            {
                id: '4',
                name: 'SHIRTS AND BLOUSESoo'
            },
            {
                id: '5',
                name: 'SWEATERSoo'
            },
            {
                id: '6',
                name: 'TOPS AND T-SHIRTSoo'
            },
            {
                id: '7',
                name: 'JACKETS AND COATSoo'
            }
        ]
    },
    {
        root_category : {
            id: '11',
            name: 'MENoo'
        },
        child_categories: [
            {
                id: '22',
                name: 'SHIRTSoo'
            },
            {
                id: '33',
                name: 'T-SHIRTSoo'
            },
            {
                id: '44',
                name: 'SWEATERSoo'
            },
            {
                id: '55',
                name: 'JACKETS AND COATSoo'
            }
        ]
    },
    {
        root_category : {
            id: '111',
            name: 'SPORTSWEARoo'
        },
        child_categories: [
            {
                id: '222',
                name: 'TOPSoo'
            },
            {
                id: '333',
                name: 'SWEATSHIRTSoo'
            },
            {
                id: '444',
                name: 'PANTSoo'
            }
        ]
    }
];

function PrimaryMenu({ outerClazz=""}:{[key:string]:any}) {
    console.log('function PrimaryMenu');

    return (
        
        <ul className={outerClazz ? outerClazz + " PrimaryMenu" : "PrimaryMenu"}>
            { data.length ?
                data.map( aRootCategory => 
                    (
                        <li className="PrimaryMenu__menuitem" key={aRootCategory.root_category.id}>
                            <a className="PrimaryMenu__menutitle h1" href="#"> {aRootCategory.root_category.name} </a>
                            {
                                aRootCategory.child_categories.length ?
                                (
                                    <div className="PrimaryMenu__menudropdownparent">
                                        <div className="PrimaryMenu__menudropdown">
                                            <ul className="PrimaryMenu__departments" role="navigation">
                                                <li className="PrimaryMenu__department"><p className="PrimaryMenu__department-caption h3">CATEGORIES</p></li>
                                                {/* <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SKIRTS</a></li>
                                                <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">DRESSES</a></li>
                                                <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SHIRTS AND BLOUSES</a></li>
                                                <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SWEATERS</a></li>
                                                <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">TOPS AND T-SHIRTS</a></li>
                                                <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">JACKETS AND COATS</a></li> */}
                                                {
                                                    aRootCategory.child_categories.map( cat => 
                                                        <li className="PrimaryMenu__department" key={ cat.id }><a className="PrimaryMenu__department-link" href="#">{ cat.name }</a></li>
                                                    )
                                                }
                                            </ul>
                                            <div className="PrimaryMenu__banner">
                                                <img src={`${process.env.REACT_APP_IMAGES_PATH}women-new-collection.jpg`} />
                                            </div>
                                            <div className="PrimaryMenu__banner2">
                                                <img src={`${process.env.REACT_APP_IMAGES_PATH}women-special-offers.jpg`} />
                                            </div>
                                            <div className="PrimaryMenu__bannertext">
                                                <span>New Collection</span>
                                                <span>Summer 2019</span>
                                            </div>
                                            <div className="PrimaryMenu__bannertext2">
                                                <span>Special Offers</span>
                                                <span>Get up to 30% off</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                                :
                                null
                            }
                        </li>
                    )
                )
                
                :
                <li className="PrimaryMenu__menuitem">
                    <span className="PrimaryMenu__menutitle h1">&nbsp;</span>
                </li>
            }
        </ul>
    );
}

export default React.memo( PrimaryMenu);
