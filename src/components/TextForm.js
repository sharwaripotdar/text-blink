import React, { useState } from "react";


export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)

  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)


  }

  const handleClearClick = () => {
    let newText = ('');
    setText(newText)


  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);


  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))


  }

  const handleSentenceCase = () => {
    let newText = text.split('. ').map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join('. ');
    setText(newText);


  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }


  return (
    <>
      <div className="container"  >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 fs-5" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 fs-5" onClick={handleLoClick} >Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 fs-5" onClick={handleCopy} >Copy text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 fs-5" onClick={handleExtraSpaces} >Remove extra space</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 fs-5" onClick={handleSentenceCase} >Sentence Case</button>
              <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1 fs-5" onClick={handleClearClick} >Clear text</button>





      </div>

      <div className="container my-3"  >
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters  </p>
        <p> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <p>{text.split('.').filter((element) => { return element.length !== 0 }).length} Sentence</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
