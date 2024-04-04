import {useState} from "react";
import logo from "../../assets/temp-logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav  className="flex items-center justify-between flex-wrap p-6 bg-orange-500 fixed w-full z-10">
            <a href="/" className="flex items-center flex-shrink-0 text-black mr-6">
                <div className="drop-shadow-lg transition ease-in-out duration-300 hover:scale-110">
                    <img src={logo} alt="Logo" className="h-12 w-auto"/>
                </div>

            </a>

            <button onClick={() => setIsOpen(!isOpen)} className="block min-[480px]:hidden px-2 py-1 border rounded text-white border-white hover:text-orange-300 hover:border-orange-300">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <div className={`${isOpen ? 'block' : 'hidden'} w-full min-[480px]:flex min-[480px]:items-center min-[480px]:w-auto`}>
                <div className="text-sm min-[480px]:flex-grow">
                    <a href="#features" className="block mt-4 min-[480px]:inline-block min-[480px]:mt-0 text-white transition ease-in-out duration-300 hover:scale-105 hover:text-indigo-100 mr-8">
                        Features
                    </a>
                    <a href="#pricing" className="block mt-4 min-[480px]:inline-block min-[480px]:mt-0 text-white transition ease-in-out duration-300 hover:scale-105 hover:text-indigo-100 mr-8 ">
                        Pricing
                    </a>
                    <a href="#contact" className="block mt-4 min-[480px]:inline-block min-[480px]:mt-0 text-white transition ease-in-out duration-300 hover:scale-105 hover:text-indigo-100 mr-8 ">
                        Contact
                    </a>
                </div>
                <a href="#login" className="block mt-4 min-[480px]:inline-block min-[480px]:mt-0 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent transition ease-in-out duration-300 hover:scale-105 hover:text-indigo-100 hover:bg-white hover:bg-opacity-50 ">
                    Login
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
