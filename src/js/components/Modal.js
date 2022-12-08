import React from 'react'

const Modal = ({
    children,
    show = false
}) => {
    return (
        show &&
        <div className="overlay">
            <div className="modal">
                {children}
            </div>
        </div>
    )
}
export default Modal;