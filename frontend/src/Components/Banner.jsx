import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import pic from '../images/pic.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ReactTyped } from "react-typed";


const stringsToRender = [
  'Full Stack Web Developer',
];
 


const Banner = () => {

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  
  },[])
  return (
    <div  className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        mohd tanveer khan
        </h1>
        <h4 className="text-3xl mb-10 text-white font-semibold b_glow">
        I'm {' '}
        <ReactTyped  strings={stringsToRender} typeSpeed={80} className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 " backSpeed={50} loop />
        </h4>
        <p data-aos="fade-left">I believe in a user-centric approach to development, ensuring that every application I build is intuitive, responsive, and user-friendly</p>
        <div className="flex mt-8 gap-2 ">
          <div className="flex items-center justify-center ">
            <div className="flex space-x-2 ">
              <a href="https://github.com/tanveerkhan4u" className="text-white hover:text-[#638ed4] rounded-full glow p-2">
              <AiFillGithub  className="text-[28px]"/>
          
              </a>
              <a href="https://www.linkedin.com/in/mohd-tanveer-khan-b05a63243/" className="text-white hover:text-[#638ed4] rounded-full glow p-2">
              <FaLinkedinIn  className="text-[28px]"/>
              </a>
              <a href="https://www.instagram.com/" className="text-white hover:text-[#638ed4] rounded-full glow p-2">
              <FaInstagram  className="text-[28px]"/>
              </a>
              <a href="https://twitter.com/" className="text-white hover:text-[#638ed4] rounded-full glow p-2">
              <FaXTwitter  className="text-[28px]"/>
              </a>

            </div>
          </div>
        </div>
      </div>
      <img data-aos="fade-up" src={pic} width={290} height={290} className="rounded-full border-2 p-1 border-[#638ed4] pic_glow" alt="" />
    </div>
  )
}

export default Banner


