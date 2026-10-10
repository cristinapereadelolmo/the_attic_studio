import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FaqArea from './FaqArea';
import EnquireForm from '@/components/enquiry-list/EnquireForm';

const FaqMainArea = () => {
    return (
        <>
            <Breadcrumb title='Frequently Asked question' />
            <FaqArea />
            <EnquireForm />
        </>
    );
};

export default FaqMainArea;