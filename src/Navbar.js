import React,{useEffect,useState} from 'react'
import logo from './logo/netflix_logo.png'
import "./Navbar.css";
function Navbar() {

    const [show, setshow] = useState(false)
  useEffect(() => {
      
     window.addEventListener("scroll",()=>{
         if(window.scrollY>150){
           setshow(true)
         }else setshow(false);
         
     });

     return()=>{
         window.removeEventListener("scroll");
     }

  }, [])
 
    return (
        <div className={ `nav ${show && "nav_black"}`  } >
           <img className="nav_logo" src = {logo} alt =" Netflix Logo"/>
        </div>
    )
}

export default Navbar
