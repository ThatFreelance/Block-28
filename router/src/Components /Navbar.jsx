import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
    <Link to="/"><h1 style={{color:"black"}}>Home</h1></Link>
    <Link to="/Blue"><h1 style={{color:"blue"}}>Blue</h1></Link>
    <Link to="/Red"><h1 style={{color:"red"}}>Red</h1></Link>
  </div>
  )
}
