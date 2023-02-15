import React from 'react';

import classes from "./Values.module.css";

const Values = () => {
    return (
        <section className='py-5 overflow-hidden'>

            <div className='container'>

                <div data-aos="fade-up" data-aos-delay="200" className='row text-center gy-3 mb-3'>
                    <h2 className='fw-bold text-primary'>لورم ایپسوم</h2>
                    <p>لورم ایپسوم متن ساختگی نامفهوم</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className='row g-3'>

                    <div className='col-md-6 col-lg-4'>
                        <div class="card shadow">
                            <img src="./images/1.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">لورم ایپسوم</h5>
                                <p class="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                <a href="#" class="btn btn-primary">مشاهده بیشتر</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-4'>
                        <div class="card shadow">
                            <img src="./images/2.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">لورم ایپسوم</h5>
                                <p class="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                <a href="#" class="btn btn-primary">مشاهده بیشتر</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-4'>
                        <div class="card shadow">
                            <img src="./images/3.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">لورم ایپسوم</h5>
                                <p class="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                <a href="#" class="btn btn-primary">مشاهده بیشتر</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </section>
    )
}

export default Values