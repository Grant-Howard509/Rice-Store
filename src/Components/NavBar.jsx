import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div className="mr-16 ml-16 sticky top-4">
            <div className="nav_links flex justify-between font-bebas text-xl lg:text-2xl  m-4">

                <div className="lg:hidden">
                    Menu
                </div>

                <ul className=" hidden lg:flex flex-row gap-x-2.5">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Tour</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <Link to='/shop'>Shop</Link>
                </ul>

                <div className="lg:text-4xl text-3xl lg:basis-3/12">
                    Rice Band
                </div>

                <div>
                        <a href="#">Bag</a>
                </div>
            </div>
        </div>
    );
}