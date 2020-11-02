import React, { useState } from 'react'
import { link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    return (
        <div className="joinOuterContainer">
            <div className="join"></div>
        </div>
    )
}

export default Join