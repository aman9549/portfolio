import 'react'
import Logo from "../assets/rd-logo.jpg";    
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="h-20 bg-red-500 rounded-full mx-2  w-20" src={Logo} alt="RD Logo" />



        {/* <div className="items-center w-full lg:w-3/4">
  <ul className="flex flex- items-center text-center w-full lg:flex-row lg:justify-center lg:w-3/4">
    <li className="py-2 px-5">Home</li>
    <li className="py-2 px-5">About</li>
    <li className="py-2 px-5">Technologies</li>
    <li className="py-2 px-5">Experience</li>
  </ul>4
</div> */}



      </div>

     
  <div className="m-8 flex  items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com" target='_blank'  aria-label="LinkedIn">

          <IoLogoLinkedin />
        </a>
        <a href="https://www.github.com" target='_blank'  aria-label="GitHub">
          <IoLogoGithub />
        </a>
        <a href="https://www.twitter.com" target='_blank'  aria-label="X (Twitter)">
        <IoLogoTwitter />

        </a>
        <a href="https://www.instagram.com" target='_blank' aria-label="Instagram">
          <IoLogoInstagram />
        </a>
      </div> 


    </nav>


  );
};

export default Navbar;
