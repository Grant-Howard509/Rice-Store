import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Shop = forwardRef((props, ref) => {
    return (
        <div className="flex justify-center flex-col content-center w-full h-screen" ref={ref}>
                <h1 className="text-center text-white">Coming Soon...</h1>
                <button className="text-white bg-grey">
                    <Link to='/'>Back to Home</Link>
                </button>
        </div>
    );
});

export default Shop;
