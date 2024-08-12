import { forwardRef } from "react";


const Home = forwardRef(({}, ref) => {
    return (
        <div className="bg-black h-screen w-full p-50" ref={ref}>
            yes
        </div>
    );
});

export default Home;