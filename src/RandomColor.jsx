import React, { useState, useEffect } from 'react'

function RandomColor() {

    const [colorType, setColorType] = useState("hex");
    const [colorCode, setColorCode] = useState("#FF5050");

    function handleHex() {
        setColorType("hex");
        setColorCode(() =>{
            let red, green, blue;
            red = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);
            
            console.log(colorCode);
            
            return (`#${red.toString(16).toUpperCase()}${green.toString(16).toUpperCase()}${blue.toString(16).toUpperCase()}`);
        });
    } 

    function handleRgb() {
        setColorType("rgb");
        setColorCode(() =>{
            let red, green, blue;
            red = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);

            return (`rgb(${red}, ${green}, ${blue})`);

        });


    }

    useEffect(() => {
        document.querySelector(".color-container").style.backgroundColor = colorCode;
    }, [colorCode]);


    function handleRandomColor() {
        (colorType === "rgb") ? handleRgb() : handleHex();
    }
    

    return (
        <div className="color-container">
            <div className="buttons">
                <button className="hex" onClick={handleHex}>hex color</button>
                <button className="rgb" onClick={handleRgb}>rgb color</button>
                <button className="random" onClick={handleRandomColor} >random color</button>
            </div>
            <h3 className="color-title">{colorType} Color</h3>
            <h1 className="color-code">{colorCode}</h1>
        </div>
    )
}

export default RandomColor
