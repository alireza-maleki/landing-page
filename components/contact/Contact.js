import React from 'react';

import classes from "./Contact.module.css";

// Import Icons

import { SlLocationPin } from 'react-icons/sl';
import { BsTelephoneInbound } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SlClock } from 'react-icons/sl';


function Contact() {

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <section className='py-5 overflow-hidden'>

            <div className='container'>

                <div data-aos="fade-left" data-aos-delay="200" className='row mb-4 text-center'>
                    <h2 className='fw-bold'>ارتباط با ما</h2>
                </div>

                <div data-aos="fade-right" data-aos-delay="400" className='row gy-4'>

                    <div className='col-lg-6'>

                        <div className='row gy-4 gx-2'>

                            <div className={` col-md-6 ${classes.contact} `}>
                                <SlLocationPin className={classes.icons} />
                                <h5 className='fw-bold'>آدرس</h5>
                                <p>لورم ایپسوم<br /> لورم ایپسوم متن ساختگی </p>
                            </div>

                            <div className={` col-md-6 ${classes.contact} `}>
                                <BsTelephoneInbound className={classes.icons} />
                                <h5 className='fw-bold'>شماره</h5>
                                <p className={classes.cellphone}>+98 910 000 0000<br />+98 910 000 0000</p>
                            </div>

                            <div className={` col-md-6 ${classes.contact} `}>
                                <AiOutlineMail className={classes.icons} />
                                <h5 className='fw-bold'>ایمیل</h5>
                                <p>info@gmail.com<br />example@yahoo.com</p>
                            </div>

                            <div className={` col-md-6 ${classes.contact} `}>
                                <SlClock className={classes.icons} />
                                <h5 className='fw-bold'>پشتیبانی</h5>
                                <p>شنبه - چهارشنبه<br />09:00 - 17:00</p>
                            </div>

                        </div>


                    </div>

                    <div className='col-lg-6'>


                        <form onSubmit={submitHandler} className={classes['form-contact']}>

                            <div className='row gy-4'>

                                <div className='col-md-6'>
                                    <label className='form-label'>نام</label>
                                    <input className='form-control' type="text" />
                                </div>

                                <div className='col-md-6'>
                                    <label className='form-label'>ایمیل</label>
                                    <input className='form-control' type="email" />
                                </div>

                                <div className='col-md-12'>
                                    <label className='form-label'>موضوع</label>
                                    <input className='form-control' type="text"/>
                                </div>

                                <div className='col-md-12'>
                                    <label className='form-label'>متن پیام</label>
                                    <textarea className='form-control' type="text" rows="2"></textarea>
                                </div>

                                <div className='col-md-12 text-center'>
                                    <button className='btn btn-primary fw-bold mt-4'>ارسال پیام</button>
                                </div>

                            </div>

                        </form>



                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact