import React, { useState } from 'react'

function Textbody() {
    const change =  (elem)=>{
        setText(elem.target.value)
    }
    const upperCase =  ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowerCase =  ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const [text , setText] = useState("Enter the text");
    return (
        <>
            <div className="mt-5 mx-5">
                <h3 className='mb-6'>Enter the text here</h3>
                <textarea className="form-control mt-3" value={text} onChange={change} id="exampleFormControlTextarea1" rows="7"></textarea>
                <button type="button" className="btn btn-primary mt-4" onClick={upperCase}>To Uppercase</button>
                <button type="button" className="btn btn-secondary mt-4 mx-2" onClick={lowerCase}>To Lowercase</button>
            </div>
        </>
    )
}

export default Textbody
