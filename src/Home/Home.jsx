import React, { Component } from 'react';
class Home extends Component {
    render() {
        return(
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                        <img className="img-fluid rounded slide" alt="Responsive image" src={require('../gambar/slide1.jpg')}/>
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert danger" role="alert">
                                <p className="text-white text-center">A simple success alert-checkit out!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container slide">
                    <div className="row">
                        <div className="col-md-8">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="img-fluid d-block w-100" src={require('../gambar/slide1.jpg')}/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-fluid d-block w-100" src={require('../gambar/slide2.jpg')}/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-fluid d-block w-100" src={require('../gambar/slide3.jpg')}/>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">previous</span>
                                    </a>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            
                            <img className="img-fluid rounded slide" alt="Responsive image" src={require('../gambar/desktop.jpg')}/>
                            <img className="img-fluid rounded slide" alt="Responsive image" src={require('../gambar/banner.jpg')}/>
                        </div>
                    </div>
                </div>
            </div>
              
        );
    }
}

export default Home;