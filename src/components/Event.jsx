import React, { useState } from 'react'

const Event = () => {
    const bg = "purple";
    const [chBg, setChBg] = useState(bg);
    const [nameChange, setNameChange] = useState("Click ME");



    const handleChange = () => {
        setNameChange("Yaaa Hooo");
        setChBg("white");
    };
    const dblClick = () => {
        setNameChange("Nooooo");
    };

    return (
        <>
            <div className="container mt-5" style={{backgroundColor: chBg}} >
                <button onClick={handleChange} onDoubleClick={dblClick}>
                    {nameChange}
                </button>
            </div>
        </>
    )
}

export default Event;
