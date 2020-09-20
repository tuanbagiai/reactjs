import React from 'react';
import jQuery from 'jquery';
import 'jquery';
import './fisher.css';
import 'bootstrap/dist/css/bootstrap.css';
// import SILDE1 from '../slide1.png';
// import Slide1 from '../components/vendor/images/slide1.png';
const HelpPage = () => (
    <div className="container-home">
        {/*<div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Help</li>
                </ol>
            </nav>
        </div>
        <div className="card" style = {{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
     */}
    
            <h4 className="mb-3">Simple Carousel</h4>
            <div id="myCarousel" className="carousel slide border" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" style={Slide1}/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" />
                    </div>
                </div>
            </div>
        </div>
        
    
);
export default HelpPage;