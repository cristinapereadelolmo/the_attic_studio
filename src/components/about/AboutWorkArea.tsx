"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import WorkFutureIconOne from '@/svg/WorkFutureIconOne';
import WorkFutureSvgIconThree from '@/svg/WorkFutureSvgIconThree';
import WorkFutureSvgIconTwo from '@/svg/WorkFutureSvgIconTwo';
import workThumb from "../../../public/assets/img/work/work-thumb-06.png";
import workArrow from "../../../public/assets/img/work/arrow.png";
import { TWorkFuture } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const AboutWorkArea = () => {
    const work_future_data: TWorkFuture[] = [
        {
            id: 1,
            title: "Recording",
            description: "The attic has everything you need to record your music to the highest standard. In addition to this, we have a large roster of Dublin’s most talented session musicians covering anything you might need."
        },
        {
            id: 2,
            title: "Mixing",
            description: "Whether your music has been recorded at The Attic or not, affordable mix rates are available with quick turnarounds and up to 3 revisions included in the quoted price free of charge. "
        },
        {
            id: 3,
            title: "Production & Song Development",
            description: "Bringing a wealth of songwriting, arranging, producing and compositional skills to the studio, we love working with artists to turn their song from a 3 chord demo into a fully arranged, radio standard production."
        },
        {
            id: 4,
            title: "Live Acoustic Videos",
            description: "In addition to recording, the studio space is a gorgeous and well lit environment to film live acoustic sessions, with video packages available at a very reasonable rate."
        },
        {
            id: 5,
            title: "Remote Recording",
            description: "Want that Attic secret sauce on your recording but can’t get to Dublin? Fear not! Through the magic of the internet, we offer remote recording sessions for Drums, Strings, Guitars, Bass, Backing Vocals, Piano and just about anything you need."
        },
        {
            id: 6,
            title: "Lessons",
            description: "With over 8 years of teaching experience, the attic offers private guitar, bass and ukulele tuition. Lessons available from beginner to advanced with all welcome."
        },
    ]
    return (
        <>
            <section className="work__area pt-20 pb-70">
                <div className="container">
                    <div className="row align-items-center bdFadeUp">
                        <div className="col-xl-6">
                            <div className="ms-work3-thumb-wrap d-inline-block p-relative mb-100">
                                <div className="section__title-wrapper mb-50">
                                    <h2 className="section__title mb-40 bd-title-anim">Our Services</h2>
                                    <p className="mb-50">
                                        <br />
                                    </p>
                                </div>
                                <div className="ms-work3-inner">
                                    <div className="ms-work3-thumb m-img p-relative fix ms-br-20">
                                        <div className="ms-overlay ms-overlay3 p-absolute"></div>
                                        <Image src={workThumb} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                            alt="work image" />
                                    </div>
                                    <div className="work__features-bottom ms-work3-features pb-90">
                                        <div className="work__features-action">
                                            <div className="work__features-btn ms-work3-feature-btn">
                                                <Link className="ms-fill-btn" href="/enquiry-list">Learn more about our Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-10">
                            <div className="work__content-wrapper p-relative mb-60">
                                
                                <div className="row">
                                    {work_future_data.map((item) => (
                                        <div className="col-lg-6 mb-4" key={item.id}>
                                            <div className="work__features-item h-100">
                                                <div className="work__features-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default AboutWorkArea;