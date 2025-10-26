import React from "react";
import logo from "../../../assets/logo.png";

const navItems = [
  { id: 1, name: "Home", url: "home" },
  { id: 2, name: "About", url: "about" },
  { id: 3, name: "Process", url: "process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  
  { id: 5, name: "Projects", url: "projects" },
  { id: 6, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="pt-10 md:pt-16 content max-w-2xl:px-3" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="flex flex-col md:flex-row justify-between items-center w-full text-neutral-200 gap-6">
        <a href="#home" className="flex items-center gap-3 no-underline" aria-label="Go to home">
          <img src={logo} alt="Mokhles Benna logo" className="h-8 sm:h-14 rounded-2xl" />
          <div>
            <p className="text-2xl sm:text-[32px] font-semibold">Mokhles Benna</p>
            <p className="text-sm sm:text-base">Software Engineer</p>
          </div>
        </a>

        <nav aria-label="Footer navigation" className="text-center">
          <ul className="flex flex-wrap justify-center items-center gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.url}`}
                  className="inline-block relative text-sm sm:text-base px-1 group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 transform-gpu group-hover:scale-x-100 origin-left" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center">
          <p className="text-sm sm:text-base">
            &copy; {copyrightYear} Mokhles Benna. All rights reserved.
          </p>
        </div>
      </div>

      <div className="text-white text-center mt-6 max-w-full py-6">
        Built with <span aria-hidden="true">❤️</span> by{" "}
        <a
          href="https://github.com/MokhlesBenna"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mokhles Benna
        </a>
      </div>
    </footer>
  );
};

export default Footer;
