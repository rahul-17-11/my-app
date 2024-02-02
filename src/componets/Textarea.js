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
    const clickOnClear = ()=>{
        setText("")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState("Some reference text")
  return (
        <>
        <div className="mb-3 my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#233240':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myText" rows="10"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleOnClick}>Click Here for upper case</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clickOnHandle}>Click here for lower case</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clickOnClear}>Clear</button>
        </div>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Summary of the above text box</h2>
        <p>{text.split(" ").length} words and {text.length} characters in the above text box.</p>
        <p>You will require aprroximately {0.008* text.split(" ").length} minutes to read this text.</p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>
        </>
  )
}

