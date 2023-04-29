import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import'./Navbar.css';

export default function Navbar() {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-info ">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
  </div>
   
  </nav>
    </>
  )
}