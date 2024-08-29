import { forwardRef } from "react";

export const ReleaseSection = forwardRef((props, ref) => {
    return(
            <div className="flex 2xl:flex-row flex-col justify-center items-center w-full h-screen sm:p-20 p-11" ref={ref}>
                <div className="2xl:w-2/5 md:w-2/3 w-full 2xl:mb-0 mb-12">
                    <h1 className="font-bebas xl:text-9xl md:text-7xl text-5xl">NEW SINGLE IS OUT!</h1>

                    <div className=" lg:w-560 sm:w-96 mt-5">
                        <p className="xl:text-2xl md:text-xl">Check out our new single Slow Down! Now available on all streaming services. Whole discography can be found using the link below!</p>
                    </div>

                    <button className="font-bebas w-44 xl:w-52 bg-slate-800 text-white text-2xl xl:text-3xl p-4 mt-12 rounded-sm ">ALL RELEASES</button>
                </div>

                <div className="bg-[url('/images/Album.jpeg')] md:w-560 w-full aspect-[1/1] bg-contain bg-left bg-no-repeat cursor-pointer"></div>
            </div>
    );
});