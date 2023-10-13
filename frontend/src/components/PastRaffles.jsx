import React from "react";

const PastRaffles = (props) => {
    return (
        <>
            {props.pastraffles.map((raffleP) => (
            <div>
                <img src={raffleP.Picture} alt="raffleP" />
            </div>
            ))}
        </>
    )
}

export default PastRaffles;
