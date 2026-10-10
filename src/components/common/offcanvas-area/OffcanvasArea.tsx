import Link from 'next/link';
import React from 'react';
import headerLogo from "../../../../public/assets/img/logo/studio-logo.png";import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import MobileMenu from '@/layout/mobile-menu/MobileMenu';

type TSideInfoProps = {
    isOpenInfoSidebar: boolean;
    setIsOpenInfoSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const OffcanvasArea = ({ isOpenInfoSidebar, setIsOpenInfoSidebar }: TSideInfoProps) => {
    return (
        <>
            <div className="fix">
                <div className={`offcanvas__info ${isOpenInfoSidebar ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={headerLogo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={() => setIsOpenInfoSidebar(!isOpenInfoSidebar)}>
                                        <i className="fal fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="hr-1 mt-30 mb-30 d-xl-block"></div>
                            <div className="mobile-menu2 fix mb-30 mobile-menu mean-container d-xl-block">
                                <nav className='mean-nav'>
                                    <ul className='menu-list'>
                                        <MobileMenu />
                                    </ul>
                                </nav>
                            </div>
                            <div className="hr-1 mt-30 mb-30 d-xl-block"></div>
                            <div className="offcanvas__social">
                                <div className="ms-footer-social mb-0">
                                    <Link href="https://www.instagram.com/theatticstudiodublin/" title="Instagram" target="_blank">INSTAGRAM</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OffcanvasArea;