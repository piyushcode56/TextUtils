import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText,] = useState("");
 
    // text="Enter text here part 2" wrong way to update the text
    // setText("Enter the text here part 2");

    const convertLowercase = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
        console.log(newText)
        props.showAlert("Converted to lowercase","success")
       
    }


    const convertUppercase = () =>{
        console.log("You click on convertUppercase button");
        let newText = text.toUpperCase();
        setText(newText); 
        console.log(newText);
        props.showAlert("Converted to uppercase","success")
        
    }

    
    const clearText = ()=>{
        let newText = " ";
        setText(newText)
        props.showAlert("Your textbox is cleared","success")

    }
    const removeSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All the extra spaces has been removed","success")


    }
    const copyText = ()=>{
        let text = document.getElementById("myText")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text has been copied to your clipboard","success")

    }

    const onChange = (event)=>{
        console.log("onChange")
        setText(event.target.value)
    }
    return (
    <div>
    <>
   <h2 className='text-center mt-3'>{props.heading}</h2>

  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label" >{props.textTitle}</label> */}
  <textarea className="Text-area form-control container text-white bg-dark" id="myText"  value={text} onChange={onChange}rows="12" ></textarea>
  <div className="container">
  
  <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick={convertUppercase}>Convert to uppercase</button>
  <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick={convertLowercase}>Convert to lowercase</button>
  <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick={clearText}>Clear text</button>
  <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick={removeSpaces}>Remove extra spaces</button>
  <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick={copyText}>Copy text</button>
  </div>




<div className="container">
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} alphabets</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} in this minute you can read your text </p>
    <h2>Your text preview</h2>
    <p>{text.length>0?text:"Enter your text above to preview it here."}</p>
</div>
    
    </>
      
    </div>
  )
}
