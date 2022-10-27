import React from 'react'
import {Link} from 'react-router-dom'
import CartWidgets from './CartWidgets'

export const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to='/'>
                    <img src='./coffeeStore.png'  alt="logotipo" width ='150'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link">INICIO</Link>
                        <Link className="nav-link" >PRODUCTOS</Link>
                        <Link className="nav-link">NOSOTROS</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbar
