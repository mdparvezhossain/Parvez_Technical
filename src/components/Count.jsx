import React, { useState } from 'react';

const Count = () => {
    const [count,setCount] = useState(0);
    const handleIncriment = () => {
        setCount(count + 1 );
    }
    const handleDecriment = () => {
        if(count > 0){
            setCount(count - 1 );
        }else{
            
           alert("Please This Number Is Very Rich")
        }
    }
    return (
        <>
            <div className="container mt-5">
                <h1>{count}</h1>
                <div className="d-flex">
                    <button onClick={handleIncriment} className="btn btn-outline-danger">
                        Incriment
                    </button>
                    <button onClick={handleDecriment} className="btn btn-outline-primary">
                        Decriment
                    </button>
                </div>
            </div>
        </>
    )
}

export default Count;
