import React from 'react'

function NavbarPublic(props) {
    const {} = props

    return (
        <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/home">
            Pi Group<span>.</span>
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
        </div>
      </nav>
    )
}

export default NavbarPublic
