"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import bannerBg from '../../../public/assets/img/banner/studio-hero.jpg';
import NiceSelect from '../common/NiceSelect';

const pageOptions = [
    { id: 1, optionName: "What are you looking for today?", link: "" },
    { id: 2, optionName: "Information about the Studio", link: "/about" },
    { id: 3, optionName: "Services offered", link: "/services" },
    { id: 4, optionName: "Studio Equipment", link: "/equipment" },
    { id: 5, optionName: "Rates", link: "/rates" },
    { id: 6, optionName: "FAQ", link: "/faq" },
];

const HeroOne = () => {
    const router = useRouter();
    const [selectedLink, setSelectedLink] = useState(pageOptions[0].link);

    const selectHandler = (selectedOption: any) => {
        setSelectedLink(selectedOption.link);
    };

    const handleGo = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedLink) {
            router.push(selectedLink);
        }
    };

    return (
        <>
            <section className="ms-banner-area p-relative">
                <Link className="ms-scroll-down" href="#">SCROLL DOWN</Link>
                <div className="container-fluid ms-maw-1710">
                    <div className="ms-br-30 mx-auto include__bg z-index-1 ms-overlay-1 p-relative"
                        style={{ backgroundImage: `url(${bannerBg.src})` }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-11">
                                    <div className="ms-banner__main-wrapper">
                                        <div className="ms-banner__content text-center">
                                            <h1 className="ms-banner__bg-title-plain">
                                                The Attic Studio
                                            </h1>
                                            <h2 className="ms-banner__title-plain msg_title bd-title-anim">
                                                Dublin Boutique Music Studio
                                            </h2>
                                        </div>
                                        <div className="ms-banner__form bdFadeUp">
                                            <form onSubmit={handleGo}>
                                                <div className="ms-banner__from-inner white-bg">
                                                    <div className="ms-banner__form-select m-nice-select ms-border-none">
                                                        <NiceSelect
                                                            options={pageOptions}
                                                            defaultCurrent={0}
                                                            onChange={selectHandler}
                                                            name=""
                                                            className=""
                                                        />
                                                    </div>
                                                    <div className="banner__form-button">
                                                        <button type="submit" className="input__btn"><i className="flaticon-loupe"></i>
                                                            Go</button>
                                                    </div>
                                                </div>
                                            </form>
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

export default HeroOne;