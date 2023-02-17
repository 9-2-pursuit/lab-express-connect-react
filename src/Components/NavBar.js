import { useNavigate } from "react-router-dom";

export default function NavBar() {
const navigate = useNavigate()

    return (
        <nav>
            <h2 onClick={() => navigate("/logs")}>All Logs</h2>
        </nav>
    )
}