import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-red-500 shadow-md text-black py-4">
      <div className="container mx-auto text-center">
        
        
        {/* Copyright */}
        <p className='text-white'>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

