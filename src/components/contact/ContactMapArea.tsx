import Link from 'next/link';
import React from 'react';
import ContactBg from '../../../public/assets/img/bg/contact-bg.jpg';
import headerLogo from "../../../public/assets/img/logo/studio-logo.png";
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const ContactMapArea = () => {
    const contactData = [
        {
            id: 1,
            image: headerLogo,
            title: "The Attic Studio Dublin",
            addess: "Ballyfermot, Dublin 10, Dublin",
            phone: "00000000",
            email: "email.email@email.com"
        },
    ]
    return (
        <>
            <section className="ms-contact-map-area">

                {/* <div className="ms-bg-7 ms-contact-map-space">
                    <div className="container">
                        <div className="ms-contact-map-grid">
                            {
                                contactData.map((item) => (
                                    <div className="ms-contact-map-item-wrapper" key={item.id}>
                                        <div className="ms-contact-map-item ms-bg-6">
                                            
                                            <h3 className="ms-title3 white-text mb-40">{item.title}</h3>
                                            <div className="ms-contact-map-content ms-footer2-contact border-0">
                                                <ul>
                                                    <li><i className="flaticon-pin"></i><Link href="#">{item.addess}</Link></li>
                                                    <li><i className="flaticon-phone-call"></i><Link href="tel:03332920560">{item.phone}</Link></li>
                                                    <li><i className="flaticon-mail"></i><Link
                                                        href={`mailto:${item.email}`}>{item.email}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ms-contact-flag">
                                                <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy'
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                    alt="flag image" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div> */}
                <div className="ms-contact-img w-img">
                    <iframe
                        src="https://maps.google.com/maps?q=Ballyfermot,%20Dublin%2010,%20Dublin&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="The Attic Studio location map"
                    />
                </div>
                
            </section>
        </>
    );
};

export default ContactMapArea;