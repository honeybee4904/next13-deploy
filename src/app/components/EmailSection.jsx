"use client";
import React from "react";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa"; // Import icons

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Connect with Me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          If you're looking to bring your system ideas to life, I’m here to help. Whether it’s an IoT solution with Arduino and ESP32, mobile app integration, or a web-based system, I can create a custom solution tailored to your needs. Contact me today to start building your system and turning your vision into reality!
        </p>
      </div>
      <div className="flex flex-col gap-4 text-white items-start">
        <a href="https://www.facebook.com/je.bec.son/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <FaFacebook size={40} />
          <span>https://www.facebook.com/je.bec.son/</span>
        </a>
        <a href="https://www.youtube.com/@murphy322" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <FaYoutube size={40} />
          <span>https://www.youtube.com/@jebecson</span>
        </a>
        <a href="https://www.tiktok.com/@mellowmurphycodm?lang=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <FaTiktok size={40} />
          <span>https://www.tiktok.com/@mellowmurphy</span>
        </a>
      </div>
    </section>
  );
};

export default EmailSection;
