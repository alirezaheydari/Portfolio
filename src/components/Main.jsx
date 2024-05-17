import React from "react"
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
    return (
        <div id='main'>
            {/* <img className="" src="https://www.shutterstock.com/shutterstock/photos/1798231258/display_1500/stock-vector-blogger-or-user-with-laptop-computer-on-remote-work-from-home-office-line-vector-icon-editable-1798231258.jpg" alt="" /> */ }
            <img className="w-full h-screen" src="https://www.shutterstock.com/image-photo/naked-blonde-bath-high-angle-600w-2302696421.jpg" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800" >I'm Alireza Heydari</h1>
                    <h2 className="flex sm:text-2xl pt-4 text-gray-800 items-center" >I'm a
                        <TypeAnimation
                            sequence={ [
                                'Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                            ] }
                            wrapper="span"
                            speed={ 50 }
                            style={ { fontSize: '1em', padding: '5px', display: 'inline-block' } }
                            repeat={ Infinity }
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <FaTwitter size={20} className="cursor-pointer" />
                        <FaFacebookF size={20} className="cursor-pointer" />
                        <FaInstagram size={20} className="cursor-pointer" />
                        <FaLinkedinIn size={20} className="cursor-pointer" />
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Main;
