import React  from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
  let myStyle = {
    color: props.mode === 'dark'? 'white' : '#042743',
    backgroundColor:  props.mode === 'dark'? 'rgb(36 74 104' : 'white',
    border: '1px solid ',
    borderColor: props.mode === 'dark'? 'white' : 'black'
  }

  return (
    <div className="container" style={{color: props.mode === 'dark'? 'white' : '#042743',}}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne"aria-expanded="true" aria-controls="collapseOne" >
                Analyze Your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Texutils gives you a way to analyz your text quikly and efficiently. Be it word count, character count or .
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={myStyle}>
                Textutils is a free character counter tool that provides instant charater count and statistics for a given text. Texutils reports the number of words and character. Thus it is suitable for writting text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                Browser compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any browser such as chrome, Firefox, Intel Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essays, etc.
               </div>
            </div>
           </div>
       </div>
       {/* <div className="container">
       <button  type="button" className="btn btn-primary my-2" onClick={toggleStyle}>{btntext}</button> */}
       {/* </div> */}
    </div>
    // maharani 2
  )
}
