import React from 'react';
import EnquireForm from '@/components/enquiry-list/EnquireForm';
import FaqArea from '../about/FaqArea';
import Link from 'next/link';

const RefundPolicy = () => {
    return (
        <>
            <section className="terms_conditions_section section_space_lg pt-60 pb-60">
                <div className="container">
                    <div className="row"></div>
                    <div className="terms_conditions_content">
                    <h2 className="info_title"><Link href="/contact">*Payment plans available <br /> get in touch to find out more</Link></h2>

                        <h2 className="warpper_title mb-25">
                            <Link href="/services">Recording</Link> - Hourly
                        </h2>
                        <ul className="icon_list unordered_list_block">
                            <li> <span className="list_item_text">€40/hour</span></li>
                            <li><span className="list_item_text"> 2 hour minimum booking</span></li>
                            <li><span className="list_item_text"> Perfect for vocal sessions, overdubs, poetry recording or short recording sessions
                            </span></li>
                        </ul>

                        <h2 className="warpper_title mb-25"><Link href="/services">Recording</Link> - Half Day</h2>
                        <ul className="icon_list unordered_list_block">
                            <li><span className="list_item_text">€37.5/hour (€150 total*)</span></li>
                            <li><span className="list_item_text">4 hours of recording</span></li>
                            <li><span className="list_item_text">Ideal for recording a single song, demos or focused production sessions</span></li>
                        </ul>

                        <h2 className="warpper_title mb-25">
                            <Link href="/services">Recording</Link> - Full Day
                        </h2>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="list_item_text">
                                    €35/hour (€280 total*)
                                </span>
                            </li>
                            <li>
                                <span className="list_item_text">
                                    8 hours of recording
                                </span>
                            </li>
                            <li>
                                <span className="list_item_text">
                                    Best value for full-band tracking, longer production sessions and larger recording projects
                                </span>
                            </li>
                        </ul>

                        <h2 className="warpper_title mb-25">
                            <Link href="/services">Mixing</Link>
                        </h2>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="list_item_text">
                                    €200 per song
                                </span>
                            </li>
                            <li>
                                <span className="list_item_text">
                                    3 revisions included in price
                                </span>
                            </li>

                        </ul>
                        <h2 className="warpper_title mb-25">
                            <Link href="/services">Recording</Link> - Student Sessions 
                        </h2>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="list_item_text">
                                    €35/hour
                                </span>
                            </li>
                            <li>
                                <span className="list_item_text">Offer available for recording sessions happening Monday to Friday from 9am to 4pm</span>
                            </li>
                            <li>
                                <span className="list_item_text">
                                    We are pleased to offer a special student rate for students in third level education (please note valid student ID to be presented on day of recording) 
                                </span>
                            </li>
                        </ul>
                        <h2 className="warpper_title mb-25">
                            <Link href="/services">Lessons</Link>
                        </h2>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="list_item_text">
                                    €35 for a 45 minute class 
                                </span>
                            </li>
                            <li>
                                <span className="list_item_text">Guitar, Bass or Ukelele</span>
                            </li>
                        </ul>

                        <div className="mt-60 mb-40" style={{ textAlign: 'center' }}>
                            <Link className="unfill__btn" href="/services">Learn About Our Services</Link>
                        </div>

                        
                    </div>
                    <p>Not sure how much time your project needs?<br /> <Link href="/contact" style={{ textDecoration: 'underline' }}>Get in touch</Link> and we'll happily recommend the best option.
                    </p>
                    <EnquireForm />
                    <FaqArea />
                </div>
            </section>
        </>
    );
};

export default RefundPolicy;