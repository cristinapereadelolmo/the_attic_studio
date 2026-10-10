import React from 'react';
import ShopBradcrumb from '../common/breadcrumb/ShopBradcrumb';
import CartProductSection from './CartProductSection';

const CartMain = () => {
    return (
        <>
            <ShopBradcrumb title='Cart' />
            <CartProductSection />
        </>
    );
};

export default CartMain;