import React from 'react'

function Modal({show, title, body, handleClose}) {

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'} textModal`} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                </div>
                <div className="modal-body">
                    <p>{body}</p>
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    onClick={handleClose}
                    >
                    Fermer
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Modal