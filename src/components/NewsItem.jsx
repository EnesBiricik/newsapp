import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const NewsItem = ({ newsItem}) => {

    if (!newsItem) {
        return <p>Loading...</p>;
    }

    const {slug_name, section, title, abstract, url, byline, created_date,  geo_facet, multimedia} = newsItem

    const getHighQualityImageUrl = (multimedia) => {
        const highQualityImage = multimedia.find(media => media.format === 'mediumThreeByTwo440') 
            || multimedia.find(media => media.format === 'Normal') 
            || multimedia.find(media => media.format === 'large');
        
        return highQualityImage ? highQualityImage : multimedia[0];
    };

    const imageUrl = multimedia && multimedia.length > 0 ? getHighQualityImageUrl(multimedia) : '';

    return (
        <Fragment>
            <div className="whats-item col-lg-6">
                <div className="bg-light rounded">
                    <div className="rounded-top overflow-hidden">
                        <img src={imageUrl.url} className="img-zoomin img-fluid rounded-top w-100" alt={imageUrl.caption} width={imageUrl.width} height={imageUrl.height}/>
                    </div>
                    <div className="d-flex flex-column p-4">
                        <Link to={`/DetailPage/${encodeURIComponent(slug_name)}`} state={{ newsItem }}>{title}</Link>
                        <div className="justify-content-between">
                            <div className='my-1'>
                                <p href="#" className="small text-body">{byline}</p>
                            </div>

                            <p className="text-body d-block"><i className="fas fa-calendar-alt me-1"></i>{created_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewsItem

