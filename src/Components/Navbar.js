import { useNavigate } from "react-router-dom"



export default function Navbar(){

    const navigate=useNavigate()
    return (
        <nav>
            <h1 className="space" onClick={()=>navigate("/logs")}>Captain's Log</h1>
            <div className="nav-btn">
                <button onClick={()=>navigate("/logs/new")}>New Log</button>
                </div>
            </nav>
    )
}