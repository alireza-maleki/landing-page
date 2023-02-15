import React from 'react';

import classes from "./Services.module.css";

import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Link from 'next/link';

const Services = () => {
    return (
        <section className="container overflow-hidden">

            <div data-aos="fade-left" data-aos-delay="200" className='row'>
                <h2>لورم ایپسوم</h2>
                <p>لورم ایپسوم متن ساختگی نامفهوم</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className='row mb-5 g-3'>

                <div className={`col-lg-4 col-md-6  ${classes['services-box-blue']} ${classes['blue']}`}>

                    <BsFillChatLeftTextFill  className={classes['icon-blue']}/>
                    <h3 className='fw-bold mt-4'>لورم ایپسوم</h3>
                    <p className='my-4'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>

                    <Link className={` mt-4 ${classes['more-blue']} `} href="/">
                        <span>مشاهده بیشتر</span>
                        <BsArrowLeft className={classes['arrow-icon']}/>
                    </Link>

                </div>

                <div className={`col-lg-4 col-md-6 ${classes['services-box-orange']} ${classes['orange']}`}>

                    <BsFillChatLeftTextFill  className={classes['icon-orange']}/>
                    <h3 className='fw-bold mt-4'>لورم ایپسوم</h3>
                    <p className='my-4'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>

                    <Link className={` mt-4 ${classes['more-orange']} `} href="/">
                        <span>مشاهده بیشتر</span>
                        <BsArrowLeft className={classes['arrow-icon']}/>
                    </Link>

                </div>

                <div className={`col-lg-4 col-md-6 ${classes['services-box-green']} ${classes['green']}`}>

                    <BsFillChatLeftTextFill  className={classes['icon-green']}/>
                    <h3 className='fw-bold mt-4'>لورم ایپسوم</h3>
                    <p className='my-4'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>

                    <Link className={` mt-4 ${classes['more-green']} `} href="/">
                        <span>مشاهده بیشتر</span>
                        <BsArrowLeft className={classes['arrow-icon']}/>
                    </Link>

                </div>

            </div>

        </section>
    )
}

export default Services