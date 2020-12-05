import React, { useState } from 'react';

import './PrimaryHeader.scss';
import CartBadge from 'components/CartBadge/CartBadge';
import CartBadgeWrapper from 'componentWrappers/CartBadgeWrapper/CartBadgeWrapper';

function PrimaryHeader({ cartId, userEmail }:{[key:string]:any}) {
    console.log('function PrimaryHeader');
    
    return (
        
        <nav className="navbar primary-navbar">
            <button className="navbar-toggler" type="button"></button>
            <a className="navbar-brand" href="#"><img alt="Spree Demo Site" title="Spree Demo Site" src="logo-spree.svg" /></a>
            <div className="navbar-vert-propup-mobile"><h1>&nbsp;</h1></div>

            <ul className="navbar-nav navbar-nav-main">
                <li className="nav-item dropdown">
                    <h1><a className="nav-link" href="#">WOMEN</a></h1>
                    <div className="nav-dropdown">
                        <div className="dept-categories">
                            <ul className="dept-categories__listing" role="navigation">
                                {/* <!-- Listing WOMEN cats --> */}
                                <li className="dept-categories__item"><h3 className="dept-categories__caption">CATEGORIES</h3></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">SKIRTS</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">DRESSES</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">SHIRTS AND BLOUSES</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">SWEATERS</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">TOPS AND T-SHIRTS</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">JACKETS AND COATS</a></li>
                            </ul>
                            <div className="dept-categories__banner">
                                {/* <!-- Banner WOMEN --> */}
                                <img src="./women-new-collection.jpg" />
                            </div>
                            <div className="dept-categories__banner2">
                                {/* <!-- Banner2 WOMEN --> */}
                                <img src="./women-special-offers.jpg" />
                            </div>
                            <div className="dept-categories__banner-text">
                                <span>New Collection</span>
                                <span>Summer 2019</span>
                            </div>
                            <div className="dept-categories__banner2-text">
                                <span>Special Offers</span>
                                <span>Get up to 30% off</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <h1><a className="nav-link" href="#">MEN</a></h1>
                    <div className="nav-dropdown">
                        <div className="dept-categories">
                            <ul className="dept-categories__listing" role="navigation">
                                {/* <!-- Listing MEN cats --> */}
                                <li className="dept-categories__item"><h3 className="dept-categories__caption">CATEGORIES</h3></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">SHIRTS</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">T-SHIRTS</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">SWEATERS</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">JACKETS AND COATS</a></li>
                            </ul>
                            <div className="dept-categories__banner">
                                {/* <!-- Banner MEN --> */}
                                <img src="./men-new-collection.jpg" />
                            </div>
                            <div className="dept-categories__banner2">
                                {/* <!-- Banner2 MEN --> */}
                                <img src="./men-special-offers.jpg" />
                            </div>
                            <div className="dept-categories__banner-text">
                                <span>New Collection</span>
                                <span>Summer 2019</span>
                            </div>
                            <div className="dept-categories__banner2-text">
                                <span>Special Offers</span>
                                <span>Get up to 30% off</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <h1><a className="nav-link" href="#">SPORTSWEAR</a></h1>
                    <div className="nav-dropdown">
                        <div className="dept-categories">
                            <ul className="dept-categories__listing" role="navigation">
                                {/* <!-- Listing SPORTSWEAR cats --> */}
                                <li className="dept-categories__item"><h3 className="dept-categories__caption">CATEGORIES</h3></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">TOPS</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">SWEATSHIRTS</a></li>
                                <li className="dept-categories__item"><a className="dept-categories__link" href="#">PANTS</a></li>
                            </ul>
                            <div className="dept-categories__banner">
                                {/* <!-- Banner SPORTSWEAR --> */}
                                <img src="./sportswear-new-collection.jpg" />
                            </div>
                            <div className="dept-categories__banner2">
                                {/* <!-- Banner2 SPORTSWEAR --> */}
                                <img src="./sportswear-special-offers.jpg" />
                            </div>
                            <div className="dept-categories__banner-text">
                                <span>New Collection</span>
                                <span>Summer 2019</span>
                            </div>
                            <div className="dept-categories__banner2-text">
                                <span>Special Offers</span>
                                <span>Get up to 30% off</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item navbar-nav-right__menu navbar-nav-right__search-menu">
                    <a className="nav-link navbar-nav-right__icon-link navbar-nav-right__search-icon-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 23.286 23.291" width="24px" className="navbar-nav-right__icon"><clipPath><path d="m0 0h23.286v23.291h-23.286z"></path></clipPath><g clipPath="url(#a)"><path d="m23.134 22.1-5.66-5.66a9.939 9.939 0 1 0 -.981.981l5.66 5.66a.7.7 0 0 0 .491.207.68.68 0 0 0 .491-.207.7.7 0 0 0 -.001-.981zm-21.695-12.169a8.537 8.537 0 1 1 8.537 8.542 8.546 8.546 0 0 1 -8.537-8.542z" fill="currentColor" transform="translate(-.05)"></path></g></svg>
                    </a>
                    <div className="navbar-nav-right__search-overlay">
                    </div>
                    <div className="navbar-nav-right__dropdown navbar-nav-right__search-dropdown">
                        Enter search text here...
                    </div>
                </li>
                <li className="nav-item navbar-nav-right__menu navbar-nav-right__user-menu">
                    <a className="nav-link navbar-nav-right__icon-link navbar-nav-right__user-icon-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 22.964 22.964" width="27.6px" className="navbar-nav-right__icon"><clipPath><path d="m0 0h22.964v22.964h-22.964z"></path></clipPath><g clipPath="url(#a)"><path d="m21.34 16.507a14.758 14.758 0 0 0 -3.6-2.163 19.579 19.579 0 0 1 -2.765-1.544 9.709 9.709 0 0 0 2.407-5.837 9.174 9.174 0 0 0 -.7-4.212c-.637-1.251-2.053-2.751-5.2-2.751s-4.564 1.5-5.2 2.751a9.164 9.164 0 0 0 -.7 4.212 9.7 9.7 0 0 0 2.407 5.837 19.483 19.483 0 0 1 -2.766 1.544 14.769 14.769 0 0 0 -3.6 2.163 7.059 7.059 0 0 0 -1.623 4.514 1.913 1.913 0 0 0 1.913 1.943h19.137a1.914 1.914 0 0 0 1.914-1.943 7.061 7.061 0 0 0 -1.624-4.514zm.051 4.878a.478.478 0 0 1 -.341.143h-19.137a.478.478 0 0 1 -.34-.143.485.485 0 0 1 -.138-.343 5.731 5.731 0 0 1 1.2-3.52 14.581 14.581 0 0 1 3.227-1.9 15.74 15.74 0 0 0 3.109-1.785l.969-.916-.84-1.027a8.306 8.306 0 0 1 -2.083-4.931 7.934 7.934 0 0 1 .549-3.563c.658-1.3 1.974-1.962 3.916-1.962s3.258.662 3.918 1.962a7.938 7.938 0 0 1 .55 3.566 8.3 8.3 0 0 1 -2.086 4.931l-.841 1.034.969.915a15.774 15.774 0 0 0 3.108 1.782 14.517 14.517 0 0 1 3.227 1.9 5.593 5.593 0 0 1 1.2 3.52.478.478 0 0 1 -.136.338z" fill="currentColor"></path></g></svg>
                    </a>
                    <ul className="navbar-nav-right__dropdown navbar-nav-right__user-dropdown">
                        <li className="navbar-nav-right__dropdown-item"><a className="navbar-nav-right__dropdown-link navbar-nav-right__user-login" href="#"><span>LOG IN</span></a></li>
                        <li className="navbar-nav-right__dropdown-item"><a className="navbar-nav-right__dropdown-link navbar-nav-right__user-signup" href="#"><span>SIGN UP</span></a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <CartBadgeWrapper cartId={cartId} defaultWidth="1.5rem" defaultFontSize=".7rem" breakpoints="520:1.5rem:.7rem,768:1.5rem:.7rem,1200:2.25rem:.8rem">
                    </CartBadgeWrapper>
                </li>
            </ul>
        </nav>
    );
}

export default React.memo( PrimaryHeader);
