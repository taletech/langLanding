import testImage from "../../../assets/test.png";
import React from "react";

const LandingHome = () => {
    return (
        <>
        <header className="text-center pt-40 pb-10 mt-[-20]">
        <h1 className="text-4xl 2xs:text-5xl xs:text-6xl font-bold text-white px-6">
            A Language Focused AI Company
        </h1>
        <p className="text-xl 2xs:text-2xl text-white mt-4 px-4">
            We make language barriers into language bridges
        </p>
    </header>

    <div className="flex justify-center my-8">
        <button
            className="bg-white text-orange-500 font-bold py-2 px-4 rounded-full transition ease-in-out duration-300 hover:scale-110 hover:bg-orange-100">
            Get Started
        </button>
    </div>

    <div className="flex justify-center my-12">
        <img src={testImage} alt="Phone UI"
             className=" w-full 2xs:max-w-xs md:max-w-sm me-0 rounded-s"/>
    </div>
            </>
    );
}
export default LandingHome;