import sun from "../images/sun.png";
import code from "../images/code.png";
import hand from "../images/hand.png";
import screenshot from "../images/screenshot.png";
import deep from "../images/deep.png";
import otp from "../images/otp.png";
import finserve from "../images/finserve.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center  justify-center ">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold leading-normal uppercase text-[#638ed4]">projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-20 py-10">

      <a href="https://drritusaxenalucknow.com/">
        <img data-aos="fade-up" src={screenshot} className="w-full h-full  flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a>
    
        <a href="https://sunserviceslucknow.com/">
        <img data-aos="fade-up" src={sun} className="w-full h-full  flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a> 
        
        
        <a href="https://www.code-foundry.tech/Home">
        <img data-aos="fade-down" src={code} className="w-full h-full   flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a>
        <a href="https://github.com/tanveerkhan4u/Handicraft">
        <img data-aos="fade-up" src={hand} className="w-full h-full   flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a>
        <a href="https://www.deepcraneservices.com/">
        <img data-aos="fade-up" src={deep} className="w-full h-full   flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a>
        <a href="https://tanveertravel.netlify.app/">
        <img data-aos="fade-up" src={otp} className="w-full h-full   flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a>
        <a href="https://finservesimplified.in/">
        <img data-aos="fade-up" src={finserve} className="w-full h-full   flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Projects
