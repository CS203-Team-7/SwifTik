import React from "react";

const Main = () => {
    return (
        <div className="main">
            <div className="col">
            <h2>Concerts</h2>
            <p>HERE ARE LATEST TAYTAY CONCERTS view all click cool button!</p>
            <button>View All</button>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                {/* <div className="card card5"></div>
                <div className="card card6"></div> */}
            </div>
            
        </div>
    );
}

export default Main;