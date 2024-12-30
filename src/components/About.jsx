import React, { useEffect, useState } from 'react';
import { useTheme } from '../utils/ThemeContext';
import profileImage from '../assets/profileImage.jpeg';

const About = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // Track selected service
  const [selectedProject, setSelectedProject] = useState(null); // Track selected project

  // Service projects data
  const serviceProjects = {
    'Web Development': [
      { name: 'E-commerce Website', url: 'https://example.com/ecommerce', description: 'A fully responsive e-commerce platform.' },
      { name: 'Portfolio Website', url: 'https://example.com/portfolio', description: 'A personal portfolio showcasing skills.' },
    ],
    'DevOps Services': [
      { name: 'CI/CD Pipeline Setup', url: 'https://example.com/cicd', description: 'Automated build and deployment pipeline.' },
      { name: 'Cloud Infrastructure Management', url: 'https://example.com/cloud', description: 'Cloud infrastructure management using AWS.' },
    ],
    'Android Development': [
      { name: 'Task Manager App', url: 'https://example.com/task-manager', description: 'A to-do list app with task management.' },
      { name: 'Weather App', url: 'https://example.com/weather', description: 'A weather forecasting mobile application.' },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills-section');
      const top = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      }

      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimatedSkills((prevSkills) =>
          prevSkills.map((skill) =>
            skill.percentage < skill.target
              ? { ...skill, percentage: skill.percentage + 1 }
              : skill
          )
        );
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    const skills = [
      { name: 'React', target: 90 },
      { name: 'JavaScript', target: 75 },
      { name: 'Java', target: 80 },
      { name: 'Python', target: 90 },
      { name: 'DevOps', target: 70 },
      { name: 'AWS', target: 75 },
    ];
    setAnimatedSkills(skills.map((skill) => ({ ...skill, percentage: 0 })));
  }, []);

  const services = ['Web Development', 'DevOps Services', 'Android Development'];

  // Handle service click
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSelectedProject(null); // Reset selected project when a new service is clicked
  };

  // Handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="about-container p-4 mt-10">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div className="h-full bg-sky-500" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="profile-section flex flex-col items-center lg:flex-row lg:justify-between p-8 shadow-lg rounded-lg my-4">
        <div className="profile-image-container w-full lg:w-1/3 flex justify-center lg:justify-start">
          <img src={profileImage} alt="Profile" className="rounded-full w-48 h-48 lg:w-64 lg:h-64" />
        </div>
        <div className="profile-details w-full lg:w-2/3 mt-4 lg:mt-0 text-center lg:text-left">
          <table className={`mt-4 w-full ${darkMode ? 'text-white' : 'text-black'}`}>
            <tbody>
              <tr><td><b>Name:</b></td><td>Shivajee</td></tr>
              <tr><td><b>Birthdate:</b></td><td>14 October 2004</td></tr>
              <tr><td><b>Nationality:</b></td><td>Indian</td></tr>
              <tr><td><b>Experience:</b></td><td>2.5 years</td></tr>
              <tr><td><b>Address:</b></td><td>Meerut</td></tr>
              <tr><td><b>Languages:</b></td><td>Hindi, English</td></tr>
              <tr><td><b>Phone:</b></td><td>+91 7070782390</td></tr>
              <tr><td><b>Email:</b></td><td>shivajee141004@gmail.com</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div id="fun-facts-section" className={`fun-facts-section p-8 shadow-lg rounded-lg my-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4  ${darkMode ? 'text-white' : 'text-black'}`}>Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="fun-fact-item shadow-lg p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lines of Code</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(10000 * scrollProgress / 100)}</p>
          </div>
          <div className="fun-fact-item shadow-lg p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects Completed</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(10 * scrollProgress / 100)}</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills-section" className="skills-section p-8 shadow-lg rounded-lg my-4">
  <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
    Programming Skills
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {animatedSkills.map((skill) => (
      <div key={skill.name} className="relative w-full bg-gray-300 rounded-full h-6 mb-6 shadow-lg">
        {/* Progress Bar Background */}
        <div
          className="progress-bar-bg w-full h-full rounded-full bg-gradient-to-r from-teal-400 via-sky-500  to-indigo-600"
          style={{ width: `${skill.percentage}%` }}
        />
        
        {/* Skill Name */}
        <span
          className={`absolute left-0 ml-2 text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {skill.name}
        </span>

        {/* Percentage Tooltip */}
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8  text-black py-1 px-2 rounded-full  transition-opacity duration-300 opacity-0 skill-tooltip ${darkMode ? 'text-white ' : 'text-black '}`}
          style={{ opacity: skill.percentage > 0 ? 1 : 0 }}
        >
          {skill.percentage}%
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Services Section */}
      <div className="services-section p-8 shadow-lg rounded-lg my-4">
        <h2 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4  ${darkMode ? 'text-white' : 'text-black'}`}>Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {services.map((service) => (
            <div key={service} className="service-item shadow-lg p-4 rounded-lg bg-gray-100 hover:bg-sky-400 dark:bg-gray-800 cursor-pointer" onClick={() => handleServiceClick(service)}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service}</h3>
            </div>
          ))}
        </div>

        {/* Display projects for selected service */}
        {selectedService && (
          <div className="projects-section mt-8">
            <h3 className={`text-xl font-bold mb-4  ${darkMode ? 'text-white' : 'text-black'}`}>Projects in {selectedService}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceProjects[selectedService].map((project) => (
                <div key={project.name} className="project-item shadow-lg p-4 rounded-lg bg-gray-100 hover:bg-sky-400 dark:bg-gray-800 cursor-pointer" onClick={() => handleProjectClick(project)}>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-400">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display iframe for selected project */}
        {selectedProject && (
          <div className="iframe-section mt-8">
            <h3 className={`text-xl font-bold  mb-4  ${darkMode ? 'text-white' : 'text-black'}`}>Project Details</h3>
            <iframe src={selectedProject.url} title={selectedProject.name} className="w-full h-64 border-0" />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
