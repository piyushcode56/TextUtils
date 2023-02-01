import React,{useState} from 'react';
import picture from './images/picture.PNG';

export default function About(props) {




    

    

  return (
    <>
        <div className="about-body text-center ">
        <h2>What is TextUtils?</h2>
            <h6>TextUtils website is used to manipulate your text in the way you want. </h6>
            <h6><b>1.You can convert your text to uppercase</b></h6>
            <h6><b>2.You can convert your text to lowercase</b></h6>
            <h6><b>3.You can clear your text from textare</b></h6>
            <h6><b>4.You can remove extra spaces from paragraph</b></h6>
            <h6><b>5.You can copy your text in clipboard</b></h6>
            <div className="developer-info">
            <img className='developer-picture' src={picture} alt="" />
            <h6>Made by Piyush Jha</h6>
            </div>
            
        </div>
    </>
    


   
      
    
  )
}
