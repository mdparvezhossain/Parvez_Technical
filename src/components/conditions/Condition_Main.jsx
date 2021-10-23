import React from 'react';
import Action_Movies from './Action_Movies';
import LoveMovies from './LoveMovies';

const Condition_Main = () => {

    const favorite = "love story";

    return (
        <>
            {
                (favorite === "love story")? <LoveMovies /> : <Action_Movies />
            }
        </>
    )
}

export default Condition_Main;
