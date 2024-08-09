import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div className="mr-24 ml-24">
            <div className="nav_links flex justify-between">

                <div className="block xl:hidden">
                    Menu
                </div>

                <ul className=" hidden xl:flex flex-row gap-x-2.5">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Tour</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <Link to='/shop'>Shop</Link>
                </ul>

                <div>
                        <a href="#">Bag</a>
                </div>
            </div>
        </div>
    );
}