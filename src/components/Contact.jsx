import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../utils/ThemeContext'; // Assuming this provides theme-related data

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const sendMail = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const serviceID = 'service_qw0yoxu';
    const templateID = 'template_8kqlu98';
    const userID = 'elp7kgLwhyTbGi7mD';

    emailjs.send(serviceID, templateID, { from_name: name, from_email: email, message }, userID)
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
        alert('Your message was sent successfully!');
      })
      .catch((err) => {
        console.error('Failed to send the email:', err);
      });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-8 pt-20 ${darkMode ? 'bg-dark-main' : 'bg-light-main'}`}>
      <div className={`max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8  rounded-lg overflow-hidden  ${darkMode ? 'shadow-[0_4px_10px_rgba(255,255,255,0.5)]' : 'shadow-xl'}`}>
        {/* Contact Details */}
        <div className={`p-8  ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-300 bg-clip-text text-transparent">
          Get in Touch
        </h2>

          <p className="mb-6">
            Feel free to reach out to me via phone, email, or social media. I'll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-primary mr-3" />
              <a href="tel:+917070782390" className="hover:underline">
                +91 7070782390
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-3" />
              <a href="mailto:shivajee141004@gmail.com" className="hover:underline">
                shivajee141004@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-2">Follow <span> Me</span></h3>
            <div className="flex space-x-5">
              <a href="https://twitter.com/shivajee_" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/shiva-jee-81469b258/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://github.com/shivajee98" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`p-8 ${darkMode ? 'bg-dark-main text-light-text' : 'bg-light-main text-dark-text'}`}>
          <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>
          <form onSubmit={sendMail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                  darkMode ? 'bg-gray-800 text-gray-200 border-sky-200' : 'bg-gray-200 text-gray-800 border-sky-100'
                }`}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                  darkMode ? 'bg-gray-800 text-gray-200 border-sky-200' : 'bg-gray-200 text-gray-800 border-sky-100'
                }`}
                required
              />
            </div>
            <textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                darkMode ? 'bg-gray-800 text-gray-200 border-sky-200' : 'bg-gray-200 text-gray-800 border-sky-100'
              }`}
              rows="6"
              required
            />
            <button
  type="submit"
  className="w-full py-3 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-sky-400 hover:to-sky-300 transition-all"
>
  Send Message
</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
