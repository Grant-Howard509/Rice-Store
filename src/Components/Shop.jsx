import { Link } from "react-router-dom";

export function Shop() {
    return (
        <div className="flex justify-center flex-col content-center w-full h-screen">
                <h1 className="text-center">Coming Soon...</h1>
                <button>
                    <Link to='/'>Back to Home</Link>
                </button>
        </div>
    );
}