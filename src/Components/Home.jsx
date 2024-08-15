import { forwardRef } from "react";


const Home = forwardRef((props, ref) => {
    return (
        <div className="xl:bg-[url('/images/hero.jpeg')] bg-[url('/images/Ryan-RGL.jpeg')] bg-cover bg-center h-screen w-full p-50" ref={ref}></div>
    );
});

export default Home;