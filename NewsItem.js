import React from 'react'
import unavailable from '../unavailable.gif'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: "flex", justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">{source}</span>

        </div>
        <img src={!imageUrl ? unavailable : imageUrl} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title" >{title}</h5>
          <p className="card-text">
            {!description ? "Description not available" : description}
          </p>
          <p className="card-text"><small className="text-danger">By : {author ? author : "Unknown"}</small><br />
            <small className="text-danger">On : {new Date(date).toGMTString()} </small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-danger">
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
