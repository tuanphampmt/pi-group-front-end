import React from "react";
import PropTypes from "prop-types";

function NavbarComponent(props) {
  const {} = props;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
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
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">
                <span>Trang chủ</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">
                <span>Giới thiệu</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#chapter-section" className="nav-link">
                <span>Khoá học của Pi</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonial-section" className="nav-link">
                <span>Đánh giá</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects-section" className="nav-link">
                <span>Sách của Pi</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#author-section" className="nav-link">
                <span>Author</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Liên hệ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

NavbarComponent.propTypes = {};

export default NavbarComponent;
