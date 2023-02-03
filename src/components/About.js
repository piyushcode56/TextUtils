import React,{useState} from 'react';
import picture from './images/picture.PNG';

export default function About(props) {

  let myStyle = {
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"black":"white"
  }




    

    

  return (
    <>
        <div className="about-body text-center container">
        <h2>What is TextUtils?</h2>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b> Manipulate your text</b>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <p>In TextUtils app you can manipulate your text in the way you want. There is some functions you can perform to analyze your text.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <b> Free to use</b>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body"style={myStyle}>
       <p>The TextUtils app is free to use web application. In this you don't require single money to manipulate your text.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <b>Browser Compatiblity</b>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      <p>Majorily all browsers are compatible for app.</p>
        
      </div>
    </div>
  </div>
</div> <br />
           
            
        </div>
    </>
    


   
      
    
  )
}
