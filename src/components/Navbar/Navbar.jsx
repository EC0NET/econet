import React from 'react'
import './Navbar.css';
import tree from '../../assets/digitaltree.png';

const Navbar = () => {
  return (
    <section id="navbar">
        <div className='icon'>
            <img className='tree' src={tree}></img>
            <h1>Econet</h1>
        </div>
        <div className='buttons'>
            <h2>Volunteers</h2>
            <h2>Organizations</h2>
            <h2>Support</h2>
        </div>
    </section>
  )
}

export default Navbar
