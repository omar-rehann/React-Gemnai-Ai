import "./styles/all.css"
import Navbar from "./component/Navbar/navbar"
import Response from "./component/boxes/response"
import Sidebar from "./component/sidebar/sidebar"
import { useState } from "react"
function App(){
  const [isopen,setopen]=useState(false);
 
  return(
    <>
    <Navbar  toggle={()=>setopen(!isopen)} />
    <Response/>
    <Sidebar isopen={isopen} />
    </>
  )
}
export default App