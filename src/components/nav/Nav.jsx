const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6 bg-amber-400">
            <div className="flex items-center flex-shrink-0 text-black mr-6">

                <img src="/path-to-your-logo.png" alt="Tale" className="h-8 w-auto" />

            </div>

            <div className="block lg:hidden">

            </div>

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#features" className="inline-block mt-4 lg:mt-0 text-white hover:text-orange-300 mr-4">
                        Features
                    </a>
                    <a href="#pricing" className="inline-block mt-4 lg:mt-0 text-white hover:text-orange-300 mr-4">
                        Pricing
                    </a>
                    <a href="#contact" className="inline-block mt-4 lg:mt-0 text-white hover:text-orange-300">
                        Contact
                    </a>
                </div>
                    <a href="#login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0">
                        Login
                    </a>
            </div>
        </nav>
    );
};

export default Navbar;
