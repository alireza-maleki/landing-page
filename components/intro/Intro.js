import React from 'react';

import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={`d-flex align-items-center overflow-hidden ${classes.home}`}>

      <div className='container'>

        <div className='row align-items-center'>

          <div className='col-lg-6 mt-5 mt-lg-0'>
            <h3 data-aos="fade-up" className='fw-bold text-primary text-center text-lg-end'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</h3>
            <h5 data-aos="fade-up" data-aos-delay="400" className='text-muted mt-lg-3 mt-4 text-center text-lg-end'>لورم ایپسوم متن ساختگی با تولید سادگی.</h5>
            <button data-aos="fade-up" data-aos-delay="600" className={ `btn btn-lg btn-primary mt-5 ${classes.hovergrow}` }>لورم ایپسوم</button>
          </div>

          <div data-aos="zoom-out" data-aos-delay="400" className='col-lg-6 mt-5 mt-lg-0'>
            <img className='img-fluid' src='./images/intro-img.png' />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Intro