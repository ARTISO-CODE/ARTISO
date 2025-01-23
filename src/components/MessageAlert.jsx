import React from 'react';
import './MessageAlert.css';

function MessageAlert({ show, message, type }){

    return (
        <div className={`${show ? 'messageAlert_container' : 'messageAlert_container hide'}`}>
            <p className="messageAlert">{message}</p>
        </div>
    );
};

export default MessageAlert;