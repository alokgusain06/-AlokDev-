import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll behavior for active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/alokgusain06",
      icon: <FaGithub size={24} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/gusainalok/",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414]/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer select-none">
          <span className="text-[#FFD700]">&lt;</span>
          <span>Alok</span>
          <span className="text-[#FFD700]">/</span>
          <span>Gusain</span>
          <span className="text-[#FFD700]">&gt;</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`hover:text-[#FFD700] transition ${
                  activeSection === id ? "text-[#FFD700] font-medium" : ""
                }`}
                onClick={() => handleMenuItemClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-300 hover:text-[#FFD700] transition"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#FFD700] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#FFD700] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#050414]/90 backdrop-blur-md rounded-lg shadow-lg z-50 md:hidden">
          <ul className="flex flex-col items-center space-y-5 py-6 text-gray-300">
            {menuItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`hover:text-white transition ${
                    activeSection === id ? "text-[#FFD700] font-medium" : ""
                  }`}
                  onClick={() => handleMenuItemClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-300 hover:text-white transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
