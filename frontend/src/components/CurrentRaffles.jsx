import React from "react";

const CurrentRaffles = (props) => {
    return (
        <>
            {props.currentraffles.map((raffleC) => (
            <div>
                <img src={raffleC.Picture} alt="raffleC" />
            </div>
            ))}
        </>
    )
}

export default CurrentRaffles;
