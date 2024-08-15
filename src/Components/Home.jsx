import { forwardRef } from "react";
import LandingPage from "./LandingPage";


const Home = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <LandingPage />
        </div>
    );
});

export default Home;