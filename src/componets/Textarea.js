import React, { useState } from 'react'

export default function Textarea(props) {
    const handleOnClick = ()=>{
        let uppertext = text.toUpperCase();
        setText(uppertext)
    }
    const clickOnHandle = ()=>{
        let lowertext = text.toLowerCase();
        setText(lowertext)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState("Some reference text")
  return (
        <>
        <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="10"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleOnClick}>Click Here for upper case</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clickOnHandle}>Click here for lower case</button>
        </div>
        <div className='container '>
        <h2>Summary of the above text box</h2>
        <p>{text.split(" ").length} words and {text.length} characters in the above text box.</p>
        <p>You will require aprroximately {0.008* text.split(" ").length} minutes to read this text.</p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>
        </>
  )
}
