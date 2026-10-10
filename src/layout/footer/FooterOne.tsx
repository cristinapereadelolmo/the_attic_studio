import Link from 'next/link';
import React from 'react';
import headerLogo from "../../../public/assets/img/logo/studio-logo.png";
import Image from 'next/image';

const FooterOne = () => {
    return (
        <>
            <footer>
                <div className="ms-footer-bg zindex-1 pt-120">
                    <div className="ms-footer-top pt-130">
                        <div className="container">
                            <div className="ms-footer-border pb-10">
                                <div className="row">

                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Company</h3>
                                            <ul>
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/contact">Contact us</Link></li>
                                                <li><Link href="/terms-policy">Terms & Policy</Link></li>
                                                <li><Link href="/faq">Faq</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-lg-5 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Get in touch</h3>
                                            <div className="ms-footer2-contact border-0 pb-40">
                                                <ul>
                                                    <li><i className="flaticon-pin"></i><Link href="#">Ballyfermot, Dublin 10, Dublin</Link></li>
                                                    <li><i className="flaticon-phone-call"></i><Link href="tel:000000000">0000000000</Link></li>
                                                    <li><i className="flaticon-mail"></i><Link
                                                        href="mailto:theatticstudiodublin@gmail.com">theatticstudiodublin@gmail.com</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ms-footer-social">
                                                <Link href="https://www.instagram.com/theatticstudiodublin/" title="Instagram" target="_blank">INSTAGRAM</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-footer-bottom">
                        <div className="container">
                            <div
                                className="ms-footer-bottom-wrap align-items-center d-flex flex-wrap justify-content-between pt-35 pb-20">
                                <div className="ms-footer-logo mb-15">
                                    <Link href="#">
                                        <Image style={{ width: '100%', height: "auto" }} src={headerLogo}
                                            alt="logo" />
                                    </Link>
                                </div>
                                <div className="ms-footer-copy">
                                    <p>The Attic Studio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterOne;