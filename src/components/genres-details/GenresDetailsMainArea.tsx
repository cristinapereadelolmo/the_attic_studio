"use client"
import React, { useState } from 'react';
import GenresSidebar from './GenresSidebar';
import NavProfileTab from './NavProfileTab';
import GenresContent from './GenresContent';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import GenresBgImg from '../../../public/assets/img/genres/genres-bg-2.jpg';
import BookingArea from './BookingArea';
import GenresFaq from './GenresFaq';
import { idType } from '@/types/types';
import genres_listing_data from '@/data/genres-listing-data';
import ModalVideo from "@/components/VideoPopup/VideoModal";

const GenresDetailsMainArea = ({ id }: idType) => {
    const genreData: any = genres_listing_data.find((item) => item.id == id)
    const [isOpen, setIsOpen] = useState(false);
    const [videoId, setvideoId] = useState(" ");
    const openVideoModal = (id: string) => {
        setIsOpen(!isOpen);
        setvideoId(id)
    }
    return (
        <>
            <section className="ms-genres-area pt-130 pb-70">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-xl-7">
                            <div className="ms-genres-top text-center mb-50">
                                <div className="ms-genres-top-video mb-30">
                                    <button onClick={() => { openVideoModal(genreData.videoUrl) }} className="ms-video-text popup-video">
                                        <i className="fa-sharp fa-solid fa-play"></i>
                                        <span>Play Promo</span>
                                    </button>
                                </div>
                                <h2 className="ms-title2 white-text mb-20">{genreData.title}</h2>
                                <p className="ms-text2">{genreData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-genres-shape include__bg" data-background="assets/img/genres/genres-shape.png">
                    <div className="container">
                        <div className="ms-genres-img p-relative ms-br-15 m-img fix mb-65">
                            <Image src={GenresBgImg} loader={imageLoader} placeholder="blur"
                                loading='lazy' style={{ width: '100%', height: "auto" }}
                                alt="genres image" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-7">
                            <div className="ms-genres-left-wrap mb-60">
                                <div className="ms-genres-tab2 mb-20">
                                    <nav>
                                        <div className="nav nav-tabs ms-tab-button border-0 ms-border2-btn ms-tab-prevent"
                                            id="nav-tab" role="tablist">
                                            <button className="nav-link prevent active" id="nav-home-tab"
                                                data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab"
                                                aria-controls="nav-home" aria-selected="true">About
                                                Band</button>
                                            <button className="nav-link prevent" id="nav-profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-profile" type="button" role="tab"
                                                aria-controls="nav-profile" aria-selected="false">Watch &
                                                listen</button>
                                        </div>
                                    </nav>
                                </div>
                                <div className="ms-genres-tab2-content">
                                    <div className="tab-content" id="nav-tabContent2">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                            aria-labelledby="nav-home-tab" tabIndex={0}>
                                            <GenresContent />
                                        </div>
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                            aria-labelledby="nav-profile-tab" tabIndex={0}>
                                            <NavProfileTab />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <GenresSidebar />
                    </div>
                </div>
            </section>
            <BookingArea />
            <GenresFaq />
            <ModalVideo isOpen={isOpen} videoUrl="https://www.youtube.com/watch?v=ffQJRqlgf4E" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default GenresDetailsMainArea;