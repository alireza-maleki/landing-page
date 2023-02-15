import React from 'react';

import classes from "./Counts.module.css";

import { BsEmojiSmile } from 'react-icons/bs';
import { BsJournalRichtext } from 'react-icons/bs';
import { BsHeadset } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';

// import PureCounter from "@srexi/purecounterjs";

const Counts = () => {
    
    // const pure = new PureCounter();


    
    return (
        <section className={`py-5 overflow-hidden ${classes.counts}`}>

            <div className='container'>
                <div data-aos="fade-up" data-aos-delay="300" className='row g-4'>

                    <div className='col-md-6 col-lg-3'>
                        <div className='d-flex align-items-center justify-content-center shadow p-3'>
                            <BsEmojiSmile className={`ms-3  ${classes.blue}`} />
                            <div>
                                <span className='fs-3 fw-bold text-primary purecounter' data-purecounter-start="0"
                                    data-purecounter-end="1111">1111</span>
                                <p>لورم ایپسوم متن</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-3'>
                        <div className='d-flex align-items-center justify-content-center shadow p-3'>
                            <BsJournalRichtext className={`ms-3  ${classes.orange}`} />
                            <div>
                                <span className='fs-3 fw-bold text-primary purecounter' data-purecounter-start="0"
                                    data-purecounter-end="1212"
                                >101</span>
                                <p>لورم ایپسوم متن</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-3'>
                        <div className='d-flex align-items-center justify-content-center shadow p-3'>
                            <BsHeadset className={`ms-3  ${classes.green}`} />
                            <div>
                                <span className='fs-3 fw-bold text-primary purecounter' data-purecounter-start="0"
                                    data-purecounter-end="999"
                                >2323</span>
                                <p>لورم ایپسوم متن</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-3'>
                        <div className='d-flex align-items-center justify-content-center shadow p-3'>
                            <BsPeople className={`ms-3  ${classes.red}`} />
                            <div>
                                <span className='fs-3 fw-bold text-primary purecounter' data-purecounter-start="0"
                                    data-purecounter-end="1010"
                                >123</span>
                                <p>لورم ایپسوم متن</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Counts