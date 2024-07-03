import React, { Fragment } from 'react'
import RightMenu from '../components/layout/RightMenu'
import { useLocation, useParams } from 'react-router-dom'

export const DetailPage = () => {

    
    const {title} = useParams();
    const location = useLocation();
    const {newsItem} = location.state;
    
    console.log("detail: ",newsItem)

    const getHighQualityImageUrl = (multimedia) => {
        const highQualityImage = multimedia.find(media => media.format === 'mediumThreeByTwo440') 
            || multimedia.find(media => media.format === 'Normal') 
            || multimedia.find(media => media.format === 'large');
        
        return highQualityImage ? highQualityImage : newsItem.multimedia[0];
    };

    const img = newsItem.multimedia && newsItem.multimedia.length > 0 ? getHighQualityImageUrl(newsItem.multimedia) : '';

  return (
    <Fragment>
      <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <p href="#" className="h1 display-5">{newsItem.title}</p>
                        </div>
                        <div className="position-relative rounded overflow-hidden mb-3">
                            <img src={img.url} className="img-zoomin img-fluid rounded w-100" alt=""/>
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href="#" className="text-dark link-hover me-3"><i className="fa fa-clock"></i> 06 minute read</a>
                            <a href="#" className="text-dark link-hover me-3"><i className="fa fa-eye"></i> 3.5k Views</a>
                            <a href="#" className="text-dark link-hover me-3"><i className="fa fa-comment-dots"></i> 05 Comment</a>
                        </div>
                        <p className="my-4">
                            {newsItem.abstract}
                        </p>
                        <p className="my-4">
                            <a target='_blank' href={newsItem.url}>Haber detayları için tıklayınız...</a>
                        </p>
                        <div className="bg-light rounded p-4">
                            <h4 className="mb-4">Comments</h4>
                            <div className="p-4 bg-white rounded mb-4">
                                <div className="row g-4">
                                    <div className="col-3">
                                        <img src="/assets/img/footer-4.jpg" className="img-fluid rounded-circle w-100" alt=""/>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex justify-content-between">
                                            <h5>James Boreego</h5>
                                            <a href="#" className="link-hover text-body fs-6"><i className="fas fa-long-arrow-alt-right me-1"></i> Reply</a>
                                        </div>
                                        <small className="text-body d-block mb-3"><i className="fas fa-calendar-alt me-1"></i> Dec 9, 2024</small>
                                        <p className="mb-0">Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light rounded p-4 my-4">
                            <h4 className="mb-4">Leave A Comment</h4>
                            <form action="#">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control py-3" placeholder="Full Name"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" className="form-control py-3" placeholder="Email Address"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control" name="textarea" id="" cols="30" rows="7" placeholder="Write Your Comment Here"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="form-control btn btn-primary py-3" type="button">Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <RightMenu news={[newsItem]} />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}


export default DetailPage