
function Modal({header, body, footer, onChange}) {

    return(
        <div className="modal" >
            <span onClick={onChange} style={{position:"absolute", top: "5%", right: "5%", fontSize:"1.5rem", cursor:"pointer"} } >X</span>
            <div className="modal-header">
                {header}
            </div>

            <div className="modal-body">
                {body}
            </div>

            <div className="modal-footer">
                {footer}
            </div>

        </div>
    )
}

export default Modal