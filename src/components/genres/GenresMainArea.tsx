import React from 'react';
import GenresAboutArea from './GenresAboutArea';
import GenresListingArea from './GenresListingArea';
import FaqArea from '../about/FaqArea';

const GenresMainArea = () => {
    return (
        <>
            <GenresAboutArea />
            <GenresListingArea />
            <FaqArea wrapperBgClass="ms-bg-2" />
        </>
    );
};

export default GenresMainArea;