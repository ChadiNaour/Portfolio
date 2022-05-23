import React from 'react';
// import Hero from "../assets/images/hero.jpeg"

const HeroPart = () => {
    return (
        <div>
            <div className="bg-black max-w-screen box-border">
                <div className="flex  max-w-screen relative text-center">
                    {/* <img className="hidden w-full object-cover block mx-auto  sm:block sm:w-full" style={{height: "60vh"}}
                        src={Hero}
                        alt="Banner" /> */}
                    <div className="w-full h-96 2xl:hidden 2xl:h-auto object-cover block mx-auto  sm:block sm:w-full" />
                    <div className="absolute  h-full w-full md:w-1/2 flex justify-center items-center">
                        <div className="h-full flex flex-col justify-center items-start">
                            <div className="mb-4">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-white  font-abhaya-libre font-medium  z-10 content-center w-full">The Best in Men's Jewelry</h1>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-lg md:text:xl lg:text-2xl 2xl:text-3xl text-white  font-abhaya-libre  font-light  z-10 content-center w-full">FREE SHIPPING <span className="text-gold"> + </span> 2 FREE GIFTS</h1>
                            </div>
                            <a href="#" className="font-montserrat  text-white sm:font-2xl uppercase py-4 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-gold hover:bg-darkgold mt-0 sm:mt-2"><span className="text-white">Shop Now</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroPart;