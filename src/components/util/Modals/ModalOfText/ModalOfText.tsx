import React from 'react';

import Modal from '../Modal/Modal';
import './ModalOfText.scss';

export default function ModalOfText({texts, error=false, dismissCallback}: { texts: string[], error?: boolean, dismissCallback: () => any}) {

    const ps = texts.map( (txt, i) => <p key={i}>{txt}</p>);

    return <Modal>
        <div className={ error ? "ModalOfText error" : "ModalOfText"} onClick={dismissCallback} >
            {ps}
            <div className="xbutton" />
        </div>
    </Modal>
}
