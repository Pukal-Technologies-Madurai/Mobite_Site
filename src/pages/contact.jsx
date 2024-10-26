import React from "react";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";
import backgroundImg from "../../src/images/about-bg.png";

export default function contact() {
  return (
    <Layout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 my-2"
        style={{
          background: `linear-gradient(to right, rgba(255, 223, 0, 0.6), rgba(255, 255, 102, 0.6)), url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay"
        }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#009db4]">Get in Touch</h2>
              <p className="mb-7 text-black">Have a question or need help? We're here to assist you.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md " required />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-md " required />
                <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md " required />
                <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-md " required />
                <textarea placeholder="Your message" className="w-full p-3 border border-gray-300 rounded-md " rows="4" required></textarea>
                <button type="submit" className="w-full bg-[#009db4] text-white p-3 rounded-md hover:bg-[#06292e] transition duration-300 ease-in-out transform hover:-translate-y-1">Send Message</button>
              </form>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-[#009db4] mr-4" />
                    <div>
                      <strong>Shri Foods</strong>
                      <p>DP.NO.CS 8, SIDCO Industrial Estate,</p>
                      <p>near Kappalur, Madurai,</p>
                      <p>Tamil Nadu 625008</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-[#009db4] mr-4" />
                    <p>+91 90253 16142</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-[#009db4] mr-4" />
                    <a href="mailto:pukalfoods@gmail.com" className="text-[#009db4] font-bold hover:underline">pukalfoods@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-4 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.1968784425735!2d78.0299635741444!3d9.833825675873847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d15e9b826e2b%3A0x72d8eeda445cb1f3!2sShri%20Foods!5e0!3m2!1sen!2sin!4v1728039921892!5m2!1sen!2sin"
                  frameBorder="0"
                  className="w-full h-full rounded-md"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

