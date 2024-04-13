import React from "react";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{right: 0}}>
            <span className="visually-hidden">{source}</span>
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://sadbhawnapaati.com/wp-content/uploads/2021/03/news.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
