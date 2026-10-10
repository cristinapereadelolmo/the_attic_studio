"use client"
type TWrapperClass = {
    wrapperBgClass?: string
}


const FaqArea = ({ wrapperBgClass }: TWrapperClass) => {
    return (
        <>
            <section className={`ms-faq-area pt-120 pb-11 fix ${wrapperBgClass ? wrapperBgClass : ""}`}>
                <div className="bd-accordion-fix">
                    <div className="container">
                        <div className="row align-items-center mb-15 bdFadeUp">
                            <div className="col-xl-7 col-lg-10">
                                <div className="section__title-wrapper section__title-wrapper-faq mb-40">
                                    <h2 className="section__title mb-40 bd-title-anim">
                                        Frequently Asked Questions
                                    </h2>
                                </div>
                            </div>

                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-faq-1" role="tabpanel"
                                    aria-labelledby="nav-faq-1-tab" tabIndex={0}>
                                    <div className="ms-faq-wrap ms-faq-wrap ms-faq-2column">
                                        <div className="accordion p-relative" id="accordionExample">
                                            <div className="ms-faq-group">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="false" aria-controls="collapseOne">Do I need studio 
                                                            experience?</button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse"
                                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Not at all. 
                                                            Most artists who record at The Attic aren't professional musicians.
                                                            We'll guide you through the process from start to finish.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            Can you help arrange or finish my song?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Absolutely. 
                                                            Whether you have a voice memo or a finished demo, we can help 
                                                            with production, arrangements, instrumentation and songwriting.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            Do I need to bring my own instruments?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse"
                                                        aria-labelledby="headingThree"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">No. 
                                                            The studio has a selection of guitars, basses, drums, 
                                                            percussion, amplifiers and other instruments available 
                                                            to use during your session.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">Can I hire session musicians?</button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse"
                                                        aria-labelledby="headingFour"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Yes. 
                                                            We work with an extensive network of professional musicians 
                                                            covering drums, strings, keyboards, woodwind, brass, backing vocals and more.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFive">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            I've already recorded elsewhere. Can you mix my music?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" className="accordion-collapse collapse"
                                                        aria-labelledby="headingFive"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Absolutely. We're happy to mix recordings from any studio.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingSix">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="false" aria-controls="collapseSix">
                                                            How many revisions are included?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" className="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Mixes include up to three revisions to make sure 
                                                            you're happy with the final result.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingSeven">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="false" aria-controls="collapseSeven">How much time should I book?</button>
                                                    </h2>
                                                    <div id="collapseSeven" className="accordion-collapse collapse collapse"
                                                        aria-labelledby="headingSeven"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">This depends on your project. 
                                                            A solo vocal session might only need a couple of hours, 
                                                            while recording a full band usually requires a full day. 
                                                            If you're unsure, just get in touch and we'll recommend 
                                                            the best option.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ms-faq-group">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingEight">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="false" aria-controls="collapseEight">
                                                            Can beginners record here?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEight" className="accordion-collapse collapse"
                                                        aria-labelledby="headingEight"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Of course. 
                                                            Many of our clients are recording their first release, 
                                                            and we'll guide you through every step of the process.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingNine">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                            aria-expanded="false" aria-controls="collapseNine">
                                                            Is parking available?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseNine" className="accordion-collapse collapse"
                                                        aria-labelledby="headingNine"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Yes!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThirteen">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThirteen"
                                                            aria-expanded="false" aria-controls="collapseThirteen">Can I book a studio tour before recording?</button>
                                                    </h2>
                                                    <div id="collapseThirteen" className="accordion-collapse collapse"
                                                        aria-labelledby="headingThirteen"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Yes! We offer a free 30 minute 
                                                            consultation/tour for those thinking about working here. 
                                                            Zoom or in person visits are possible, just reach out and we can 
                                                            organise it. 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTen">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                            aria-expanded="false" aria-controls="collapseTen">Is the studio accessible by public transport?</button>
                                                    </h2>
                                                    <div id="collapseTen" className="accordion-collapse collapse"
                                                        aria-labelledby="headingTen"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">The studio is 
                                                            serviced by the G1/G2/60 Dublin bus services as 
                                                            well as being a 30 min drive from the city centre.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingEleven">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEleven"
                                                            aria-expanded="false" aria-controls="collapseEleven">
                                                            Can I bring a photographer/producer/friend?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseEleven" className="accordion-collapse collapse"
                                                        aria-labelledby="headingEleven"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Yes, provided there's enough space for the 
                                                            session. Just let us know in advance.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwelve">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwelve"
                                                            aria-expanded="false" aria-controls="collapseTwelve">
                                                            What genres do you work with?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwelve" className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwelve"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Everything 
                                                            from indie, folk and singer-songwriter to rock, pop, jazz, 
                                                            spoken word and experimental music.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFourteen">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFourteen"
                                                            aria-expanded="false" aria-controls="collapseFourteen">
                                                            What should I bring to my session?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFourteen" className="accordion-collapse collapse"
                                                        aria-labelledby="headingFourteen"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">Lyrics, demos, reference tracks, 
                                                            instruments if you have favourites, and anything that helps you 
                                                            feel comfortable. We'll take care of the coffee!
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
                </div>
            </section>
        </>
    );
};

export default FaqArea;