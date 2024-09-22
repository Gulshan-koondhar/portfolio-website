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
    <section className="mt-20" id="skills">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 mt-2">
            <h1 className="text-xl font-semibold">Services</h1>
            <div>
              {services.map(({ title, desc }, key) => {
                return (
                  <div
                    key={key}
                    className="bg-zinc-800 rounded-md p-4 w-60 text-center mt-8"
                  >
                    <h1 className="text-lg font-semibold mb-2">{title}</h1>
                    <p className="text-gray-500">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 mt-2">
            <h1 className="text-xl font-semibold">SKills</h1>
            {skills.map(({ name, level }, index) => {
              return (
                <div key={index} className="rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
