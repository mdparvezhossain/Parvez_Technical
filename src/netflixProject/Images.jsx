import React from 'react'

const Images = (props) => {
    return (
        <img 
            className="card_img" 
            src={props.imgsrc} 
            alt="Card Image" 
        />
    )
}

export default Images;
