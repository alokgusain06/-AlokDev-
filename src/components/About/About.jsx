import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-12 px-8 md:px-16 lg:px-24 mt-16 md:mt-24 lg:mt-32 font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Alok Singh Gusain
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#FFD700] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'UI/UX Designer', 'Coder', 'Tech Enthusiast']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className="text-[#FFD700]">{cursor}</span>}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 md:mb-10 mt-8 leading-relaxed">
            I'm a 3rd-year B.Tech student at IIITA with a passion for full-stack development. I enjoy building
            scalable and efficient web applications and have experience working on real-world projects, focusing
            on both front-end and back-end development. My goal is to create impactful solutions that offer seamless
            user experiences.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/13sTt3TjEM6v3_FhBbVOVUUpiqD_sxjyJ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(50deg, #F7C300, #F7C300)', // Softer golden gradient
              boxShadow: '0 0 4px #F7C300, 0 0 8px #F7C300, 0 0 20px #F7C300', // Softer golden box shadow
            }}
            
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-[#FFD700] rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1200}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Alok Singh Gusain"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(255,215,0,0.5)]" // Drop shadow to match the golden color
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
