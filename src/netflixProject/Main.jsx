import React from 'react'
import Card from './Card';
import MoviesData from './MovieArrData';

const Main = () => {
    return (
        <>
            <h1 className="heading_style">List of Top {2+3} Netflix Series in 2021</h1>
            
            {
                MoviesData.map((val,index) => {
                    return(
                        <Card
                            key={index} 
                            imgsrc={val.imgscr}
                            catagory={val.catagory}
                            name={val.name}
                            link={val.links}
                        />
                    )
                })
            }
        </>
    )
}

export default Main;
