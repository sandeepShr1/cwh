import React, { useState } from 'react';


const TextForm = (props) => {
    const handleUpClick = (e) => {
        e.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = (e) => {
        e.preventDefault();
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = (e) => {
        e.preventDefault();
        let newText = "";
        setText(newText);
    };


    const handelOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = (e) => {
        e.preventDefault();
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = (e) => {
        e.preventDefault();
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const [text, setText] = useState("");

    return (
        <div>
            <form className="container my-4">
                <div className="mb-3">
                    <label id="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handelOnChange} id="myText" rows="6" ></textarea>
                </div>
                <button className="btn btn-primary mx-2"
                    onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-2"
                    onClick={handleLowClick} >Convert to lowercase</button>
                <button className="btn btn-primary mx-2"
                    onClick={handleClearClick} >Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove extra spaces</button>

            </form>

            <div className="container my-3">
                <h2>Your text summary:</h2>
                <p>{text.split(" ").length} words || {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
};

export default TextForm;
