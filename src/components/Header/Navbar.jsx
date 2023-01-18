import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/images/logo.png"
import { GoSearch } from 'react-icons/go'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [click, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const clicked = () => {
    setClicked(current => !current);
  }

  const handleScroll = () => {
    const offset = window.scrollY;
     if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })

  return (
    <>
      <div className={`navbar ${scrolled ? 'sticky' : ''}`} >
        <div className="navbar-wrap">

          <div className="left">
            <img src={logo} alt="" />
          </div>
          <div className="right navbar-big">

            <span className="item">
              <Link to="/" >Home</Link>
            </span>
            <span className="item">
              Language
            </span>
            <span className="item">
              Genre
            </span>
            <span className="item">
              Account
            </span>
            <span className="item">
              <GoSearch />
            </span>
          </div>
          <div className='bar' onClick={clicked}>
            <span className='bar_btn'> {!click ? <FaBars /> : <FaTimes />}</span>
          </div>
        </div>
        
        <div className="right navbar-small" style={{ display: click ? '' : 'none' }}>
          <div className="navbar-view">
            <div className="navbar-view-wrap">
              <span className="item" onClick={clicked}>
                Home
              </span>
              <span className="item" onClick={clicked}>
                Language
              </span>
              <span className="item" onClick={clicked}>
                Genre
              </span>
              <span className="item" onClick={clicked}>
                Account
              </span>
              <span className="item" onClick={clicked}>
                <GoSearch />
              </span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar