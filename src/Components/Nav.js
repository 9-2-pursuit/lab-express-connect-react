import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <h1>
            <Link to="/logs">Captain's Logs</Link>
          </h1>
          <button>
            <Link to="/logs/new">New Logs</Link>
          </button>
          
        </nav>
      );
}

export default Nav
