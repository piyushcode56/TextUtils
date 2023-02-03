import React from 'react'

function Contact() {
  return (
    <>
    <form className='contact-form container text-white'>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your name'/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
    <input type="password" className="form-control" placeholder='Enter your email address' id="exampleInputPassword1"/>
  </div>
  <textarea name="" className='form-control mb-3' id="" cols="30" rows="10" placeholder='Write your feedback'></textarea>
  
  <button type="submit" className="btn btn-success mb-2">Submit</button>
</form>
  
    </>
  )
}

export default Contact;