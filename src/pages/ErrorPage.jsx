import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <Fragment>
        <div className="container-fluid py-5">
            <div className="container py-5 text-center">
                <ol className="breadcrumb justify-content-center mb-5">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-dark">404</li>
                </ol>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <Link to="/" className='btn link-hover border border-primary rounded-pill py-3 px-5'>Go Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}


export default ErrorPage