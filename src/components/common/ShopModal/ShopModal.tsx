import { imageLoader } from '@/hooks/ImageLoader';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import thumb1 from "../../../../public/assets/img/shop/product-02.png";
import thumb2 from "../../../../public/assets/img/shop/product-03.png";
import thumb3 from "../../../../public/assets/img/shop/product-04.png";

interface productDataType {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
}

const ShopModal: React.FC<{ modaldata: productDataType }> = ({ modaldata }) => {
    return (
        <>
            <div className="modal fade ms-model1 zindex-99999" id="productModalId" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="ms-product-modal-wrapper p-relative">
                                <button data-bs-dismiss="modal" type="button" className="ms-model-close ms-pclose-btn"><i
                                    className="fa-sharp fa-solid fa-xmark"></i></button>
                                <div className="product__modal-inner">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="product__modal-box pr-30">
                                                <div className="tab-content" id="modalTabContent">
                                                    <div className="tab-pane fade active show" id="nav1" role="tabpanel"
                                                        aria-labelledby="nav1-tab">
                                                        <div className="product__modal-img ms-bg-body w-img">
                                                            {
                                                                modaldata?.image && <Image
                                                                    loader={imageLoader} placeholder="blur" loading='lazy'
                                                                    src={modaldata.image}
                                                                    style={{ width: "100%", height: "auto" }}
                                                                    alt="product image"
                                                                />

                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav2" role="tabpanel"
                                                        aria-labelledby="nav2-tab">
                                                        <div className="product__modal-img ms-bg-body w-img">
                                                            <Image
                                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                                src={thumb1}
                                                                style={{ width: "100%", height: "auto" }}
                                                                alt="product image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav3" role="tabpanel"
                                                        aria-labelledby="nav3-tab">
                                                        <div className="product__modal-img ms-bg-body w-img">
                                                            <Image
                                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                                src={thumb2}
                                                                style={{ width: "100%", height: "auto" }}
                                                                alt="product image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav4" role="tabpanel"
                                                        aria-labelledby="nav4-tab">
                                                        <div className="product__modal-img ms-bg-body w-img">
                                                            <Image
                                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                                src={thumb3}
                                                                style={{ width: "100%", height: "auto" }}
                                                                alt="product image"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="nav nav-tabs border-0" id="modalTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab"
                                                            data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1"
                                                            aria-selected="false">
                                                            {
                                                                modaldata?.image && <Image
                                                                    loader={imageLoader} placeholder="blur" loading='lazy'
                                                                    src={modaldata.image}
                                                                    style={{ width: "100%", height: "auto" }}
                                                                    alt="equipment image"
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
                                                                alt="equipment image"
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
                                                                alt="equipment image"
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
                                                                alt="equipment image"
                                                            />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="ms-product-modal-content">
                                                <h2 className="ms-product-title2 mb-30">
                                                    <Link href={`/shop-details/${modaldata.id}`}>{modaldata.title}</Link>
                                                </h2>
                                                <div className="ms-product-short-desc mb-25">
                                                    <p>{modaldata?.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopModal;