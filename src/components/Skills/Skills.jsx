import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="relative py-12 px-8 md:px-16 lg:px-24 mt-16 md:mt-24 lg:mt-32 font-sans bg-gradient-to-b from-[#0d0d0d] via-[#111] to-[#1a1a1a]"
  >
    {/* Golden glow radial background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,215,0,0.05)_0%,transparent_80%)]" />
    </div>

    {/* Content */}
    <div className="relative z-10">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the technical skills and knowledge I've gained through various projects and hands-on work.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(255,215,0,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-4 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-gray-800 border-2 border-[#FFD700] rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-100">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
