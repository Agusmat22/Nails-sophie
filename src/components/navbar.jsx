import React from 'react'

import './css/navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              <a className="nav-link active" aria-current="page" href="#main">Inicio</a>
              <a className="nav-link " href="#model">Modelos</a>
              <a className="nav-link " href="#colour">Colores</a>

            </div>
          </div>
        </div>
    </nav>
  )
}
