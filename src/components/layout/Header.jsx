import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="container-fluid sticky-top px-0">
        <div className="container-fluid topbar bg-dark d-none d-lg-block">
            <div className="container px-0">
                <div className="topbar-top d-flex justify-content-between flex-lg-wrap">
                    <div className="top-info flex-grow-0">
                        <span className="rounded-circle btn-sm-square bg-primary me-2">
                            <i className="fas fa-bolt text-white"></i>
                        </span>
                        <div className="pe-2 me-3 border-end border-white d-flex align-items-center">
                            <p className="mb-0 text-white fs-6 fw-normal">Trending</p>
                        </div>
                        <div className="overflow-hidden" style={{width: '735px'}}>
                            <div id="note" className="ps-2">
                                <img src="img/features-fashion.jpg" className="img-fluid rounded-circle border border-3 border-primary me-2" style={{width: '30px', height: '30px'}} alt="" />
                                <a href="#"><p className="text-white mb-0 link-hover">Newsan unknown printer took a galley of type andscrambled Newsan.</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="top-link flex-lg-wrap">
                        <i className="fas fa-calendar-alt text-white border-end border-secondary pe-2 me-2"> <span className="text-body">Tuesday, Sep 12, 2024</span></i>
                        <div className="d-flex icon">
                            <p className="mb-0 text-white me-2">Follow Us:</p>
                            <a href="" className="me-2"><i className="fab fa-facebook-f text-body link-hover"></i></a>
                            <a href="" className="me-2"><i className="fab fa-twitter text-body link-hover"></i></a>
                            <a href="" className="me-2"><i className="fab fa-instagram text-body link-hover"></i></a>
                            <a href="" className="me-2"><i className="fab fa-youtube text-body link-hover"></i></a>
                            <a href="" className="me-2"><i className="fab fa-linkedin-in text-body link-hover"></i></a>
                            <a href="" className="me-2"><i className="fab fa-skype text-body link-hover"></i></a>
                            <a href="" className=""><i className="fab fa-pinterest-p text-body link-hover"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-light">
            <div className="container px-0">
                <nav className="navbar navbar-light navbar-expand-xl">
                    <a href="index.html" className="navbar-brand mt-3">
                        <p className="text-primary display-6 mb-2" style={{ lineHeight: '0' }}>Newsers</p>
                        <small className="text-body fw-normal" style={{ letterSpacing: '12px' }}>Nespaper</small>
                    </a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
                        <div className="navbar-nav mx-auto border-top">
                            <Link to="/" className='nav-item nav-link active'>Home</Link>
                            <Link to="/DetailPage" className='nav-item nav-link'>Detail Page</Link>
                            <Link to="ErrorPage" className='nav-item nav-link'>Error Page</Link>
                            <Link to="ContactPage" className='nav-item nav-link'>Contact Us</Link>
                        </div>
                        <div className="d-flex flex-nowrap border-top pt-3 pt-xl-0">
                            <div className="d-flex">
                                <img src="img/weather-icon.png" className="img-fluid w-100 me-2" alt="" />
                                <div className="d-flex align-items-center">
                                    <strong className="fs-4 text-secondary">31°C</strong>
                                    <div className="d-flex flex-column ms-2" style={{width: '150px'}}>
                                        <span className="text-body">NEW YORK,</span>
                                        <small>Mon. 10 jun 2024</small>
                                    </div>
                                </div>
                            </div>
                            <button className="btn-search btn border border-primary btn-md-square rounded-circle bg-white my-auto" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}
export default Header;
