import React from 'react';

import './PrimaryMenu.scss';

function PrimaryMenu({ outerClazz=""}:{[key:string]:any}) {
    console.log('function PrimaryMenu');
    return (
        
        <ul className={outerClazz ? outerClazz + " PrimaryMenu" : "PrimaryMenu"}>
            <li className="PrimaryMenu__menuitem">
                <a className="PrimaryMenu__menutitle" href="#">WOMEN</a>
                <div className="PrimaryMenu__menudropdownparent">
                    <div className="PrimaryMenu__menudropdown">
                        <ul className="PrimaryMenu__departments" role="navigation">
                            {/* <!-- Listing WOMEN cats --> */}
                            <li className="PrimaryMenu__department"><h3 className="PrimaryMenu__department-caption">CATEGORIES</h3></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SKIRTS</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">DRESSES</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SHIRTS AND BLOUSES</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SWEATERS</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">TOPS AND T-SHIRTS</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">JACKETS AND COATS</a></li>
                        </ul>
                        <div className="PrimaryMenu__banner">
                            {/* <!-- Banner WOMEN --> */}
                            <img src={`${process.env.REACT_APP_IMAGES_PATH}women-new-collection.jpg`} />
                        </div>
                        <div className="PrimaryMenu__banner2">
                            {/* <!-- Banner2 WOMEN --> */}
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
            </li>
            <li className="PrimaryMenu__menuitem">
                <a className="PrimaryMenu__menutitle" href="#">MEN</a>
                <div className="PrimaryMenu__menudropdownparent">
                    <div className="PrimaryMenu__menudropdown">
                        <ul className="PrimaryMenu__departments" role="navigation">
                            {/* <!-- Listing MEN cats --> */}
                            <li className="PrimaryMenu__department"><h3 className="PrimaryMenu__department-caption">CATEGORIES</h3></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SHIRTS</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">T-SHIRTS</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SWEATERS</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">JACKETS AND COATS</a></li>
                        </ul>
                        <div className="PrimaryMenu__banner">
                            {/* <!-- Banner MEN --> */}
                            <img src={`${process.env.REACT_APP_IMAGES_PATH}men-new-collection.jpg`} />
                        </div>
                        <div className="PrimaryMenu__banner2">
                            {/* <!-- Banner2 MEN --> */}
                            <img src={`${process.env.REACT_APP_IMAGES_PATH}men-special-offers.jpg`} />
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
            </li>
            <li className="PrimaryMenu__menuitem">
                <a className="PrimaryMenu__menutitle" href="#">SPORTSWEAR</a>
                <div className="PrimaryMenu__menudropdownparent">
                    <div className="PrimaryMenu__menudropdown">
                        <ul className="PrimaryMenu__departments" role="navigation">
                            {/* <!-- Listing SPORTSWEAR cats --> */}
                            <li className="PrimaryMenu__department"><h3 className="PrimaryMenu__department-caption">CATEGORIES</h3></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">TOPS</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">SWEATSHIRTS</a></li>
                            <li className="PrimaryMenu__department"><a className="PrimaryMenu__department-link" href="#">PANTS</a></li>
                        </ul>
                        <div className="PrimaryMenu__banner">
                            {/* <!-- Banner SPORTSWEAR --> */}
                            <img src={`${process.env.REACT_APP_IMAGES_PATH}sportswear-new-collection.jpg`} />
                        </div>
                        <div className="PrimaryMenu__banner2">
                            {/* <!-- Banner2 SPORTSWEAR --> */}
                            <img src={`${process.env.REACT_APP_IMAGES_PATH}sportswear-special-offers.jpg`} />
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
            </li>
        </ul>
    );
}

export default React.memo( PrimaryMenu);
