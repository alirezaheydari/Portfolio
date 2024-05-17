import React from "react";
import ProjectItem from "./ProjectItem";
import berlinImg from '../assets/Berlin.jpg'
import londonImg from '../assets/London.jpg'

const Projects = () => {
    return (
        <div id='projects' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8 ">
                Lerem ipsum dolor sit amet consectetur adipiscing elit. incidunt maxime laudantium.
                Lerem ipsum dolor sit amet consectetur adipiscing elit. incidunt maxime laudantium.
                Lerem ipsum dolor sit amet consectetur adipiscing elit. incidunt maxime laudantium.
                Lerem ipsum dolor sit amet consectetur adipiscing elit. incidunt maxime laudantium.
                Lerem ipsum dolor sit amet consectetur adipiscing elit. incidunt maxime laudantium.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={berlinImg} title='Crypto App' />
                <ProjectItem img={londonImg} title='Crypto App' />
            </div>
        </div>
    );
};

export default Projects;
