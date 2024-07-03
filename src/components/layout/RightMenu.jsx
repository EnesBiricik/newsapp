import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const RightMenu = ({ news }) => {

    if(!news){
        <p>veri yok!</p>
    }

    return (
        <Fragment>
            <div className="row g-4">
                <div className="col-12">
                    <div className="p-3 rounded border">
                        <div className="input-group w-100 mx-auto d-flex mb-4">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                            <span id="search-icon-1" className="btn btn-primary input-group-text p-3"><i className="fa fa-search text-white"></i></span>
                        </div>
                        <h4 className="mb-4">Popular Categories</h4>
                        <div className="row g-2">
                            <div className="col-12">
                                <a href="#" className="link-hover btn btn-light w-100 rounded text-uppercase text-dark py-3">
                                    Life Style
                                </a>
                            </div>
                        </div>
                        <h4 className="my-4">Stay Connected</h4>
                        <div className="row g-4">
                            <div className="col-12">
                                <a href="#" className="w-100 rounded btn btn-primary d-flex align-items-center p-3 mb-2">
                                    <i className="fab fa-facebook-f btn btn-light btn-square rounded-circle me-3"></i>
                                    <span className="text-white">13,977 Fans</span>
                                </a>
                            </div>
                        </div>
                        <h4 className="my-4">Popular News</h4>
                        {news.map((newsItem, index) => (
                            <div className="row g-4 px-3" key={index}>
                                <div className="col-12">
                                    <div className="row g-4 align-items-center features-item">
                                        <div className="col-4">
                                            <div className="rounded-circle position-relative">
                                                <div className="overflow-hidden rounded-circle">
                                                    <img src={newsItem.multimedia[0].url} className="img-zoomin img-fluid rounded-circle w-100" alt={newsItem.multimedia[0].caption} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="features-content d-flex flex-column">
                                                <p className="text-uppercase mb-2">{newsItem.section}</p>
                                               <Link to={`/DetailPage/${encodeURIComponent(newsItem.slug_name)}`} state={{ newsItem }}>{newsItem.title}</Link>
                                                <small className="text-body d-block"><i className="fas fa-calendar-alt me-1"></i>{newsItem.created_date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RightMenu
