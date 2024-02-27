import React from 'react'
import { useState } from 'react'
import {light, dark} from  '../assets/index.js''

const Darkmode = () => {
    cosnt[isDarkmode, setDarkmode] = useState(false)

    const handleLight = () => {
        setDarkmode(!isDarkmode)
    }
    return (
        <>
            <img
                src={isDarkmode ? 'dark' : 'light'}
                alt=" DarkModeBtn" 
                onClick={handleLight}/>

        </>
    )
}

export default Darkmode