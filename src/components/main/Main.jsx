import React from "react";
import Navbar from '../nav/Nav';
import testImage from '../../assets/test.png';
import './Main.css';
import LandingHome from "./sections/LandingHome";
import FloatingCards from "./sections/FloatingCards";
import PricingTiers from "./sections/PricingTiers";
import ContactUs from "./sections/ContactUs";
const Main = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-screen min-w-screen bg-gradient-to-r from-orange-400 to-yellow-500">
                <section id="home">
                    <LandingHome/>
                </section>
                <section id="features">
                    <FloatingCards/>
                </section>
                <section id="pricing">
                    <PricingTiers/>
                </section>
                <section id="contact">
                    <ContactUs/>
                </section>

                <footer className="text-center text-white py-8 text-wrap">
                    © 2024 Tale LLC. All rights reserved.
                </footer>
            </div>
        </>
    );
};

export default Main;
