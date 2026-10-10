"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NiceSelect from '../common/NiceSelect';
import products_data from '@/data/products-data';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import { genres_filter_select, genres_select } from '@/data/nice-select-data';
import ShopModal from '../common/ShopModal/ShopModal';

const ProductArea = () => {
    const [modaldata, setModalData] = useState<any>({});
    const selectHandler = () => { }

    return (
        <>
            <div className="ms-product-area pt-130 pb-110 p-relative">
                <div className="container">
                    
                    <div className="ms-product-wrap ms-product-grid mb-65">
                        {
                            products_data.slice(0, 12).map((item) => (
                                <div className="ms-product-item" key={item.id}>
                                    <div className="ms-product-img p-relative mb-20">
                                        <Link href={`/shop-details/${item.id}`}>
                                            <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy'
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                alt="equipment img" />
                                        </Link>
                                        <div className="ms-product-links">
                                            <ul>
                                                <li><button onClick={() => setModalData(item)} className="ms-model-show ms-product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#productModalId">
                                                    <i className="flaticon-view"></i></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3 className="ms-product-title mb-20">
                                        <button
                                            type="button"
                                            onClick={() => setModalData(item)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#productModalId"
                                            className="ms-product-title-btn"
                                        >
                                            {item.title}
                                        </button>
                                    </h3>
                                    <p className="ms-product-description">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                   
                </div>
            </div>
            <ShopModal modaldata={modaldata} />
        </>
    );
};

export default ProductArea;