import { useEffect, useState } from "react";

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className="font-rock_salt lg:bg-[url('/images/hero.jpeg')] bg-[url('/images/Ryan-RGL.jpeg')] bg-cover bg-center bg-fixed h-screen w-full text-white flex flex-col justify-between items-center">        
            <div className="flex flex-col justify-center items-center flex-grow">
                <div className="overflow-hidden p-3">
                    <h1 className="xl:text-8xl sm:text-7xl text-5xl">
                        <span className="block">
                            <span className={`block w-full h-full ${isVisible ? 'animate-slideUp' : ''}`}>
                                Slow Down
                            </span>
                        </span>
                    </h1>
                </div>

                <button className={`font-bebas w-44 bg-blue-500 text-2xl p-3 xl:mt-20 sm:mt-12 mt-8 rounded-sm transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Listen Now
                </button>
            </div>

            <div className="font-bebas mb-5 sm:text-2xl">
                Scroll Down 
                <div className="flex justify-center mt-2">
                    <span className="block text-center animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m12 20l-.707.707l.707.707l.707-.707zm1-15a1 1 0 1 0-2 0zm-7.707 9.707l6 6l1.414-1.414l-6-6zm7.414 6l6-6l-1.414-1.414l-6 6zM13 20V5h-2v15z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;