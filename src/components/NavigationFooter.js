import React from 'react';

const NavigationFooter = () => {
    return (
    <div style={{position: "fixed", bottom: "0px", fontSize:"1.5em", paddingLeft: "20px", paddingRight: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "60px", backgroundColor: "#295a8e", color: "white", fontWeight: "bold" }}>
        <div>Mary Lark</div>
        <div>925-866-1111</div>
        <div><a style={{color:"white", textDecoration:"none"}} href="mailto:mary@marylark.com">mary@marylark.com</a></div>
        <div><a style={{color:"white", textDecoration:"none"}} href="https://www.github.com/marysue">github</a></div>
        <div><a style={{color:"white", textDecoration:"none"}} href="https://marylark.com">portfolio</a></div>
    </div>
    )

}

export default NavigationFooter;
