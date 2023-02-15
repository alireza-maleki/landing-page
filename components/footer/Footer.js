import classes from "./Footer.module.css";
import Link from "next/link";

import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";


import { FaChevronLeft } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className={classes.footer}>

            <div className="container py-5">

                <div className="row gy-5">

                    <div className="col-lg-5 offset-lg-1">
                        <h3 className="fw-bold">Ali-Maleki</h3>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        <div className={classes['social-link']}>
                            <BsTwitter className={classes["footer-icon"]} />
                            <BsFacebook className={classes["footer-icon"]} />
                            <FaInstagram className={classes["footer-icon"]} />
                            <AiFillLinkedin className={classes["footer-icon"]} />
                        </div>
                    </div>

                    <div className={` col-lg-2 col-6 fw-bold   ${classes.links}`}>
                        <h5>ارتباط با ما</h5>
                        <hr style={{ width: "80%", height: "5px" }} className="bg-primary" />
                        <ul className={classes.lists}>

                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">صفحه اصلی</Link>
                            </li>
                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">محصولات</Link>
                            </li>
                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">درباره ما</Link>
                            </li>
                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">تماس ما</Link>
                            </li>

                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 fw-bold">
                        <h5>خدمات</h5>
                        <hr style={{ width: "70%", height: "5px" }} className="bg-primary" />
                        <ul className={classes.lists}>

                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">لورم</Link>
                            </li>
                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">لورم ایپسوم</Link>
                            </li>
                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">لورم ایپسوم</Link>
                            </li>
                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">لورم ایپسوم </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 fw-bold">
                        <h5>ارتباط با ما</h5>
                        <hr style={{ width: "70%", height: "5px" }} className="bg-primary" />
                        <ul className={classes.lists}>

                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">درباره ما</Link>
                            </li>
                            <li>
                                <FaChevronLeft className={`mx-2 ${classes.arrow} `} />
                                <Link href="/">تماس با ما</Link>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>

            <div className="container-fluid text-center p-3" style={{ backgroundColor: "#f6f6ff" }}>

                <h5 className="fw-bold">Ali-Maleki</h5>
                <p>آکادمی آموزش آنلاین تخصصی برنامه نویسی</p>

            </div>

        </footer>
    )
}

export default Footer