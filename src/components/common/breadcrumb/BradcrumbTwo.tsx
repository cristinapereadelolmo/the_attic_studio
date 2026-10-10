import React from 'react';
type TTeam = {
    teamTitle: string;
}
const BradcrumbTwo = ({ teamTitle }: TTeam) => {
    return (
        <>
            <section className="page-title-area page-title-spacing p-relative zindex-1 ">
                <div className="ms-overlay ms-overlay8 p-absolute zindex--1"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-9">
                            <div className="page-title-wrapper text-center pt-15">
                                <h3 className="ms-page-title lh-1">{teamTitle}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BradcrumbTwo;