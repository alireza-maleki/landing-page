import React, { useState, useEffect } from 'react';
import classes from "./Header.module.css";


const Header = () => {

  const [show, setShow] = useState(false);

  const controlNavbar = () => {

    if (window.scrollY > 150) {
      setShow(true)
    } else {
      setShow(false)
    }

  }

  useEffect(() => {

    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }

  }, [])  

  return (

    <header className={classes.header}>

      <nav className={ ` navbar navbar-expand-lg fixed-top ${classes.responsive} ${show && classes.navbarshow} ` }>
        <div className="container">
          <a className="navbar-brand" href="#">Ali-Maleki</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">صفحه اصلی</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  محصولات
                </a>

                <ul className="dropdown-menu" >
                  <li><a className="dropdown-item" href="#">لورم ایپسوم</a></li>
                  <li><a className="dropdown-item" href="#">لورم ایپسوم متن</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">لورم ایپسوم متن ساختگی</a></li>
                </ul>

              </li>
              <li className="nav-item">
                <a className="nav-link ">درباره ما</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">تماس با ما</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </header>

  )
}

export default Header;