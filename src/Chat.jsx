import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import becky from './assets/becky.jpg'
import confidence from './assets/confidence.jpg'
import duru from './assets/duru.jpg'
import elder from './assets/elder.jpg'
import festus from './assets/festus.jpg'
import grant from './assets/grant.jpg'
import obinna from './assets/obinna.jpg'


export default function Chat() {

    return (
        <>

            <main>
                <div className="links">
                    <Link to={'/becky'} className="link">
                        <p className="becky-img">
                            <img src={becky} alt="becky image" className="becky" />
                            <strong>Sis Becky</strong>
                        </p>
                    </Link>
                </div>
                <div className="links">
                    <Link to={'/confidence'} className="link">
                        <p className="confidence-img">
                            <img src={confidence} alt="confidence image" className="confidence" />
                            <strong>Sis Confidence</strong>
                        </p>
                    </Link>
                </div>
                <div className="links">
                    <Link to={'/duru'} className="link">
                        <p className="duru-img">
                            <img src={duru} alt="duru image" className="duru" />
                            <strong>Sir Stantley</strong>
                        </p>
                    </Link>
                </div>

                <div className="links">
                    <Link to={'/elder'} className="link">
                        <p className="elder-img">
                            <img src={elder} alt="elder image" className="elder" />
                            <strong>Elder</strong>
                        </p>
                    </Link>
                </div>

                <div className="links">
                    <Link to={'/festus'} className="link">
                        <p className="festus-img">
                            <img src={festus} alt="festus-image" className="festus" />
                            <strong>Sir Festus</strong>
                        </p>
                    </Link>
                </div>

                <div className="links">
                    <Link to={'/grant'} className="link">
                        <p className="grant-img">
                            <img src={grant} alt="grant-image" className="grant" />
                            <strong>Sir Grant</strong>
                        </p>
                    </Link>
                </div>

                <div className="links">
                    <Link to={'/obinna'} className="link">
                        <p className="obinna-img">
                            <img src={obinna} alt="obinna image" className="obinna" />
                            <strong>Sir Obinna</strong>
                        </p>
                    </Link>
                </div>
            </main >

        </>
    )

}









