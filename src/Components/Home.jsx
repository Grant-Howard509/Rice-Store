import { forwardRef } from "react";


const Home = forwardRef((props, ref) => {
    return (
        <div className="bg-black h-screen w-full p-50 text-white" ref={ref}>
            home page
        </div>
    );
});

export default Home;