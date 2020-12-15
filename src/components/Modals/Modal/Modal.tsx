import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';
const modal_root = document.getElementById('modal-root') as HTMLElement;

export default function Modal(props:{[key:string]:any}) {
    const divRef: React.MutableRefObject<HTMLDivElement> = useRef( document.createElement('div'));
    divRef.current.classList.add('Modal');

    useEffect(() => {
        modal_root.appendChild( divRef.current);
        return () => {modal_root.removeChild( divRef.current)};
    }, []);


    return ReactDOM.createPortal(
        props.children,
        divRef.current,
    );
}
