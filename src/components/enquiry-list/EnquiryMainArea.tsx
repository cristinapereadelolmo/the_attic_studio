import React from 'react';
import BradcrumbTwo from '../common/breadcrumb/BradcrumbTwo';
import EnquiryListArea from './EnquiryListArea';
import FaqArea from '../about/FaqArea';
import EnquireForm from './EnquireForm';

const EnquiryMainArea = () => {
    return (
        <>
            <BradcrumbTwo teamTitle="Services" />
            <EnquiryListArea />
            <EnquireForm />
            <FaqArea wrapperBgClass="ms-bg-2" />
        </>
    );
};

export default EnquiryMainArea;