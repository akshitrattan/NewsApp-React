import React, { Component } from 'react';

export default class NewsItem extends Component {

    render() {
      let {title, description, imageURL, newsURL, source} = this.props;
    return (
        <div className="card my-3" style={{width: "18rem", height: "28rem"}}>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                {source}
            </span>
            <div className="card-body">
                <img src={imageURL} style={{width: "100%", height: "200px"}} className="card-img-top" alt="..."/>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
            </div>
            <div className="card-footer">
                <a href={newsURL} target="_blank" className="btn btn-sm btn-primary">Read More</a> 
            </div>
        </div>
    );
  } 
}


