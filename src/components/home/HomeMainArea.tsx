import React from 'react';
import BrandSectionOne from '../SliderElements/BrandSlider/BrandSectionOne';
import HeroOne from './HeroOne';
import TextScrollArea from '../SliderElements/TextScrollSlider/TextScrollArea';
import PopularAreaOne from '../SliderElements/PopularSlider/PopularAreaOne';
import WorkArea from './WorkArea';
import TrendingareaOne from './TrendingareaOne';
import FunctionBandsSectionOne from './FunctionBandsSectionOne';
import TestimonialSliderOne from '../SliderElements/TestimonialSlider/TestimonialSliderOne';
import LatestNewsOne from './LatestNewsOne';
import PartnerAreaSliderOne from '../SliderElements/PartnerAreaSlider/PartnerAreaSliderOne';
import CtaArea from './CtaArea';
import SpecialEventSliderOne from '../SliderElements/SpecialEventSlider/SpecialEventSliderOne';
import EnquireForm from '@/components/enquiry-list/EnquireForm';
const HomeMainArea = () => {
    return (
        <>
            {/*<BrandSectionOne />*/}
            <HeroOne />
            {/* <TextScrollArea /> */}
            {/* <PopularAreaOne /> */}
            <WorkArea />
            {/* <TrendingareaOne /> */}
            {/* <FunctionBandsSectionOne /> */}
            {/* <SpecialEventSliderOne /> */}
            <TestimonialSliderOne />
            <LatestNewsOne />
            <EnquireForm />
        </>
    );
};

export default HomeMainArea;