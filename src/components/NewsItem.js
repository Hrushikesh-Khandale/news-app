import React from "react";

 const NewsItem= (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <span class="badge rounded-pill bg-success" style={{left:'80%',zIndex:'1'}}>{source}</span>

          <img
            src={
              !imageUrl
                ? "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1311709601.jpg"
                : imageUrl
            }
            alt="..."
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                by {!author?"unknown":author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default NewsItem
