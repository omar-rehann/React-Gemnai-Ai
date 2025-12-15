import "./sidebar.css"
function Sidebar({isopen}){
    return(
        <>
       <div className="sidebar" style={{ left: isopen ? "0px" : "-500px" }}>
  

  <div className="item">
  <i className="fa-solid fa-house"></i>
  <h5>Home</h5>
</div>

<div className="item">
  <i className="fa-solid fa-message"></i>
  <h5>Chats</h5>
</div>

<div className="item">
  <i className="fa-solid fa-bell"></i>
  <h5>Notifications</h5>
</div>

<div className="item">
  <i className="fa-solid fa-user"></i>
  <h5>Profile</h5>
</div>

<div className="item">
  <i className="fa-solid fa-bookmark"></i>
  <h5>Saved</h5>
</div>

<div className="item">
  <i className="fa-solid fa-right-from-bracket"></i>
  <h5>Logout</h5>
</div>

</div>

        </>
    )
}
export default Sidebar