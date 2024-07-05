import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark footer py-5">
                <div className="container py-5">
                    <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div className="row g-4">
                            <a href="#" className="d-flex flex-column flex-wrap">
                                <p className="text-white mb-0 display-6">Newsers</p>
                                <small className="text-light" style={{ letterSpacing: '11px', lineHeight: 0 }}>Newspaper</small>
                            </a>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 col-xl-3">
                            <div className="footer-item-1">
                                <h4 className="mb-4 text-white">Get In Touch</h4>
                                <p className="text-secondary line-h">Address: <span className="text-white">123 Streat, New York</span></p>
                                <p>Created With New York Times API</p>
                                <span className="text-light">
                                    <a target='_blank' href="https://developer.nytimes.com/">
                                        <img src={`../assets/img/poweredby_nytimes_200c.png`} />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="d-flex flex-column text-start footer-item-3">
                                <h4 className="mb-4 text-white">Categories</h4>
                                <a className="btn-link text-white" href=""><i className="fas fa-angle-right text-white me-2"></i> Sports</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright bg-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-dark">This Site is a product of <a href="https://enesbiricik.com/"><i className="fas fa-copyright text-dark text-light me-2"></i>enesbiricik.com</a>, All right reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-primary border-2 border-white rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>
        </>
    )
}

export default Footer