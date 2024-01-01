import React, { useState } from 'react'
import {showAlertFunc} from '../App'
function Textbody(props) {
    const showAlert = showAlertFunc(props.setAlert);
    const clear = () => {
        setText("")
    }
    const copy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                showAlert("Copied to clipBoard:", "info");
            })
            .catch((err) => {
                console.error('Unable to copy text to clipboard', err);
            });
    }
    
    const change = (elem) => {
        setText(elem.target.value)
    }
    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const [text, setText] = useState("Enter the text");
    return (
        <>
            <div className="mt-3 mx-5">
                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className={`mb-6 text-${props.mode==='dark'?'light':'dark'}`}>Enter the text here</h3>
                    <div className="topbtn">
                        <button type="button" onClick={clear} className="btn btn-outline-danger mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg></button>
                        <button type="button" onClick={copy} className="btn btn-outline-info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-plus-fill" viewBox="0 0 16 16">
                            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm4.5 6V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5a.5.5 0 0 1 1 0" />
                        </svg></button>
                    </div>
                </div>
                <textarea className="form-control mt-3" value={text} onChange={change} id="exampleFormControlTextarea1" rows="7"></textarea>
                <button type="button" className="btn btn-primary mt-4" onClick={upperCase}>To Uppercase</button>
                <button type="button" className="btn btn-secondary mt-4 mx-2" onClick={lowerCase}>To Lowercase</button>
            </div>
            <div className="textDesc mt-4 mx-5">
                <h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>Text Description</h3>
                <p className={`text-${props.mode==='dark'?'danger':'success'} fs-5`}>Words {text.split(" ").length} & Characters including Spaces {text.length}</p>
            </div>
            <div className="preview mt-4 mx-5">
                <h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>Preview</h3>
                <div className={`contain bg-${props.mode==='dark'?'light':'dark'} border border-white rounded-end rounded-start d-flex align-items-center px-3`}>
                    <p className={`text-${props.mode==='light'?'light':'dark'} mt-2`}>{text.length >0 ? text :"Enter text to preview"}</p>
                </div>
            </div>
        </>
    )
}

export default Textbody
