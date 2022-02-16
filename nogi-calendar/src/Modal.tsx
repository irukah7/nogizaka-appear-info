import React from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

function Modals(){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return (
        <div className='Modal'>
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before"
        }}
        className={{
            base: "content-base",
            afterOpen: "content-after",
            beforeClose: "content-before"
        }}
        closeTimeoutMS={500}
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <button onClick={() => setIsOpen(false)}>閉じる</button>
        </div>
    )
    }

export default Modals