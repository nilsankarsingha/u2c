import React from 'react'

const NavHeader = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" ><h1><strong>Life Is A Wish</strong></h1></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Utility</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default NavHeader
