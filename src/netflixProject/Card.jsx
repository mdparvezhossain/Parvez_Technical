import React from 'react'
import './netflix.css';

const Card = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img 
                        className="card_img" 
                        src={props.imgsrc} 
                        alt="Card Image" 
                    />
                    <div className="card_info">
                        <span className="card_catagory">{props.catagory}</span>
                        <h3 className="card_title">{props.name}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
