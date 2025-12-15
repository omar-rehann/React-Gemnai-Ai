import avatar from '../../img/avatar-04.png'
import "./navbar.css"
function Navbar({toggle}){
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <i className="fa-solid fa-bars" onClick={toggle}></i>
                <h4>Gemnai Ai</h4>

            </div>
            <div className="image">
                <img src={avatar} alt="" />

            </div>
        </div>
        </>
    )
}
export default Navbar