import React from "react";

const Newsitem = (props)=> {
 
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
return (
      <div className="my-3">
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill" style={{left: '90%', zIndex: '1'}}> {source} </span>
          <img src={!imageUrl?"https://c.ndtvimg.com/2023-08/hg2cpdn_x_625x300_06_August_23.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target={"_blank"}
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
