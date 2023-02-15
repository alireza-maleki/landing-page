import React from 'react';

import classes from "./About.module.css";

const About = () => {
  return (
    <section className='py-5 overflow-hidden'>

      <div className='container'>
        <div className='row gx-0 gy-5 align-items-center'>

          <div className='col-lg-6' data-aos="fade-up" data-aos-delay="200">
            <div className={classes.content}>
              <h3 className='text-center text-lg-end text-primary'>لورم ایپسوم متن ساختگی</h3>
              <h2 className='fw-bold my-3 mt-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.</h2>
              <p>
                   لورم ایپسوم  متن ساختگی چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <button className='btn btn-primary mt-4'>لورم ایپسوم</button>
            </div>
          </div>

          <div className='col-lg-6' data-aos="zoom-out" data-aos-delay="200">
            <img className='img-fluid' src='./images/about.jpg' />
          </div>

        </div>
      </div>

    </section>
  )
}

export default About