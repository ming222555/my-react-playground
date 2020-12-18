import React from 'react';
import { Link } from 'react-router-dom';

function Brand({ clazz=""}:{[key:string]:any}) {

    const brand = process.env.REACT_APP_BRAND;
    const src = process.env.REACT_APP_BRAND_IMAGE_SRC;

    return (
        <Link className={clazz ? clazz + " Brand" : "Brand"} to="/"><img alt={brand} title={brand} src={src} /></Link>
    );

}

export default Brand;
