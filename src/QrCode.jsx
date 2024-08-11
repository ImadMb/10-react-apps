import QRCode from 'react-qr-code';
import {useState} from 'react'

function QrCode() {

    const [inputValue, setinputValue] = useState("");
    const [qrCodeValue, setQrCodeValue] = useState("");

    function handleCode() {
        setQrCodeValue(inputValue);
    }
    
    return(
        <div>
            <h1 align="center" >QR Code generator</h1>
            <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                <input type="text" name="qr-code" className='qr-code-input' value={inputValue} onChange={(e) => setinputValue(e.target.value)} placeholder="Enter Your Value Here" />
                <button disabled={inputValue.trim() === ""} className='qr-code-btn' onClick={handleCode} >Generate</button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrCodeValue} size={340} bgColor='#fff' />
            </div>

        </div>
    )
}

export default QrCode