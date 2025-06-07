import React,{useState} from "react";
function Ternary(){
    const isLoggedIn=true;
    const isAdmin=true;
    const isSubscribed=false;
    const isOnline=true;
    const temperature=21;
    const [isDark,setDark]=useState(false)
    const [show,setShow]=useState(false)
    return(
        <div >
        {isLoggedIn && <p>Кош келдиниз</p>}
        {isAdmin && <p>Сиз акимшисиз</p>}
        {isSubscribed  && <p>Cиз premium колданушысыз</p> }
        {!isSubscribed && <p>сиз карпайым колданушысыз</p>}
       <p> {isOnline ? "онлайн":"офлайн"}</p>

 { temperature >40 ? "hot": temperature >30 ? "warm" :"cold"}


<button style={{
            backgroundColor:isDark ?"black": "white",
            color:isDark?"white":"black"
           
        }}onClick={()=>setDark(!isDark)} >{ isDark ?'dark mode':'light mode'} </button>

<button 
            onClick={()=>setShow(!show)} >{ show ?'show':'hide'} </button>
            <p style={{
                display:show? "none":"block"
                
            }}
            >dddaarrrkk</p>
        </div>
    )
}
export default Ternary