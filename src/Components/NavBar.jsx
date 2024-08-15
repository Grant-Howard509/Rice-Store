import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export function NavBar({color}) {

    const [isSideBarOpen, setSideBar] = useState(false);
    const location = useLocation();
    const [isShop, setIsShop] = useState(false);
    let pathname = location.pathname;

    const toggleNav = () => {
        setSideBar(!isSideBarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setSideBar(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSideBarOpen]);

    useEffect(() => {
        setIsShop(pathname === '/shop');
    }, [pathname]);

    return (
        <nav className={"xl:pr-12 xl:pl-12 fixed top-0 w-full z-10"} id="nav-container">
            <div className={"flex justify-between font-bebas text-xl lg:text-3xl p-4"}>

                {/* Hamburger Icon */}
                <div onClick={toggleNav} className={`xl:hidden cursor-pointer ${color} duration-500`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" strokeLinejoin="round"/>
                    </svg>
                </div>


                {/* Sidebar */}
                <div onClick={toggleNav} id="sideBar" className={`fixed top-0 left-0 bg-transparent w-0 h-full overflow-x-hidden ${!isSideBarOpen ? 'duration-500' : 'duration-500 w-full'} z-10`}>
                    <div id="sideNav" className={`fixed top-0 left-0 w-0 h-full flex justify-center items-center overflow-x-hidden ${!isSideBarOpen ? 'duration-500' : 'duration-500 w-1/2'} z-10 bg-white border-r-2 border-black`}>

                        <div className="absolute top-4 left-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="cursor-pointer">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>

                        {isShop ? 
                        (
                            <ul className="flex flex-col gap-y-9 text-3xl">
                                <Link to='/'>Home</Link>
                                <Link to='/'>Music</Link>
                                <Link to='/'>Tour</Link>
                                <Link to='/'>About</Link>
                                <Link to='/'>Contact</Link>
                                <Link to='/shop'>Shop</Link>
                            </ul>
                        ) :

                        (
                            <ul className="flex flex-col gap-y-9 text-3xl">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Music</a></li>
                                <li><a href="#">Tour</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <Link to='/shop'>Shop</Link>
                            </ul>
                        )}

                    </div>
                </div>

                {/* Main navigation */}
                {isShop ? 
                        (
                            <ul className={`hidden xl:flex flex-row gap-x-2.5 ${color} duration-300`}>
                                <Link to='/'>Home</Link>
                                <Link to='/'>Music</Link>
                                <Link to='/'>Tour</Link>
                                <Link to='/'>About</Link>
                                <Link to='/'>Contact</Link>
                                <Link to='/shop'>Shop</Link>
                            </ul>
                        ) :

                        (
                            <ul className={`hidden xl:flex flex-row gap-x-2.5 ${color} duration-300`}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Music</a></li>
                                <li><a href="#">Tour</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <Link to='/shop'>Shop</Link>
                            </ul>
                        )}

                {/* Band Logo */}
                <div className={`xl:hidden lg:text-4xl text-4xl xl:basis-1/4  ${color} duration-300`}>
                    <Link to='/'>
                        <h1 className="cursor-pointer lg:w-30">Rice Band</h1>
                    </Link>
                </div>

                {/* Cart Icon */}
                <Link to='/shop'>                
                    <div className={`cursor-pointer ${color} duration-300`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" d="M8 12V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"/>
                                <path d="M3.694 12.668c.145-1.741.218-2.611.792-3.14C5.06 9 5.934 9 7.681 9h8.639c1.746 0 2.62 0 3.194.528c.574.528.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843c-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323c-.297-.323-.255-.83-.17-1.843z"/>
                            </g>
                        </svg>
                    </div>
                </Link>
            </div>
        </nav>
    );
}