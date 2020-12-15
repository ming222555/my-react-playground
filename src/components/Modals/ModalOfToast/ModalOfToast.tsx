import React, { useState, useEffect } from 'react';

import Modal from '../Modal/Modal';
import './ModalOfToast.scss';

export default function ModalOfToast({texts, dismissCallback}: { texts: string[], dismissCallback: () => any}) {

    const ps = texts.map( (txt, i) => <p key={i}>{txt}</p>);

    const [isOnScreen, setIsOnScreen] = useState( false);

    useEffect(() => {
        setTimeout(() => { setIsOnScreen( true) }, 20);
        setTimeout(() => { setIsOnScreen( false) }, 3200);
        setTimeout(() => { dismissCallback() }, 4020);
    },[]);

    return <Modal>
        <div className={ isOnScreen ? "ModalOfToast on-screen" : "ModalOfToast" } onClick={dismissCallback} >
            {ps}
        </div>
    </Modal>
}
