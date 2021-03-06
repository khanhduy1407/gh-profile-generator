import React from 'react';
import { Link } from 'gatsby';
import links from '../constants/page-links';
import logo from '../images/mdg.png';
import discord from '../images/Discord-Logo.png';

const Footer = () => (
  <div className="bg-gray-100 p-4 flex flex-col justify-center items-center shadow-inner mt-2">
    <div className="w-full flex flex-col sm:flex-row justify-evenly py-2">
      <div className="sm:ml-0 sm:mr-6 order-last sm:order-none flex">
        <h1 className="text-base font-bold font-title text-xl sm:text-2xl mt-3 sm:mt-0">
          <div className="flex sm:flex-col items-start mb-3 sm:mb-0">
            <img src={logo} className="hidden sm:block h-24" alt="github profile markdown generator logo" />
            <div className="mr-2 sm:mr-0">
              GitHub Profile <img src={logo} className="inline sm:hidden h-12" alt="github profile markdown generator logo" />
              <span className="block sm:inline">README Generator</span>
            </div>
          </div>
        </h1>
      </div>
      <div className="text-xl sm:text-base font-light sm:font-normal">
        <div className="font-title font-bold mb-4 sm:mb-2">
          <strong>Pages</strong>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.addons} activeStyle={{ color: '#002ead' }}>
            Addons
          </Link>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.support} activeStyle={{ color: '#002ead' }}>
            Support
          </Link>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.about} activeStyle={{ color: '#002ead' }}>
            About
          </Link>
        </div>
      </div>
      <div className="text-xl sm:text-base font-light sm:font-normal">
        <div className="font-title font-bold my-4 sm:my-0 sm:mb-2">
          <strong>More</strong>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://github.com/khanhduy1407/gh-profile-generator" aria-label="Github khanhduy1407/gh-profile-generator" target="blank">
            Github
          </a>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://github.com/khanhduy1407/gh-profile-generator/issues" aria-label="Issues in khanhduy1407/gh-profile-generator" target="blank">
            Issues
          </a>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://github.com/khanhduy1407/gh-profile-generator/pulls" aria-label="Pull Requests in khanhduy1407/gh-profile-generator" target="blank">
            Pull Requests
          </a>
        </div>
      </div>
    </div>
    <div className="py-2 mt-2">
      Developed by NKDuy
    </div>
  </div>
);
export default Footer;
