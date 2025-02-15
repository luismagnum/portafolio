import React from 'react';
import email from '../assets/images/email.svg';
import linke from '../assets/images/linke.svg';
import git from '../assets/images/git.png';
import cv from '../assets/images/cv.png';
import br from '../assets/images/images/brasil.png';

export default function Contact() {
  const contacts = [
    { img: email, alt: "mail", link: "mailto:luismagnum1@gmail.com" },
    { img: linke, alt: "linkedin", link: "https://www.linkedin.com/in/luis-enrique-diaz-brice%C3%B1o-b4662124b/" },
    { img: git, alt: "github", link: "https://github.com/luismagnum" },
    { img: cv, alt: "cv", link: "https://drive.google.com/file/d/1VF5e5JLR2IV6YIZNsepQXHW_NZaplw3s/view?usp=sharing" },
    { img: br, alt: "cv brasil", link: "https://drive.google.com/file/d/1T0-zZuLvm8BUZdQ22tpTzF02zKRaFfvK/view?usp=sharing", extra: true },
  ];

  return (
    <div className="flex flex-col items-center w-full py-12">
      <h2 className="text-teal-500 text-3xl font-bold">CONTACT</h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transform transition-transform hover:scale-110"
          >
            <img
              src={contact.img}
              alt={contact.alt}
              className="w-16 rounded-full"
            />
            {contact.extra && <p className="text-[8px] text-teal-500 mt-1">CV</p>}
          </a>
        ))}
      </div>
    </div>
  );
}