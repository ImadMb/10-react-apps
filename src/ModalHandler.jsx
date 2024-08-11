import { useState } from "react"
import Modal from "./Modal"


function ModalHandler() {

    const [showModal, setShowModal] = useState(false);

    const header = "This is the header"
    const body = "this is the body of the modal that i created using react"
    const footer = "this is the footer"

    function handleToggleShowModal() {
        setShowModal(!showModal);
    }

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <button className="qr-code-btn" onClick={handleToggleShowModal} >Toggle Modal</button>
            { showModal && <Modal header={header} body={body} footer={footer} onChange={handleToggleShowModal} /> }
        </div>
    )
}

export default ModalHandler