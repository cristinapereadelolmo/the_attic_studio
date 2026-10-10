import React from 'react';
import ShopBradcrumb from '../common/breadcrumb/ShopBradcrumb';
import ProductArea from './ProductArea';

const ShopMainArea = () => {
    return (
        <>
            <ShopBradcrumb title='Studio Equipment' />
            <ProductArea />
        </>
    );
};

export default ShopMainArea;