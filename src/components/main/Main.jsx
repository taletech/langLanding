import React from "react";

const Main = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-orange-400 to-yellow-500">
            <nav className="bg-transparent">
            </nav>

            <header className="text-center pt-20 pb-10">
                <h1 className="text-6xl font-bold text-white">
                    Your Language AI Solution
                </h1>
                <p className="text-2xl text-white mt-4">
                    Explore the power of AI to break language barriers.
                </p>
            </header>

            <div className="flex justify-center">
                <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-full hover:bg-orange-100 transition duration-300">
                    Get Started
                </button>
            </div>
            <footer className="text-white">
            </footer>
        </div>
    );
};

export default Main;
