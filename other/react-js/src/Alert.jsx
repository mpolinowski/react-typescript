

import { useState } from "react";


export default function Alert({ type = 'information', heading, children, closeable, onClose }) {
    const [visible, setVisible] = useState(true);

    if (!visible) {
        return null;
    }

    function handleCloseClick()  {
        setVisible(false)
        if (onClose) {
            onClose()
            }
        }

    return (
        <div>
            <span role='alert' aria-label={type === 'warning' ? 'Warning' : 'Information'}>
                {type === 'warning' ? '⚠' : 'i'}
            </span>
            <span>{heading}</span>
            <div>{children}</div>
            {closeable && (
                <button aria-label="Close" onClick={ handleCloseClick } >
                    <span role="alert" aria-label="Close">❌</span>
                </button>
            )}
        </div>
    );
}
