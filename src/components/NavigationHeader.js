import React from 'react';
import ReactTooltip from 'react-tooltip';

const NavigationHeader = () => {
    return (
        <>
            <div style={{marginLeft: "0px", marginRight:"0px", width: "100%", fontSize:"1.5em", paddingLeft: "40px", paddingRight: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "94%", height: "60px", backgroundColor: "#295a8e", color: "white", fontWeight: "bold" }}>
                <div><a href="http://trumedianetworks.com/baseball">BASEBALL</a></div>
                <div><a href="http://trumedianetworks.com/football">FOOTBALL</a></div>
                <div><a href="http://trumedianetworks.com/soccer">SOCCER</a></div>
                <div><a href="http://trumedianetworks.com/cricket">CRICKET</a></div>
                <div><a href="http://trumedianetworks.com/basketball">BASKETBALL</a></div>
                <div><a href="http://www.trumedianetworks.com/expected-value-podcast"><i className="fas fa-podcast fa-2x"></i></a></div>
                <div><a href="https://twitter.com/TruMediaSports"><i className="fab fa-twitter fa-2x"></i></a></div>
                <div><a href="mailto:info@trumedianetworks.com"><i className="far fa-envelope fa-2x"></i></a></div>
            </div>
            <div>
                <a href="/"
                    to={`/`}
                    >
                        <img data-tip="Return to player selection" src='../../TruMediaLogo.png' alt='TruMedia Player Selection' />
                        </a>
                        <ReactTooltip />
            </div>
        </>
    )

}

export default NavigationHeader;
