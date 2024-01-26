import React, { useState } from 'react';
import '../InputComponents/Input.css';

const InputNum = () => {
    const [num, setNum] = useState(0);

    const updateProgress = (e) => {
        setNum(e.target.value)
    }

    return (
        <div className='nav'>
            <div className='Inputvalue' style={{ width: `${num}%` }}>
                {num}%
            </div>
            <div className='input'> 
            <h2>Input Percentage:</h2>
            <input type="number" min={0} max={100} onInput={updateProgress} id='addbtn' />
            </div>
            
        </div>
    )
}

export default InputNum;