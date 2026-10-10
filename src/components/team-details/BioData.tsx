import Link from 'next/link';
import React from 'react';

const BioData = () => {
    return (
        <>
            <div className="ms-team-item-details mb-50">
                {/*<h4>Biography:</h4>

                <p>Finn, the Sound Wizard, has a rare gift for finding 
                    magic in ordinary places. Whenever the streets of 
                    Cork grow quiet and the moon hangs over the River 
                    Lee, he knows to keep an eye out for Wok and Roll—a 
                    mysterious little place that only appears at night 
                    for those who truly need it. No map can find it, no 
                    one can remember exactly where it stood the next 
                    morning, but Finn always follows the warm scent 
                    of noodles and spices until the glowing sign flickers 
                    into view.</p>
                <h4>Proffesional Life:</h4>

                <p>The food at Wok and Roll is said to carry a little 
                    enchantment in every bite. A steaming box of fried 
                    rice can restore a weary traveller's spirit, while 
                    the perfect spring roll has been known to banish 
                    even the darkest mood. Finn insists the magic isn't 
                    just in the recipes—it's in the timing. Wok and Roll 
                    appears only when someone has had a long day, an empty 
                    stomach, and just enough hope left to believe that somewhere
                     in Cork, a midnight feast is waiting for them.</p>*/}

                <div className="ms-footer-social mb-15 d-flex align-items-center mt-30">
                    <div className="follow-text">Find me on Instagram:</div>
                    <Link href="https://www.instagram.com/finnreuben/" title="Instagram" target="_blank">INSTAGRAM</Link>
                </div>
            </div>
        </>
    );
};

export default BioData;