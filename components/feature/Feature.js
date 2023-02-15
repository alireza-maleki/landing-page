import React from 'react';

import classes from "./Feature.module.css";

import { BsBagFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { BsCloudCheckFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";


const Feature = () => {
    return (
        <section className={` py-5 overflow-hidden  ${classes.feature}`}>

            <div className='container'>

                <div data-aos="fade-up" data-aos-delay="200" className='row'>
                    <div className='col-12 text-center text-lg-end'>
                        <h4 className='mb-5'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                        </h4>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className='row my-5 d-flex align-items-center'>

                    <div className='col-lg-4'>
                        <img className='img-fluid' src='./images/feature.png' />
                    </div>

                    <div className='col-lg-4 gy-5 d-flex align-items-center flex-column'>

                        <div className='d-flex'>

                            <div>
                                <BsBagFill className={`ms-3 text-primary ${classes.icons}`} />
                            </div>
                            <div>
                                <h5>لورم ایپسوم متن ساختگی</h5>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>

                        </div>

                        <div className='d-flex'>

                            <div>
                                <HiDocumentText className={`ms-3 text-primary ${classes.icons}`} />
                            </div>
                            <div>
                                <h5>لورم ایپسوم متن ساختگی</h5>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>

                        </div>

                        <div className='d-flex'>

                            <div>
                                <BsCloudCheckFill className={`ms-3 text-primary ${classes.icons}`} />
                            </div>
                            <div>
                                <h5>لورم ایپسوم متن ساختگی</h5>
                                <p className='text-muted'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>

                        </div>


                    </div>

                    <div className='col-lg-4 gy-5 d-flex align-items-center flex-column'>

                        <div className='d-flex'>

                            <div>
                                <GrMail className={`ms-3 text-primary ${classes.icons}`} />
                            </div>
                            <div>
                                <h5>لورم ایپسوم متن ساختگی</h5>
                                <p className='text-muted'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>

                        </div>

                        <div className='d-flex'>

                            <div>
                                <BsFillTelephoneInboundFill className={`ms-3 text-primary ${classes.icons}`} />
                            </div>
                            <div>
                                <h5>لورم ایپسوم متن ساختگی</h5>
                                <p className='text-muted'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>

                        </div>

                        <div className='d-flex'>

                            <div>
                                <MdAdminPanelSettings className={`ms-3 text-primary ${classes.icons}`} />
                            </div>
                            <div>
                                <h5>لورم ایپسوم متن ساختگی</h5>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Feature