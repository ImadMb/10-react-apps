import TreeList from "./TreeList"
import {useState} from 'react'

function TreeItem({list}) {

    const [showChildren, setShowChildren] = useState(false);

    function handleShow() {
        setShowChildren(!showChildren);
    }
    
    return (
        <div >
            <div style={{display : "flex", gap : "20px", marginBottom : "20px"}} >
            <li>{list.label} </li>
            {
                list && list.children ? <span className="tree-indicator" onClick={handleShow} >{showChildren ? "-" : "+" }</span> : null 
            }
            </div>
            {
                list.children && list.children.length && showChildren ? <TreeList data={list.children} /> : null
            }
        
        </div>
    )
}

export default TreeItem