import React, { useState, useEffect } from "react"


function Accordion(props) {


    const handleAccordion = (e) => {

        const accordions = document.querySelectorAll(".accordion-container");
        const accordionDescs = document.querySelectorAll(".accordion-desc-container");

        let toggleMulti = props.toggle;
        console.log("acc's toggle multi: "+toggleMulti);

        if(toggleMulti) {
            accordionDescs.forEach((accordionDesc) => {
            accordionDesc.style.display = "none";
        })
        }

        const targetDesc = e.target.nextElementSibling;
        targetDesc.style.display = (targetDesc.style.display === "none") ? "block" : "none";
        
    }

    useEffect(() => {
        const accordionDescs = document.querySelectorAll(".accordion-desc-container");
        accordionDescs.forEach((accordionDesc) => {
            accordionDesc.style.display = "none";
        })
    }, []);

    return(
        <div className="accordion-container" >
            <h3 className="accordion-title" onClick={(e) => handleAccordion(e)} >{props.title}  </h3>
            { <div className="accordion-desc-container">
                <p className="accordion-desc" >{props.desc} </p>
            </div>}
        </div>
    )
}

export default Accordion