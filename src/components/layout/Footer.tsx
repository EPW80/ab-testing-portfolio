import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/epw80',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/erikpwilliams',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:contact@example.com',
    },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-heading font-bold mb-4 hover:text-primary-400 transition-colors"
            >
              <TrendingUp className="w-6 h-6 text-primary-400" />
              <span>ConversionLab</span>
            </Link>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Showcasing A/B testing expertise and conversion optimization through
              real case studies and measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#case-studies"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary-300 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-300 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8">
          <p className="text-center text-secondary-400 text-sm">
            &copy; {currentYear} ConversionLab. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
