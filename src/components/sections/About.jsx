import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "NextJS", "TailwindCSS"];
  const backendSkills = ["NodeJS", "MongoDB", "Python"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              aplications and create innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bgblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bgblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Computer Science</strong> - Pamulang University [
                    2024-Present ]
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Frontend Developer - PT. Fly in Space [
                      Present ]
                    </h4>
                    <p>
                      Developed and maintained web applications using React,
                      NextJS, and TailwindCSS
                    </p>
                  </div>
                </div>
                {/* <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Computer Science</strong> - Pamulang University [2024-Now]
                </li>
              </ul> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
