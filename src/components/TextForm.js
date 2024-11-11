import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","succeed");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "succeed");
    }
    const handleClear = () => {
        // console.log("Uppercase was clicked");
        let newText=" ";
        setText(newText);
        props.showAlert("Clear text!","succeed");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter text here');
    // setText("new text");
    // text="new text";
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>

            <div className="mb-3" >
                <textarea className="form-control" value={text}   onChange={handleOnChange} id="myBox" rows="3" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743',  height: '150px', width: '100%'}}></textarea>
            </div>

            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>

            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>

            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        </div>

        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>

        <h3>Your summery is here.</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length } characters </p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text:"Nothing to Preview!"}</p>

        </div>

        </>
    )
}
