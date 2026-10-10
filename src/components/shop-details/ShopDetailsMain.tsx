"use client"
import React from 'react';
import ShopBradcrumb from '../common/breadcrumb/ShopBradcrumb';
import { idType } from '@/types/types';
import products_data from '@/data/products-data';
import thumb1 from "../../../public/assets/img/shop/product-02.png";
import thumb2 from "../../../public/assets/img/shop/product-03.png";
import thumb3 from "../../../public/assets/img/shop/product-04.png";
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const ShopDetailsMain = ({ id }: idType) => {
    const product: any = products_data.find((item) => item.id == id);

    return (
        <>
            <ShopBradcrumb title={product?.title} />
            <div className="ms-product-area pt-130 pb-130 p-relative">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-lg-6">
                            <div className="product__modal-box product-dbox-grid mb-60">
                                <ul className="nav nav-tabs border-0" id="modalTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1"
                                            aria-selected="false">
                                            {
                                                product?.image && <Image
                                                    loader={imageLoader} placeholder="blur" loading='lazy'
                                                    src={product.image}
                                                    style={{ width: "100%", height: "auto" }}
                                                    alt="product image"
                                                />
                                            }
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="nav2-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2"
                                            aria-selected="false">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb1}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="nav3-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav3" type="button" role="tab" aria-controls="nav3"
                                            aria-selected="false">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb2}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="nav4-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav4" type="button" role="tab" aria-controls="nav4"
                                            aria-selected="true">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb3}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content br-15 ms-bg-2 d-flex align-items-center" id="modalTabContent">
                                    <div className="tab-pane fade active show" id="nav1" role="tabpanel"
                                        aria-labelledby="nav1-tab">
                                        <div className="product__modal-img w-img">
                                            {
                                                product?.image && <Image
                                                    loader={imageLoader} placeholder="blur" loading='lazy'
                                                    src={product.image}
                                                    style={{ width: "100%", height: "auto" }}
                                                    alt="product image"
                                                />
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                                        <div className="product__modal-img w-img">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb1}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                                        <div className="product__modal-img w-img">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb2}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                                        <div className="product__modal-img w-img">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb3}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-product-modal-content mb-60">
                                <h2 className="ms-product-title2 mb-30">
                                    {product?.title}
                                </h2>
                                <div className="ms-product-short-desc mb-25">
                                    <p>{product?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopDetailsMain;