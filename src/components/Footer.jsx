import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light-navy py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-light-slate mb-4">GlobalTrade</h3>
            <p className="text-slate">
              Your gateway to international markets, offering streamlined and reliable export-import solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-light-slate mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate hover:text-sky-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-light-slate mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[FaLinkedin, FaTwitter, FaFacebook].map((Icon, index) => (
                <a key={index} href="#" className="text-slate hover:text-sky-blue transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate/20 mt-8 pt-8 text-center text-slate">
          <p>© 2025 GlobalTrade Inc. All rights reserved.</p>
          <p className="mt-2">Last updated September 15, 2025 in Dhaka, Bangladesh.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
