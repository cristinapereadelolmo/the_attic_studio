"use client"
import Link from "next/link";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import NewsImg from '../../../public/assets/img/news/news-07.jpg';
import ContactForm from "@/form/contact-form";
import ContactMapArea from "./ContactMapArea";

const ContactMainArea = () => {
    return (
        <>
            <Breadcrumb title="Contact Us" />
            <section className="ms-contact-area pb-60 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ms-contact-wrap ms-contact-space mb-70 ms-bg-2">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactMapArea />
        </>
    )
};

export default ContactMainArea;