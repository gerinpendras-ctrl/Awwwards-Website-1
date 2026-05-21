import React from 'react'
import { LuGlobe } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const links = [
  {href: 'https://gerinpendras.site', icon: <LuGlobe/>},
  {href: 'https://github.com/gerinpendras-ctrl/', icon: <FaGithub/>},
  {href: 'linkedin.com/in/gerin-pendras-9b4170191', icon:<FaLinkedin/>}
]

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Gerin Pendras 2026. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:bg-white">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer