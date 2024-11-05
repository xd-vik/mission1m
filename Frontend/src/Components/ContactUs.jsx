import React from 'react';
import locationIcon from '../assets/mdi_address-marker-outline.png';
import phoneIcon from '../assets/tdesign_call-1.png';
import mobioleicon from '../assets/gridicons_phone.png'
import twitterIcon from '../assets/line-md_twitter-filled.png'
import facebookIcon from '../assets/grommet-icons_facebook.png'
import linkeidnIcon from '../assets/mingcute_linkedin-fill.png'

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-green-50 p-10 rounded-lg shadow-lg max-w-4xl w-full">
        
        
        <h1 className="font-alexandria font-extraheavy text-center text-green-700 text-3xl font-bold mb-8">Contact Us</h1>

        <div className="flex">
          
          <div className="flex-1 text-green-700 space-y-4">
            <h2 className="text-2xl font-bold font-alexandria">Our Office</h2>
            <div className="space-y-2">
                
              <p className='flex items-center'>
              <img className='w-7 h-6 mr-5 pb-2' src={locationIcon} alt="Location"/>F-02, C-23,<br />Sector-63,<br />Noida - 201305</p>
              <p className="flex items-center">
                <img className="w-6 h-6 mr-5" src={phoneIcon} alt="callicon"/> +91 120 499 4499
              </p>
              <p className="flex items-center">
                <img className="w-6 h-6 mr-5" src={mobioleicon} alt="mobileIcon"/> +91 78400 79095
              </p>
            </div>
          </div>

          
          <div className="flex-1 mx-10 space-y-4">
            <h2 className="text-center text-green-700 text-2xl font-bold font-alexandria">Say Hello</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-green-200 rounded-2xl focus:outline-none focus:border-green-400"
              />
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full p-3 border border-green-200 rounded-2xl focus:outline-none focus:border-green-400"
              />
              <textarea 
                placeholder="Message" 
                className="w-full p-3 border border-green-200 rounded-2xl h-32 resize-none focus:outline-none focus:border-green-400"
              ></textarea>
              <div className='text-center'>
              <button className="bg-green-600 text-white px-6 py-2 rounded-2xl hover:bg-green-700 transition ">
                Know More
              </button>
              </div>
              
            </form>
          </div>

          
          <div className="flex-1 text-green-700 space-y-4">
            <h2 className="text-2xl font-bold font-alexandria">Connect</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <img className="w-6 h-6 mr-5" src={twitterIcon} alt="twitterIcon"/> Twitter
              </p>
              <p className="flex items-center">
              <img className="w-6 h-6 mr-5" src={facebookIcon} alt="FacbookIcon"/> Facebook
              </p>
              <p className="flex items-center">
              <img className="w-6 h-6 mr-5" src={linkeidnIcon} alt="LinkedinIcon"/> LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs