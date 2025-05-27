import React from 'react'


const Contact = () => {
  return (
    <div>
 <div className="p-4 lg:p-20 flex flex-col items-center justify-center "  id="Contact">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold leading-normal uppercase text-[#638ed4] lg:p-10 ">Contact Us</h1>
      <form  className="flex flex-col gap-2 lg:w-1/2"  name="contact" data-netlify="true" >

      <input type="hidden" name="form-name" value="contact" />
        <div className="lg:flex gap-6 ">
    
        
          <input className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#638ed4] b_glow text-xl text-white" placeholder="Enter Your Name" id='name' name='name' type="text"  />
        
      
          <input className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#638ed4] b_glow text-xl text-white" placeholder="Enter Your Email" name='email' id='email' type="text"  />
        </div>
        
      
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#638ed4] b_glow text-xl text-white" placeholder="Write Your Message..."  name="Message" id="Message" cols="20" rows="10"></textarea>
        <button className="neno-button shadow-xl hover:shadow-[#638ed4] text-white border-2 border-[#638ed4] bg-[#638ed4]  hover:bg-[#638ed4] rounded-lg py-4 px-8 uppercase relative overflow-hidden bg-glow text-xl text-bold my-6" type="submit">Submit</button>
      </form>
    </div>


    
    </div>
  )
}

export default Contact