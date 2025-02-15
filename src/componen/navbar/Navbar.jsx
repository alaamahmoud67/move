import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { context } from '../context/Context';

export default function navbar() {
    // let { getinput }= useContext(context)
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                  <Link className='navbar-brand  fs-3 logo' to="/"><span className='mo'>MOVI</span> <span className='vi'>ZZ</span></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className='nav-link text-white active' to='/'>Home</Link>

                          </li>
                          {/* <li className='nav-item'>
                              <input type="search" onChange={getinput} placeholder='Search' style={{  height: "6vh", borderRadius:"10px" }} />

                          </li> */}
                          <li className="nav-item">
                              
                              <Link className='nav-link text-white' to='Movie'>Movei</Link>

                          </li>
                         
                          <li className="nav-item">
                              <Link className='nav-link text-white' to='Tv'>Tv</Link>
                          </li>
                          
                      </ul>
                      
                  </div>
              </div>
          </nav>
    </div>
  )
}
