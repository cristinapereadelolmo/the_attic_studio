'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import headerLogo from "../../../public/assets/img/logo/studio-logo.png";
import genresImg from "../../../public/assets/img/genres/genres-01.jpg";
import genresImg2 from "../../../public/assets/img/genres/genres-02.jpg";
import genresImg3 from "../../../public/assets/img/genres/genres-03.jpg";
import genresImg4 from "../../../public/assets/img/genres/genres-04.jpg";
import genresImg5 from "../../../public/assets/img/genres/genres-05.jpg";
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import Menus from './menus';
import OffcanvasArea from '@/components/common/offcanvas-area/OffcanvasArea';
import { usePathname } from 'next/navigation';
import useStickyHeader from '@/hooks/sticky-header';

const HeaderOne = () => {
    const isSticky = useStickyHeader();
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState(false)
    const handleInfoToggle = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }
    const pathName = usePathname()
    return (
        <>
            <header>
                <div id='header-sticky' className={`header__area header-1 ms-header-fixed ms-bg-body ${isSticky ? "sticky" : ""}`}>
                    <div className="container-fluid ms-maw-1710">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="mega__menu-wrapper p-relative">
                                    <div className={pathName === '/' ? "header__main d-flex ms-border2 align-items-center justify-content-between" :
                                        "header__main d-flex align-items-center justify-content-between"}>
                                        <div className="header__logo pt-25 pb-25">
                                            <Link href="#">
                                                <Image priority width={50} height={50} src={headerLogo} alt="logo not found" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                            </Link>
                                        </div>
                                        
                                        <div className="header__right">
                                            <div className="mean__menu-wrapper">
                                                <div className="main-menu main-menu-ff-space d-none d-lg-inline-block">
                                                    <nav>
                                                        <ul>
                                                            <Menus />
                                                        </ul>
                                                    </nav>
                                                    {/* -- for wp -- */}
                                                    <div className="header__hamburger ml-50 d-none">
                                                        <button type="button" className="hamburger-btn offcanvas-open-btn">
                                                            <span>01</span>
                                                            <span>01</span>
                                                            <span>01</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="header__hamburger">
                                                <div className="sidebar__toggle">
                                                    <button onClick={handleInfoToggle} className="bar-icon">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
            <div onClick={() => setIsOpenInfoSidebar(false)}
                className={isOpenInfoSidebar ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>
        </>
    );
};

export default HeaderOne;