import React from 'react';
import { Link } from 'react-router-dom';

import './Brand.scss';

/*
 *  Props
    outerClazz: string; consumer specified css class
*/
function Brand({ outerClazz=""}:{[key:string]:any}) {

    const brand = process.env.REACT_APP_BRAND;
    const src = process.env.REACT_APP_BRAND_IMAGE_SRC;

    return (
        <Link className={outerClazz ? outerClazz + " Brand" : "Brand"} to="/"><img alt={brand} title={brand} src={src} /></Link>
    );

}

export default Brand;
