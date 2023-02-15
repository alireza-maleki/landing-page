import React from 'react';

import classes from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section className='py-5 overflow-hidden'>

        <div className='container'>

            <div data-aos="flip-up" data-aos-delay="200" className='row mb-5'>
                <h2>قیمت ها</h2>
                <p>لورم ایپسوم متن ساختگی</p>
            </div>

            <div data-aos="flip-up" data-aos-delay="400" className='row gy-3'>

                <div className={` col-md-6 col-lg-3 ${classes.card} `}>

                    <div className='card shadow text-center'>
                        <div className='card-body'>
                            <h2 className='fw-bold' style={{color: '#07d5c0'}}>پلن رایگان</h2>
                            <div> 0 <sup>تومان</sup> / در ماه </div>
                            <img src='/images/price1.png' className='img-fluid p-4'/>
                            <ul className={classes.lists}>
                                <li className='my-2'>لورم ایپسوم متن</li>
                                <li className='my-2'>لورم ایپسوم متن ساختگی</li>
                                <li className='my-2'>لورم ایپسوم</li>
                                <li className='my-2 text-decoration-line-through text-muted'>لورم ایپسوم متن ساختگی</li>
                                <li className='text-decoration-line-through text-muted'>لورم ایپسوم متن</li>
                            </ul>
                            <button className='btn btn-outline-primary mt-4'>خرید پلن</button>
                        </div>
                    </div>

                </div>

                <div className={` col-md-6 col-lg-3 ${classes.card} `}>

                    <div className='card shadow text-center'>
                        <div className='card-body'>
                            <h2 className='fw-bold' style={{color: '#65c600'}}>پلن اول</h2>
                            <div> 11 <sup>تومان</sup> / در ماه </div>
                            <img src='/images/price2.png' className='img-fluid p-4'/>
                            <ul className={classes.lists}>
                                <li className='my-2'>لورم ایپسوم متن</li>
                                <li className='my-2'>لورم ایپسوم متن ساختگی</li>
                                <li className='my-2'>لورم ایپسوم</li>
                                <li className='my-2'>لورم ایپسوم متن ساختگی</li>
                                <li className='text-decoration-line-through text-muted'>لورم ایپسوم متن</li>
                            </ul>
                            <button className='btn btn-outline-primary mt-4'>خرید پلن</button>
                        </div>
                    </div>

                </div>

                <div className={` col-md-6 col-lg-3 ${classes.card} `}>

                    <div className='card shadow text-center'>
                        <div className='card-body'>
                            <h2 className='fw-bold' style={{color: '#ff901c'}}>پلن دوم</h2>
                            <div> 1100 <sup>تومان</sup> / در ماه </div>
                            <img src='/images/price3.png' className='img-fluid p-4'/>
                            <ul className={classes.lists}>
                                <li className='my-2'>لورم ایپسوم متن</li>
                                <li className='my-2'>لورم ایپسوم متن ساختگی</li>
                                <li className='my-2 text-decoration-line-through text-muted'>لورم ایپسوم</li>
                                <li className='my-2 text-decoration-line-through text-muted'>لورم ایپسوم متن ساختگی</li>
                                <li className='text-decoration-line-through text-muted'>لورم ایپسوم متن</li>
                            </ul>
                            <button className='btn btn-outline-primary mt-4'>خرید پلن</button>
                        </div>
                    </div>

                </div>

                <div className={` col-md-6 col-lg-3 ${classes.card} `}>

                    <div className='card shadow text-center'>
                        <div className='card-body'>
                            <h2 className='fw-bold' style={{color: '#ff0071'}}>پلن سوم</h2>
                            <div> 1111 <sup>تومان</sup> / در ماه </div>
                            <img src='/images/price4.png' className='img-fluid p-4'/>
                            <ul className={classes.lists}>
                                <li className='my-2'>لورم ایپسوم متن</li>
                                <li className='my-2'>لورم ایپسوم متن ساختگی</li>
                                <li className='my-2'>لورم ایپسوم</li>
                                <li className='my-2 text-decoration-line-through text-muted'>لورم ایپسوم متن ساختگی</li>
                                <li className='text-decoration-line-through text-muted'>لورم ایپسوم متن</li>
                            </ul>
                            <button className='btn btn-outline-primary mt-4'>خرید پلن</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Pricing