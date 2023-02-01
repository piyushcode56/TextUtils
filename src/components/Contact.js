import React from 'react'

function Contact() {
  return (
    <>
    <div className="contact-body">
        <div className="form">
            <form action="" className='contact-form'>
            <h5 className='text-white' ><b>Enter your name</b></h5>
                <input type="text" placeholder='Enter your name'/>
                <h5 className='text-white'><b>Email address</b></h5>
                <input type="email" placeholder='Enter your email address' /> <br />
                <textarea className='mt-2' name="feedback" id="" cols="50" rows="10" placeholder='Write your feedback'></textarea>
                <div className="submit-btn">
                <button className=' mb-2 submit-btn submit' type='submit'>Submit</button>
                </div>
                
           
            </form>
        </div>
        </div>
    </>
  )
}

export default Contact;