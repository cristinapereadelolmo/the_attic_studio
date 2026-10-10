import Link from 'next/link';
import React from 'react';
import headerLogo from "../../../public/assets/img/logo/studio-logo.png";
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const FooterThree = () => {
    return (
        <>
            <footer>
                <div className="ms-footer3-wrap zindex-1 p-relative">
                    <div className="ms-footer3-top pt-130">
                        <div className="container">
                            <div className="ms-border2">
                                <div className="ms-footer2-logo mb-50 mx-auto">
                                    <Link href="/">
                                        <Image src={headerLogo} loader={imageLoader} placeholder="blur" loading='lazy' width={150} height={150}
                                            alt="footer logo" />
                                    </Link>
                                </div>

                                <div className="row mb-15 justify-content-center">
                                    <div className="col-xxl-5 col-lg-6 col-md-7">
                                        <div className="ms-footer2-widget mb-50 pr-20">
                                            <h3 className="ms-footer2-title">Get in touch</h3>
                                            <div className="ms-footer2-contact border-0 pb-40">
                                                <ul>
                                                    <li><i className="flaticon-pin"></i><Link href="#">Ballyfermot, Dublin 10, Dublin</Link></li>
                                                    <li><i className="flaticon-phone-call"></i><Link href="tel:000000000">0000000000</Link></li>
                                                    <li><i className="flaticon-mail"></i><Link
                                                        href="mailto:theatticstudiodublin@gmail.com">theatticstudiodublin@gmail.com</Link>
                                                    </li>
                                                    <li><i className="ms-footer-social mb-15"></i><Link href="https://www.instagram.com/theatticstudiodublin/">Find us on Instagram</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-lg-4 col-md-5">
                                        <div className="ms-footer2-widget ms-footer2-widget2 mb-50">
                                            <h3 className="ms-footer2-title">Company</h3>
                                            <ul>
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/contact">Contact us</Link></li>
                                                <li><Link href="/terms-policy">Terms & Policy</Link></li>
                                                <li><Link href="/faq">Faq</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-footer-bottom">
                        <div className="container">
                            <div className="ms-footer-bottom-wrap text-center pt-35 pb-20">
                                <div className="ms-footer-copy">
                                    <p>The Attic Studio Dublin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterThree;