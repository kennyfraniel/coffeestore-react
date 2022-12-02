import React from 'react'
import {Link} from 'react-router-dom'
import CartWidgets from './CartWidgets'

export const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link  to='/' className='nav-link'>COFFEE STORE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link to='/category/11' className="nav-link">LIMPIEZA</Link>
                        <Link to='/category/12' className="nav-link" >HERRAMIENTAS</Link>
                        <Link to='/category/13' className="nav-link">MAQUINARIA</Link>
                    </div>
                    <Link to='/Cart'><CartWidgets/></Link>
                </div>
            </div>
            
        </nav>
    </div>
  )
}

export default navbar
