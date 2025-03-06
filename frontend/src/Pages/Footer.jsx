import React from "react";
import logo from "../assets/Header/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import line from "../assets/bar/line.png";
import { Link } from "react-router-dom";
const Footer = ({ theme }) => {
  return (
    <div>
      <div className="2xl:px-[8rem] p-[2rem] md:py-[5rem] mt-[2rem] md:mt-0">
        <div className="lg:flex justify-between">
          <div className="">
            <Link to="/">
              {" "}
              <img src={logo} className="md:w-[10rem] w-[8rem]" />
            </Link>
            <h3 className={`${
                          theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                        } mt-[3rem] sm:text-xl text-xl 2xl:text-3xl font-semibold`}>
              Follow Us On
            </h3>
            <div className={`${
                    theme === "dark" ? " text-white" : "text-black"
                  } flex gap-[1rem] 2xl:text-2xl xl:text-2xl  lg:text-lg  md:text-xl  text-2xl 2xl:mt-[2rem] my-[2rem]`}>
              <div>
                <Link
                  to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFlVCrIWjqmVQAAAZVagzxov2Zi9ScnL0yS3W1s1PWUSLqOz2c6riDoVPiKtnOOCKdM4hCnpFRBr4xlA7ABOONWcKv4hDVVxH86o9OD-0xJxibVS_NWADxzF0hp6cbuDcqybM8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Flunaredge"
                  className="hover:text-[#0077B5]"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div>
                <Link
                  to="https://www.instagram.com/lunaredge.co/"
                  className="hover:text-[#E4405F]"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </div>
              <div>
                <Link
                  to="https://www.facebook.com/permalink.php?story_fbid=122106962024563714&id=61566911443492&substory_index=518711921053786&rdid=bwbL3KyEvEh7xiYl#"
                  className="hover:text-[#1877F2]"
                  target="_blank"
                >
                  {" "}
                  <FaFacebookF />
                </Link>
              </div>
              <div>
                <Link
                  to="https://x.com/LunarEdge11"
                  className="hover:text-[#000000]"
                  target="_blank"
                >
                  {" "}
                  <FaXTwitter />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex gap-[10rem] ">
            <div>
              <h3 className={`${
                          theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                        } font-semibold sm:text-xl  2xl:text-3xl   text-xl mb-[2rem] mt-[2rem] 2xl:mt-0 `}>
                Meet Us
              </h3>
              <div className="">
                <p
                  className={`${
                    theme === "dark" ? " text-white" : "text-black"
                  } font-semibold  xl:text-2xl 2xl:text-xl 3xl:text-2xl text-base custome-leading`}
                >
                  Call Us:{" "}
                  <span className="font-normal">
                    <a to="tel:0141-4512611">0141-4512611</a>
                    <br />
                    <a to="tel:+917297082107">+91-7297082107</a>
                  </span>
                </p>
                <p  className={`${
                    theme === "dark" ? " text-white" : "text-black"
                  } font-semibold  xl:text-2xl 2xl:text-xl 3xl:text-2xl text-base custome-leading`}>
                  Email us:{" "}
                  <a to="mailto:info@lunaredgeit.com" className="font-normal">
                    info@lunaredgeit.com
                  </a>
                </p>
                <p  className={`${
                    theme === "dark" ? " text-white" : "text-black"
                  } font-semibold  xl:text-2xl 2xl:text-xl 3xl:text-2xl text-base custome-leading`}>
                  Office:{" "}
                  <span className="font-normal ">
                    203, Manglam,
                    <br /> Signature Tower,
                    <br /> Lal Kothi, Gandhi Nagar,
                    <br />
                    Jaipur, Rajasthan 302015
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h3 className={`${
                          theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                        } font-semibold sm:text-xl  2xl:text-3xl  text-xl mb-[2rem] mt-[2rem] 2xl:mt-0 `}>
                Quick Links
              </h3>
              <ul className={`${
                    theme === "dark" ? " text-white" : "text-black"
                  } xl:text-2xl 2xl:text-xl 3xl:text-2xl text-base custome-leading`}>
                <li>
                  <Link to="aboutus" className="hover:text-[#FF297F] ">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="webdevelopment" className="hover:text-[#FF297F]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="healthcare" className="hover:text-[#FF297F]">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link Link to="careers" className="hover:text-[#FF297F]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link Link to="faqs" className="hover:text-[#FF297F]">
                    FAQ’s{" "}
                  </Link>
                </li>
                <li>
                  <Link Link to="contact" className="hover:text-[#FF297F]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`${
                          theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                        } font-semibold sm:text-xl  2xl:text-3xl  text-xl mb-[2rem] mt-[2rem] 2xl:mt-0 `}>
                Company
              </h3>
              <ul className={`${
                    theme === "dark" ? " text-white" : "text-black"
                  } xl:text-2xl 2xl:text-xl 3xl:text-2xl text-base custome-leading`}>
                <li>
                  <Link to="aboutus" className="hover:text-[#FF297F]">
                    About Team
                  </Link>
                </li>
                <li>
                  <Link to="testimonals" className="hover:text-[#FF297F]">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="projects" className="hover:text-[#FF297F]">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="awards" className="hover:text-[#FF297F]">
                    Awards
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={line} className="mt-[0rem]" />
      <div className={`${
                    theme === "dark" ? " text-white" : "text-black"
                  } lg:flex justify-between md:justify-around 3xl:justify-between xl:text-lg 2xl:text-xl 3xl:text-2xl  lg:text-base md:px-[3rem] px-[2rem] 3xl:px-[7rem] lg:px-[0rem] 2xl:px-[0rem] xl:px-[8rem] py-[2rem] mt-[2rem] 2xl:mt-0 `}>
        <ul className="md:flex lg:gap-[3rem] md:gap-[8rem] ">
          <li className="mb-3  md:mb-0">
            {" "}
            <Link to="termsandconditions" className="hover:text-[#FF297F] ">
              Terms & Conditions{" "}
            </Link>
          </li>
          <li className="mb-3 md:mb-0">
            {" "}
            <Link Link to="privacypolicy" className="hover:text-[#FF297F]">
              {" "}
              Privacy Policy{" "}
            </Link>
          </li>
          <li className="mb-3 md:mb-0">
            {" "}
            <Link Link to="cookies" className="hover:text-[#FF297F]">
              {" "}
              Cookies
            </Link>
          </li>
        </ul>
        <div className="md:mt-6 lg:mt-0">
          © {new Date().getFullYear()}. LunarEdge IT Services Pvt. Ltd. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
