import { useState } from 'react'
import Accordion from './Accordion.jsx'

function AccordionExercice() {

    const [toggleMulti, setToggleMulti] = useState(true);

    function handleToggle() {
        console.log(toggleMulti);
        setToggleMulti(!toggleMulti);
    }

    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus nesciunt commodi nam! Reprehenderit facilis iure enim a deleniti hic harum iusto corporis in quis. Sequi minima hic perferendis exercitationem!"

return (
    <>
       <Accordion title="First Accordion" desc={desc} toggle={toggleMulti}  />
       <Accordion title="Second Accordion" desc={desc} toggle={toggleMulti} />
       <Accordion title="Third Accordion" desc={desc} toggle={toggleMulti}  />

        <button className='accordion-btn' onClick={handleToggle} >Toggle multi-accordion</button>
    </>
)
}

export default AccordionExercice
