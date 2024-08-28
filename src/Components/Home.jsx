import { forwardRef } from "react";
import { LandingPage } from "./LandingPage";
import { ReleaseSection } from "./ReleaseSection";


export const Home = forwardRef(({releaseRef, landingPageRef}, ref) => {
    return (
        <div ref={ref}>
            <LandingPage/>
            <ReleaseSection ref={releaseRef}/>
        </div>
    );
});