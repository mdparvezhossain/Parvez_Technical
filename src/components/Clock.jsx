import React, { useState } from 'react'

const Clock = () => {
    let time = new Date();
    time = time.getHours();
    let greeting = '';
    const cssStyle = {};
    const [cTime, setCTime] = useState(time);
    let date = new Date().toLocaleDateString();
    
    if(time > 1 && time < 11){
        greeting = "Good Morning";
        cssStyle.color = "white";
    }
    else if(time >12 && time <19){
        greeting = "Good Afternoon";
        cssStyle.color = "red";
    }
    else{
        greeting = "Good Night";
        cssStyle.color = "yellow";
    }

    const handleClock = () => {
       const Curr = new Date().toLocaleTimeString();
       setCTime(Curr); 
    }
    setInterval(handleClock, 1000);
    return (
        <>
            <div className="container">
                <div className="banner">
                    <div className="content">
                        <h2 style={{color:"white"}}>{cTime}</h2>
                        <h2><span style={cssStyle} >{greeting}</span>, Piu</h2>
                        <h2>{date}</h2>
                        <p>Make More Awesome</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clock;
