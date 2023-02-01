import React from 'react'

function Alert(props) {

  
  return (
  
        
           props.alert &&  <div className="alert alert-primary alert-dismissible fade show container " role="alert">
        <strong >{props.alert.type} </strong>: {props.alert.msg}
  
</div>
        
    
  )
}

export default Alert