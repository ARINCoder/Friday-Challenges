import React from 'react';
import '../ProgressbarComponents/Progressbar.css';
import InputNum from '../InputComponents/InputNum.jsx';

const Progressbar = ({ completed, total }) => {
    const percentage = (completed / total) * 100;

    return (
        <div>
            <h1>Progress Bar</h1>
            <div className='progressbar'>
                <div className='input-bar'>
                    <InputNum />
                    <div className='progressfill' style={{ width: `${percentage}%` }}>
                        {percentage.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progressbar