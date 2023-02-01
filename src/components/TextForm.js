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
<div className="TextBox mb-3">
  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label" >{props.textTitle}</label> */}
  <textarea className="Text-area form-control text-white bg-dark" id="myText" value={text} onChange={onChange}rows="12" ></textarea>
  <button className="convert-buttons mx-3 mt-2" onClick={convertUppercase}>Convert to uppercase</button>
  <button className="convert-buttons mt-2 mx-2" onClick={convertLowercase}  >Convert to lowercase</button>
  <button className="convert-buttons mt-2 mx-2" onClick={clearText}>Clear text</button>
  <button className="convert-buttons mt-2 mx-2" onClick={removeSpaces}>Remove extra spaces</button>
  <button className="convert-buttons mt-2 mx-2" onClick={copyText}>Copy text</button>


</div>

<div className="text-summary">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} alphabets</p>
    <p>{0.008 * text.split(" ").length} in this minute you can read your text </p>
    <h2>Your text preview</h2>
    <p>{text.length>0?text:"Enter your text above to preview it here."}</p>
</div>
    
    </>
      
    </div>
  )
}
