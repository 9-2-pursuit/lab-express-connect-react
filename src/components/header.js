import { Link } from "react-router-dom"
export default function Header(){
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/logs" className="navbar-item is-size-1 has-text-weight-bold" >
          Captain's Log
        </Link>

      </div>

      <div id="navbarBasicExample" className="navbar-menu" style={{display:"flex"}}>
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/logs/new" className="button is-primary">New Log</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
  )
}
