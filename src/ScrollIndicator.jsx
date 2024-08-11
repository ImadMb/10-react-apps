import { useEffect, useState } from "react"


function ScrollIndicator() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    function handleScroll() {
        
        let scrolled = document.body.scrollTop || document.documentElement.scrollTop;

        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let percentage = scrolled / height * 100;

        setScrollPercentage(percentage);

        

        // console.log(percentage);

        // setScrollPercentage(scrolled / height * 100);

        // console.log(scrolled, height);

        // console.log(scrollPercentage);
        

    }

    useEffect(() => {
        console.log(scrollPercentage);
    }, [scrollPercentage]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => {});
        }
    }, [])

    
    

    return <div style={{position: "relative"}} >
        <div className="scroll-container">
            <div className="scroll-progression" style={{width: `${scrollPercentage}%`}}></div>
        </div>
    </div>
}

export default ScrollIndicator