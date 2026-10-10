"use client"
import NiceSelect from '@/components/common/NiceSelect';
import { enquireForm } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify';
import ErrorMsg from './error-msg';

const EnquireFormList = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                number: "",
                writeSomething: "",
                // termsAndConditions: isChecked,
            },
            validationSchema: enquireForm,
            onSubmit: (values, { resetForm }) => {
                console.log(values);
                toast.success("Form Submitted Successfully!");
                resetForm();
            },
        });
    const EnquirySelectOption = [
        { id: 1, optionName: "Choose Service" },
        { id: 2, optionName: "Recording" },
        { id: 3, optionName: "Mixing" },
        { id: 4, optionName: "Product & Song Development" },
        { id: 5, optionName: "Live Acoustic Videos" },
        { id: 6, optionName: "Remote Recording" },
        { id: 7, optionName: "Lessons" },
        { id: 8, optionName: "Other" },
    ]

    const selectHandler = (selectedOption: any) => {
        handleChange({ target: { name: "eventType", value: selectedOption.optionName } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ms-input-box">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="First name"
                            />
                            {touched.firstName && <ErrorMsg error={errors.firstName} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ms-input-box">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Last name"
                            />
                            {touched.lastName && <ErrorMsg error={errors.lastName} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ms-input-box">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Email"
                            />
                            {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ms-input-box">
                            <label>Phone Number</label>
                            <input
                                name="number"
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Your Phone"
                                id="number"
                            />
                            {touched.number && <ErrorMsg error={errors.number} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ms-input-box">
                            <label>Date (optional)</label>
                            <DatePicker selected={startDate} onChange={(date: Date | null) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ms-input-box">
                            <label>Service</label>
                            <NiceSelect
                                options={EnquirySelectOption}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name="eventType"
                                className=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="ms-input-box">
                            <label>Write Something</label>
                            <textarea cols={30} rows={10}
                                name="writeSomething"
                                value={values.writeSomething}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Tell us what you're interested in and how we can help!"></textarea>
                            {touched.writeSomething && <ErrorMsg error={errors.writeSomething} />}
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="row align-items-center">
                            {/* <div className="col-lg-6">
                                <label className="ms-checkbox">
                                    <span>I Read Your <Link href="/terms-condition">Terms And Conditions</Link>
                                        {" "} Also {" "}
                                        <Link href="/privacy-policy">Privacy
                                            Policy</Link></span>
                                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                                    <span className="checkmark"></span>
                                </label>
                            </div> */}
                            <div className="col-lg-12">
                                <div className="ms-submit-btn text-end mb-10">
                                    <button type="submit" className="unfill__btn">Send
                                        enquiry</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EnquireFormList;