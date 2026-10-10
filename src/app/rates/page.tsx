import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import Setting from '@/components/common/setting/Setting';
import PrivacyTermsAndRefund from '@/components/privacy-terms-refund/PrivacyTermsAndRefund';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import RefundPolicy from '@/components/privacy-terms-refund/RefundPolicy';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <Breadcrumb title='Rates' />
                    <RefundPolicy/>                    
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;