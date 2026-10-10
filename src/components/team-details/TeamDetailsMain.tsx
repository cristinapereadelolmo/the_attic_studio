"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamForm from '@/form/team-form';
import BioData from './BioData';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import { TTeamData, idType } from '@/types/types';
import team_data from '@/data/team-data';

const TeamDetailsMain = ({ id }: idType) => {
    const team: TTeamData | undefined = team_data.find((item) => item.id == id)

    return (
        <>
            <Breadcrumb title={team?.name} />
            <section className="ms-team-details-area fix pt-1 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="ms-team-img-details mb-50">
                                {
                                    team?.image &&
                                    <Image src={team?.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                        alt="team image" />
                                }
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="ms-team-item-details mb-50">
                                <h4 className="ms-team-role mb-30">{team?.desination}</h4>
                                <p> Finn O'Reilly is a Dublin-based producer, recording engineer, 
                                    songwriter and multi-instrumentalist. A graduate of DCU's Jazz 
                                    and Contemporary Music Performance programme with first-class honours, 
                                    he studied arranging, composition and harmony before building a career 
                                    as both a producer and working musician.</p>

                                <p> Alongside his work in the studio, 
                                    Finn is the songwriter, guitarist and vocalist with Left Iris, 
                                    whose music has amassed over 100,000 streams and received airplay 
                                    across RTÉ Radio 1, RTÉ 2FM, BBC Radio 6 Music, Today FM and Radio Nova. 
                                    As a session musician, he has also performed and recorded with artists 
                                    including Charlotte Hatherley (Ash, Bat for Lashes), Simon Jones (The Verve) 
                                    and Jess Kav (Hozier, Billy Idol, The Waterboys), 
                                    while contributing to recordings featuring Imelda May and Stephen James Smith.</p>

                                <p> As an active artist, Finn brings a songwriter's perspective to every 
                                    recording session. His background in arranging, composition and performance 
                                    informs his approach to production, helping artists develop their songs while creating 
                                    recordings that feel authentic, compelling and true to their vision.</p>

                                <p> Since 2021, Finn has worked with more than 50 artists 
                                    and bands from Ireland and abroad, producing and engineering music 
                                    from his Dublin studio, The Attic. His work has received national 
                                    and international radio support, and he is passionate about creating 
                                    a relaxed, collaborative environment where artists can give their best 
                                    performances and leave with recordings they're proud of.</p>

                                {/*<div className="bd-skill--content mt-50">
                                    <div className="bd-skill__wrapper mb-25">
                                        <div className="bd-skill--title__wrapper">
                                            <h5 className="bd-skill--title">Magical skills</h5>
                                            <span>100%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow={100}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                data-wow-duration="1s"
                                                data-wow-delay=".2s"
                                            >
                                                <span>100%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd-skill__wrapper mb-25">
                                        <div className="bd-skill--title__wrapper">
                                            <h5 className="bd-skill--title">Guitar skills</h5>
                                            <span>absolute pro</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "110%" }}
                                                aria-valuenow={110}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                data-wow-duration="1s"
                                                data-wow-delay=".2s"
                                            >
                                                <span>110%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd-skill__wrapper mb-25">
                                        <div className="bd-skill--title__wrapper">
                                            <h5 className="bd-skill--title">Bass Steeze</h5>
                                            <span>90%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "90%" }}
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                data-wow-duration="1s"
                                                data-wow-delay=".2s"
                                            >
                                                <span>90%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd-skill__wrapper mb-0">
                                        <div className="bd-skill--title__wrapper">
                                            <h5 className="bd-skill--title">Friend</h5>
                                            <span>22%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "22%" }}
                                                aria-valuenow={22}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                data-wow-duration="1s"
                                                data-wow-delay=".2s"
                                            >
                                                <span>22%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 mx-auto">
                            <BioData />
                        </div>
                        <div className="col-xl-8 col-lg-8 mx-auto">
                            <div className="ms-team-item-contact mb-50">
                                <TeamForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamDetailsMain;