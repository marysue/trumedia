import React from 'react';

const NavigationHeader = () => {
    return (
    <div style={{fontSize:"1.5em", paddingLeft: "20px", paddingRight: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "60px", backgroundColor: "#295a8e", color: "white", fontWeight: "bold" }}>
        <div>BASEBALL</div>
        <div>FOOTBALL</div>
        <div>SOCCER</div>
        <div>CRICKET</div>
        <div>BASKETBALL</div>
        <div><i className="fas fa-podcast fa-2x"></i></div>
        <div><i className="fab fa-twitter fa-2x"></i></div>
        <div><i className="far fa-envelope fa-2x"></i></div>
    </div>
    )

}

export default NavigationHeader;
