// import logo from './logo.svg';
// import Practice from './Components/Practice';
// import ClassPractice from './Components/ClassPractice';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';



// let name = 45+ 56
function App(){
  

  const [mode, setMode] = useState("light"); 
  const [radioBtn, setRadioBtn] = useState("Enable dark mode");
  // const [textColor,setTextColor] = useState('dark')
  const [alert, setAlert] = useState(null)
  // const [greenMode, setGreenMode] = useState("light")
  // const [greenText, setGreenText] = useState("Enable green mode")
  


  

 
  

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 2000);
  }
  
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      setRadioBtn("Disable dark mode")
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled successfully!","success")
      
    }
    else{
      setMode("light")
      setRadioBtn("Enable dark mode")  
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabled successfully!", "success")
      document.title="light mode"
   
     
    }
  }
  return (
    <>
    <BrowserRouter>

   

    <div className="body">

    
    <Navbar TextUtils="TextUtils" mode={mode} toggleMode={toggleMode} radioBtn={radioBtn}  />
    <Alert alert={alert} />
    {/* <TextForm heading="Enter the text below" textTitle="Write your own text" showAlert={showAlert} /> */}
    {/* <About firstTextHeading="Functionality of TextUtils" /> */}
    <Routes>
    
    <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter your text for manipulation."/>} />
    <Route exact path='/about' element = {<About mode={mode}  />} />     
    <Route exact path='/contact' element = {<Contact/>} />
    </Routes>
</div>
 </BrowserRouter>


    </>

  );
}
export default App;
