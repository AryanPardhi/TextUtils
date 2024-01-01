import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">TextUtils</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/About">About</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Switch Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
