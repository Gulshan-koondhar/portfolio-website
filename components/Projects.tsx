import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = [
  {
    title: "Panaverse Dao Landing Page",
    ImageSrc: "/Panaverse.png",
    codeLink: "https://github.com/Gulshan-koondhar/panaverse-dao",
    webLink: "https://panaverse-dao-pearl.vercel.app/",
    lang: ["#React", "#NextJS", "#Tailwind CSS", "#TypeScript"],
  },
  {
    title: "VirualR Landing Page",
    ImageSrc: "/VirtualR.png",
    codeLink:
      "https://github.com/Gulshan-koondhar/Landing-Page/tree/main/VirtualR%20Landing%20Page",
    webLink: "https://virtualrlandingpage.vercel.app/",
    lang: ["#React", "#NextJS", "#Tailwind CSS", "#TypeScript"],
  },
  {
    title: "FoodTuck Restaurant",
    ImageSrc: "/foodwebsite.PNG",
    codeLink: "https://github.com/Gulshan-koondhar/foodtuckrestaurant",
    webLink: "https://foodtuckrestaurant.vercel.app/",
    lang: ["#React", "#NextJS", "#Tailwind CSS", "#TypeScript"],
  },
  {
    title: "E-Commerce Website",
    ImageSrc: "/E-commerce.PNG",
    codeLink: "https://github.com/Gulshan-koondhar/e-commerce",
    webLink: "https://e-commerce-website-two-ashen.vercel.app/",
    lang: ["#React", "#NextJS", "#Tailwind CSS", "#TypeScript"],
  },
  {
    title: "Resume Builder",
    ImageSrc: "/ResumeBuilder.PNG",
    codeLink: "https://github.com/Gulshan-koondhar/Resume-Builder",
    webLink: "https://resume-builder-gamma-six.vercel.app/",
    lang: ["#HTML", "#CSS", "#TypeScript"],
  },
  {
    title: "MetaBlog",
    ImageSrc: "/MetaBlog.PNG",
    codeLink: "https://github.com/Gulshan-koondhar/MileStone-3---Assignemnt",
    webLink: "https://blog-website-assignment-three.vercel.app/",
    lang: ["#React", "#NextJS", "#TypeScript", "#TailwindCSS"],
  },
  {
    title: "Weather App",
    ImageSrc: "/WeatherApp.jpg",
    codeLink: "https://github.com/Gulshan-koondhar/Weather-App",
    webLink: "https://weather-app-beige-iota-32.vercel.app/",
    lang: ["#HTML", "#JavaScript", "#CSS"],
  },
  {
    title: "To-Do App",
    ImageSrc: "/TodoApp.png",
    codeLink: "https://github.com/Gulshan-koondhar/To-Do-App",
    webLink: "https://to-do-app-blue-gamma.vercel.app/",
    lang: ["#HTML", "#JavaScript", "#CSS"],
  },
  {
    title: "Expense Tracker",
    ImageSrc: "/ExpenseTracker.png",
    codeLink: "https://github.com/Gulshan-koondhar/Expense-Tracker",
    webLink: "https://expense-tracker-one-ivory.vercel.app/",
    lang: ["#HTML", "#JavaScript", "#CSS"],
  },
  {
    title: "Simple Calculator",
    ImageSrc: "/SimpleCalculator.png",
    codeLink:
      "https://github.com/Gulshan-koondhar/Codesoft/tree/main/Level%201/Task%203",
    webLink: "https://simple-calculator-amber-beta.vercel.app/",
    lang: ["#HTML", "#JavaScript", "#CSS"],
  },
];

const Projects = () => {
  return (
    <section className="mt-20" id="projects">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-xl font-bold">Projects</h1>
        <div className="flex flex-wrap gap-1 w-full justify-evenly">
          {Project.map(({ title, ImageSrc, codeLink, webLink, lang }, key) => (
            <div
              key={key}
              className="sm:w-1/4 mt-4 bg-slate-500  mb-5 rounded-t-md rounded-b-md pb-2"
            >
              <Image
                src={ImageSrc}
                alt={title}
                width={500}
                height={10}
                className="w-full rounded-t-md hover:scale-105"
              />
              <h1 className="text-center  text-lg text-gray-900 font-semibold">
                {title}
              </h1>
              <ul className="flex w-full flex-wrap gap-3 items-center justify-center mt-4">
                {lang.map((item, index) => (
                  <li
                    key={index}
                    className="list-none text-sm text-blue-800 bg-slate-400 rounded-md px-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex w-full justify-evenly items-center mt-6">
                <Link
                  href={codeLink}
                  className="bg-sky-950 rounded-full py-1 px-4"
                >
                  Code
                </Link>
                <Link
                  href={webLink}
                  className="bg-sky-950 rounded-full py-1 px-4"
                >
                  Website
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
