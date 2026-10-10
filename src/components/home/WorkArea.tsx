"use client"
import React from 'react';
import WorkBgImg from "../../../public/assets/img/work/cable-background.jpg";
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import WorkFutureSvgIconOne from '@/svg/WorkFutureIconOne';
import WorkFutureSvgIconTwo from '@/svg/WorkFutureSvgIconTwo';
import WorkFutureSvgIconThree from '@/svg/WorkFutureSvgIconThree';
import envIcon from '../../../public/assets/img/icons/env_icon.png';
import thumb2 from '../../../public/assets/img/work/drums.jpg';
import thumb3 from '../../../public/assets/img/work/soft.jpg';
import thumb1 from '../../../public/assets/img/work/guitars.jpg';
import logo from '../../../public/assets/img/banner/studio-logo.png';
import Link from 'next/link';
import { TWorkFuture } from '@/types/types';

const WorkArea = () => {
    const work_future_data: TWorkFuture[] = [
        {
            id: 1,
            icon: <Image loader={imageLoader} src={logo} alt="logo icon" width={70} height={70} />,
            title: "Who are we?",
            description: "The Attic is a boutique music studio in the heart of Dublin 10 run by multi-instrumentalist and producer Finn O’Reilly"
        },
        {
            id: 2,
            icon: <Image loader={imageLoader} src={envIcon} alt="environment icon" width={55} height={55} />,
            title: "The Studio",
            description: "Since opening in 2025, The Attic has quickly become known for its cosy, welcoming atmosphere and artist-first approach."
        },
        {
            id: 3,
            icon: <WorkFutureSvgIconThree />,
            title: "Working with us",
            description: "If you are interested in working with us, send us an email, Instagram DM or contact us via the web form."
        },
    ]
    return (
        <>
            <section className="work__area work-overlay pt-125 pb-60 include__bg">
                <div className="container">
                    <div className="row align-items-center bdFadeUp">
                        {/* <div className="col-xl-6 order-2 order-xl-1">
                            <div className="work__thumb-wrapper d-inline-block p-relative mb-60">
                                <div className="work__thumb-inner">
                                    <div className="work__thumb" style={{ width: '300px', flexShrink: 0 }}>
                                        <Image loader={imageLoader} placeholder="blur" loading='lazy' width={400} height={300} src={thumb1}
                                            alt="work image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="work__small-thumb">
                                        <div className="work__thumb">
                                            <Image loader={imageLoader} placeholder="blur" loading='lazy' width={264} height={150} src={thumb2}
                                            alt="work image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className="work__thumb">
                                            <Image loader={imageLoader} placeholder="blur" loading='lazy' width={264} height={150} src={thumb3}
                                            alt="work image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-6 order-2 order-xl-1">
                            <div className="work__thumb-wrapper d-inline-block p-relative mb-60" style={{ width: '100%' }}>
                                <div className="work__thumb" style={{ width: '100%', height: '100%' }}>
                                    <Image loader={imageLoader} placeholder="blur" loading='lazy' width={800} height={600} src={logo}
                                        alt="work image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 order-1 order-xl-2">
                            <div className="work__content-wrapper work__content-space mb-70 pl-40">
                                <div className="section__title-wrapper mb-50 bd-title-anim">
                                    <span className="section__subtitle">The Attic Studio</span>
                                </div>
                                <div className="work__features-inner">
                                    {
                                        work_future_data.map((item) => (
                                            <div className="work__features-item" key={item.id}>
                                                <div className="work__features-icon">
                                                    <span>{item.icon}</span>
                                                </div>
                                                <div className="work__features-content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="work__features-bottom">
                                        <div className="work__features-action">
                                            <div className="work__features-btn">
                                                <Link className="unfill__btn feature-unfill_btn" href="/about">Learn more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkArea;