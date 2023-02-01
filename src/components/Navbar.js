import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




export default function Navbar(props) {
  return (
   
    <>
        <nav className= "textUtils-navbar navbar navbar-expand-lg bg-primary">
  <div className="container-fluid ">
    <Link className="navbar-brand " to="/">{props.TextUtils}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to="/contact">ContactUs</Link>
        </li>
        
        {/* <form className=" search-btn d-flex" role="search">
        <input className="search-txt form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search</button>
      </form> */}
      <div className={` mx-4 mt-2 form-check form-switch`}  >
  <input className="form-check-input bg-success " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}   />
  <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault" >{props.radioBtn}</label>
</div>
<a className=' developer-name mt-2' target="blank" href="https://github.com/piyushcode56"><b>Piyush Jha</b></a>
  {/* <div className={` mx-4 mt-2 form-check form-switch`}  >
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick={props.toggleMode}  />
  <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault" >{props.radioBtn}</label>
</div> */}


      </ul>
    </div>
  </div>
</nav>
    </>
   
  )
}
Navbar.propTypes = {TextUtils:PropTypes.string.isRequired}

Navbar.defaultProps = {TextUtils:"My name is piyush"}
  


