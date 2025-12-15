import { useEffect, useRef, useState } from "react"
import avatartwo from ".././../img/avatar-02.png"
import "./response.css"
function Response(){
  const [data,setdata]=useState('')
     const focusPoint = useRef(null);
    //  controll in cards
    const [active,setactive]=useState("A");
   
     // action in input
     const [value,setvalue]=useState('');

    // change between cards 
     function hanldecards(){
      setactive("B");
      let timer=setTimeout(() => {
        setactive("C");
        
      }, 5000);
      return ()=> clearTimeout(timer);
    }
useEffect(() => {
  focusPoint.current.focus();

  if (!value) return;

  const api_key = "AIzaSyCadUKnGnfYzz3WT4Ej0WpYD3vVTrV1uQ8";
  fetch(
`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${api_key}`,{
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: value }],
          },
        ],
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setdata(data); 
      console.log(data);
    })
    .catch((err) => console.error(err));
}, [value]);
   return (
  <>
    <div className="parent">

      

      {/* Section A */}
      {active === "A" && (
        <>
         <div className="start">
        <h3>Hello, There</h3>
        <h1>How Can I Help You Today ?</h1>
      </div>
      <div className="A">
         

          <div className="box">
            <div className="text">
              <h3>Smart Search</h3>
              <p>Find anything with AI-powered search.</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="box">
            <div className="text">
              <h3>AI Assistant</h3>
              <p>Your personal smart helper.</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-robot"></i>
            </div>
          </div>

          <div className="box">
            <div className="text">
              <h3>Analytics</h3>
              <p>Deep insights and data monitoring.</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
          </div>

          <div className="box">
            <div className="text">
              <h3>Security</h3>
              <p>Advanced protection tools.</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
          </div>

        </div>
        </>
        
      )}

      {/* Section B */}
      {active === "B" && (
        <>
        <div className="text">
          <h4>{value}</h4>

        </div>
            <div className="animation">
        <div className="image">
          <img src={avatartwo} alt="" />
        </div>
        <div className="all">
          <div className="progress">
            <div></div>
          </div>

          <div className="progress">
            <div></div>
          </div>

          <div className="progress">
            <div></div>
          </div>

        </div>
          
        </div>
        </>
     
      )}
      {/* Section C */}
      {active ==="C" &&(
        <>
        
        <>
        <div className="response">
          <div className="text">
          <h3>{value}</h3>
        </div>
        <div className="messagefromai">
          <h4>{data}</h4>
        </div>

        </div>
        
        </>
      

        </>
      )}
      {/* Prompt Input */}
      <div className="prompt">
        <input
          ref={focusPoint}
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && hanldecards()}
          type="text"
          placeholder="Prompt Here"
        />

        {value.length > 0 && (
          <i
            className="fa-solid fa-paper-plane"
            onClick={hanldecards}
          ></i>
        )}
      </div>

    </div>
  </>
);
}
export default Response