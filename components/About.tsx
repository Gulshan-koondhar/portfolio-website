import React from "react";
import { educationData } from "@/constants/Education";
const About = () => {
  return (
    <section className="mt-16" id="about">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="text-justify mt-2 text-gray-400 rounded-md">
              As a visionary Front-end Web Developer, I specialize in crafting
              captivating digital experiences that combine aesthetics with
              functionality. With expertise in modern front-end frameworks
              (React, Angular, Vue.js), responsive web design, HTML5, CSS3,
              JavaScript, TypeScript, UI/UX design principles, web performance
              optimization, and accessibility, I help businesses and
              organizations establish a robust online presence. With [number]
              years of experience in the industry, I&apos;ve honed my skills
              through various projects and collaborations, driven by a
              relentless pursuit of innovation, a keen eye for detail, and a
              commitment to staying updated with the latest technologies.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className=" px-2 rounded-md">
              <div className="relative border-l-4 border-sky-300 mt-4">
                {educationData.map((item, index) => (
                  <div key={index} className="mb-8 ml-6">
                    <div className="absolute w-3 h-3 bg-blue-300 rounded-full -left-2"></div>
                    <p className="text-gray-600 font-semibold">{item.year}</p>
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <h4 className="text-gray-600 text-sm">{item.school}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
