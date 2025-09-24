import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div style={{position:'fixed', top:0, right:0, bottom: 0,background: 'rgba(0, 0, 0, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{background: 'white', padding: '20px', borderRadius: '6px'}}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    )
}