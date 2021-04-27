import React from 'react';

const NavigationFooter = () => {
    return (
     <div style={{
        //  position: "fixed",
         bottom: "0px",
         fontSize:"1.5em",
         paddingLeft: "40px",
         paddingRight: "40px",
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
        //  width: "95%",
         height: "60px",
         backgroundColor: "#295a8e",
         color: "white",
         fontWeight: "bold" }}>

            <div>Mary Lark</div>
            <div>925-866-1111</div>
            <div><a href="mailto:mary@marylark.com">mary@marylark.com</a></div>
            <div><a href="https://www.github.com/marysue">github</a></div>
            <div><a href="https://marylark.com">portfolio</a></div>
    </div>
    )

}

export default NavigationFooter;
