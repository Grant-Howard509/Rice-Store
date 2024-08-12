import { Link } from "react-router-dom";


export function NavBar({color}) {

    const openNav = () => {
        let sideBar = document.getElementById('sideBar');
        let sideNav = document.getElementById('sideNav');
        sideBar.style.width = "100%";
        sideNav.style.width = "49.2%";
    }
    
    const closeNav = () => {
        let sideBar = document.getElementById('sideBar');
        let sideNav = document.getElementById('sideNav');
        sideBar.style.width = "0%";
        sideNav.style.width = "0%";
    }

    return (
        <nav className={`lg:mr-16 lg:ml-16 mr-0 ml-0 sticky top-4 ${color} Z-10`} id="nav-container">
            <div className={`flex justify-between font-bebas text-xl lg:text-2xl p-4 ${color}`}>

                <div onClick={openNav} className="lg:hidden cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div onClick={closeNav} id="sideBar" className="fixed top-0 left-0 bg-transparent w-0 h-full overflow-x-hidden duration-500 z-10">
                    <div id="sideNav" className="fixed top-0 left-0 w-0 h-full flex justify-center items-center overflow-x-hidden duration-500 z-10 bg-slate-100">

                        <div className="absolute top-0 left-0 pt-8 pl-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="cursor-pointer">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>

                        <ul className={`lg:hidden flex flex-col gap-y-9 text-3xl ${color}`}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">Tour</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <Link to='/shop'>Shop</Link>
                        </ul>
                    </div>
                </div>

                <ul className={`hidden lg:flex flex-row gap-x-2.5 ${color}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Tour</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <Link to='/shop'>Shop</Link>
                </ul>

                <div className={`lg:text-4xl text-3xl lg:basis-1/4 lg:ml-28 ${color}`}>
                    <h1 className="cursor-pointer lg:w-32">Rice Band</h1>
                </div>

                <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" d="M8 12V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"/>
                            <path d="M3.694 12.668c.145-1.741.218-2.611.792-3.14C5.06 9 5.934 9 7.681 9h8.639c1.746 0 2.62 0 3.194.528c.574.528.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843c-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323c-.297-.323-.255-.83-.17-1.843z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </nav>
    );
}