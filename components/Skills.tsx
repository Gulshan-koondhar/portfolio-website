const services = [
  {
    title: "Web Development",
    desc: "Get attractive, Modern and Responsie Website for Your Business",
  },
];

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 }, // Represent skill level as percentage
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "React", level: 65 },
  { name: "Next.js", level: 60 },
  { name: "Node.js", level: 50 },
  { name: "Git", level: 70 },
];

const Skills = () => {
  return (
    <div>
      <section className="mt-28" id="skills">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-xl font-bold mt-16">Skills</h2>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 lg:flex-1 mt-2">
              <h1 className="text-xl font-semibold">Services</h1>
              <div className="flex flex-wrap items-center justify-center">
                {services.map(({ title, desc }, key) => {
                  return (
                    <div
                      key={key}
                      className="bg-zinc-800 rounded-md p-4 w-60 text-center mt-8 "
                    >
                      <h1 className="text-lg font-semibold mb-2">{title}</h1>
                      <p className="text-gray-500">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1 mt-2">
              <h1 className="text-xl font-semibold">Skills</h1>
              <div className="flex flex-wrap items-center justify-center">
                {skills.map(({ name, level }, index) => {
                  return (
                    <div key={index} className="rounded-lg shadow-sm">
                      <div className="relative w-32 h-32">
                        <svg className="w-full h-full">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="50"
                            stroke="gray"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="50%"
                            cy="50%"
                            r="50"
                            stroke="blue"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="314"
                            strokeDashoffset={314 - (314 * level) / 100}
                            className="transition-all duration-500 ease-in-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-sm">{name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
