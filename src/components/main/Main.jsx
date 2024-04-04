import React from "react";
import Navbar from '../nav/Nav';
import testImage from '../../assets/test.png';
import './Main.css';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen min-w-screen bg-gradient-to-r from-orange-400 to-yellow-500">
                <header className="text-center pt-40 pb-10 mt-[-20]">
                    <h1 className="text-4xl 2xs:text-5xl xs:text-6xl font-bold text-white px-6">
                        A Language Focused AI Company
                    </h1>
                    <p className="text-xl 2xs:text-2xl text-white mt-4 px-4">
                        We make language barriers into language bridges
                    </p>
                </header>

                <div className="flex justify-center my-8">
                    <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-full transition ease-in-out duration-300 hover:scale-110 hover:bg-orange-100">
                        Get Started
                    </button>
                </div>

                <div className="flex justify-center my-12">
                    <img src={testImage} alt="Phone UI" className=" w-full 2xs:max-w-xs md:max-w-sm me-0 rounded-s" />
                </div>
                <div className="overall">
                        <div className="container">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                                    </svg>
                                    <h2>Rapid, Natural Discussion</h2>
                                    <p>We enable users to speak to AI casually. No keyword recognition</p>
                                </div>
                            </div>
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                    </svg>
                                    <h2>Global Reach</h2>
                                    <p>We can be worldwide because we enable people to tell their Story</p>
                                </div>
                            </div>
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"/>
                                    </svg>
                                    <h2>Balanced Accuracy</h2>
                                    <p>Our Language Technologies are trained to create a Balance for all.</p>
                                </div>
                            </div>
                    </div>
                </div>

                <footer className="text-center text-white py-8 text-wrap">
                    © 2024 Tale LLC. All rights reserved.
                </footer>
            </div>
        </>
    );
};

export default Main;
