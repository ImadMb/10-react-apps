import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import { FaShoppingCart } from "react-icons/fa";

function StarSelection(props) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const numberOfStars = props.numberOfStars;
   
    function handleClick(index) {
        setRating(index);
    }

    function handleMouseLeave(index) {
        setHover(rating);
    }

    function handleMouseMove(index){
        setHover(index);
    }

    return (
        <div>
            {
                [...Array(numberOfStars)].map((_, index) => {
                    index++;
                    
                    return <FaStar key={index}  onClick={() => handleClick(index)} onMouseLeave={() => handleMouseLeave(index)} onMouseMove={() => handleMouseMove(index)} className={index <= (hover || rating) ? "star-active" : "star-inactive"} />
                })
            }
        </div>
    );
}

export default StarSelection;
