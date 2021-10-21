import React from 'react'
import Images from './Images';
import MoviesTitle from './MoviesTitle';
import './netflix.css';

const Card = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images imgsrc={props.imgsrc} />
                    <div className="card_info">
                        <span className="card_catagory">{props.catagory}</span>
                        <MoviesTitle name={props.name} />
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
