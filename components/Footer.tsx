import React from 'react';
import {
  GoogleCloudLogo,
  AWSLogo,
  AzureLogo,
  IBMLogo,
  OCILogo,
  AcademicCapIcon,
  LinkedInIcon,
  DocumentTextIcon,
  GitHubIcon
} from './icons/Icons';

const socialLinks = [
  {
    name: 'Certifications',
    href: 'https://drive.google.com/file/d/1AgMc4Z3nPqVJUGJxKGy5MSjMqn9-HsrY/view?usp=sharing',
    Icon: AcademicCapIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kenneth-n-3745b46/',
    Icon: LinkedInIcon,
  },
  {
    name: 'Articles',
    href: 'https://medium.com/@kenneth.nicholaus',
    Icon: DocumentTextIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/kennethNicholaus',
    Icon: GitHubIcon,
  },
];

const partners = [
    { name: 'Google Cloud', Logo: GoogleCloudLogo, className: 'h-8' },
    { name: 'AWS', Logo: AWSLogo, className: 'h-10' },
    { name: 'Azure', Logo: AzureLogo, className: 'h-8' },
    { name: 'IBM', Logo: IBMLogo, className: 'h-10' },
    { name: 'OCI', Logo: OCILogo, className: 'h-8' },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center items-center gap-8 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label={link.name}
            >
              <link.Icon className="w-7 h-7" />
            </a>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-8">Our Cloud Partners</h3>
          <div className="flex justify-center items-start flex-wrap gap-x-10 gap-y-8">
             {partners.map((partner) => (
                <div key={partner.name} className="flex flex-col items-center gap-3 w-28">
                    <partner.Logo className={`${partner.className} text-gray-400`} />
                    <span className="text-xs text-gray-500 font-medium">{partner.name}</span>
                </div>
             ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SUBMIT-AI. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Pioneering AI-Powered Enterprise Transformation
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;