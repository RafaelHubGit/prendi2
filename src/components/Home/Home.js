import React, { Component } from 'react';

// import Swal from 'sweetalert2';
// import Swiper from 'swiper';
// import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import Swiper from 'react-id-swiper';

import './style.css';
import firstImage from '../../Images/Home/Events4.jpg';
// import '../../../node_modules/swiper/dist/js/swiper.js'
// import '../../../node_modules/swiper/dist/css/swiper.css'

// const $ = require('jquery');
// const Swiper = require('swiper');
// var Swiper = require('swiper');
// import Swiper from 'react-id-swiper';





class Home extends Component {

    render(){

        

        // ( ()=> {
        //     
        // })();

        

        

        return(

            <div className="swipe-container">
                <img src={firstImage} alt="" className="img-fluid" />
            </div>
        
            // <div className="swiper-container">
            //     <div className="swiper-wrapper">
            //         <div className="swiper-slide">Slide 1</div>
            //         <div className="swiper-slide">Slide 2</div>
            //         <div className="swiper-slide">Slide 3</div>
            //         <div className="swiper-slide">Slide 4</div>
            //         <div className="swiper-slide">Slide 5</div>
            //         <div className="swiper-slide">Slide 6</div>
            //         <div className="swiper-slide">Slide 7</div>
            //         <div className="swiper-slide">Slide 8</div>
            //         <div className="swiper-slide">Slide 9</div>
            //         <div className="swiper-slide">Slide 10</div>
            //     </div>
            //     {/* <!-- Add Pagination --> */}
            //     <div className="swiper-pagination"></div>
            //     {/* <!-- Add Arrows --> */}
            //     <div className="swiper-button-next"></div>
            //     <div className="swiper-button-prev"></div>
            // </div>
        );
    }
};

export default Home;