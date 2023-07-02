import React, { useState } from 'react';

const Carousel = () => {
const cardStyle = {
    height: '200px',
  };

  const captionStyle = {
    padding: '0',
    right: '0',
    left: '0',
    color: '#3d3d3d',
  };

  const headingStyle = {
    color: '#3d3d3d',
  };

  const paragraphStyle = {
    lineHeight: '30px',
  };

  const col3Style = {
    display: 'flex',
    alignItems: 'center',
  };

  const col9Style = {
    textAlign: 'left',
  };

  const icoStyle = {
    backgroundColor: 'grey',
    padding: '10px',
  };

  const icoHoverStyle = {
    backgroundColor: '#666',
  };

  return (
    <div className="card col-md-6 mt-5 mb-5 my-0 mx-auto" style={cardStyle}>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="100000">
      <div className="w-100 carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="carousel-caption" style={captionStyle}>
            <div className="row">
              <div className="col-sm-3" style={col3Style}>
                <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid" />
              </div>
              <div className="col-sm-9" style={col9Style}>
                <h3 style={headingStyle}>Gives me hope</h3>
                <small style={paragraphStyle}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>
                <small className="smallest mute">- Yayo Dudemous</small>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption" style={captionStyle}>
            <div className="row">
              <div className="col-sm-3" style={col3Style}>
                <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid" />
              </div>
              <div className="col-sm-9" style={col9Style}>
                <h3 style={headingStyle}>You will love it.</h3>
                <small style={paragraphStyle}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>
                <small className="smallest mute">- Yayo Dudemous</small>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption" style={captionStyle}>
            <div className="row">
              <div className="col-sm-3" style={col3Style}>
                <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid" />
              </div>
              <div className="col-sm-9" style={col9Style}>
                <h3 style={headingStyle}>Velvet pouch!</h3>
                <small style={paragraphStyle}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>
                <small className="smallest mute">- Yayo Dudemous</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-right navi">
        <a className="" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon ico" aria-hidden="true" style={icoStyle}></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon ico" aria-hidden="true" style={icoStyle}></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <style>
      {`
        .navi a {
          text-decoration: none;
        }
        .navi a:hover > .ico {
          background-color: #666;
        }
      `}
    </style>
  </div>

  );
};

export default Carousel;
