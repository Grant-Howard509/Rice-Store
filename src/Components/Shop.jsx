import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Shop = forwardRef((props, ref) => {
    return (
        <div className="flex justify-center flex-col items-center w-full h-screen bg-blue-800" ref={ref}>
                <h1 className="text-center text-white">Coming Soon...</h1>
                <button className="text-black bg-slate-300 w-36 p-2">
                    <Link to='/'>Back to Home</Link>
                </button>
        </div>
    );
});

export default Shop;
