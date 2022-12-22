import { Link, useNavigate } from "react-router-dom"

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/">Captain's Log</Link>
      <button onClick={() => navigate(`/logs/new`)}>New Log</button>
    </div>
  )
}
