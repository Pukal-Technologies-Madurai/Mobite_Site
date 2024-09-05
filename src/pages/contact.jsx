import React from "react";
import FixedHeader from "../components/header/fixedHeader";
import Homefooter from "../components/home/homefooter";
import HomeConnect from "../components/home/homeConnect";
import AppLogo from '../images/homePage/logo-png-img.png';

export default function contact () {
  return (
    <React.Fragment>
      <FixedHeader />
      <div className="max-w-screen-xl mx-auto py-16 px-4 lg:px-8 my-16 lg:my-32 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-left mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#009db4]">Get in Touch</h2>
          <p className="text-lg lg:text-2xl text-gray-700 mt-4">
            Have a question or need help? We're here to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-lg lg:text-2xl font-medium text-gray-700 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-[#009db4] focus:border-[#009db4]"
                  required
                />
              </div>
              <div>
                <label className="block text-lg lg:text-2xl font-medium text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-[#009db4] focus:border-[#009db4]"
                  required
                />
              </div>
              <div>
                <label className="block text-lg lg:text-2xl font-medium text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-[#009db4] focus:border-[#009db4]"
                  required
                />
              </div>
              <div>
                <label className="block text-lg lg:text-2xl font-medium text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-[#009db4] focus:border-[#009db4]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#009db4] text-white font-medium text-lg lg:text-xl py-3 rounded-lg hover:bg-[#007e8b] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 bg-white rounded-lg shadow-md flex flex-col justify-between">
            <img src={AppLogo} alt="App Logo" width={150} className="mx-auto lg:mx-0" />
            <h3 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4 lg:mb-8">Our Contact Information</h3>
            <div>
              <p className="text-lg lg:text-2xl text-gray-600 mb-4">
                <span className="font-semibold text-2xl">Address:</span> DP.NO.CS 8, SIDCO Industrial Estate,
                <br /> &emsp;Kappalur, Madurai - 625008.
              </p>
              <p className="text-lg lg:text-2xl text-gray-600 mb-4">
                <span className="font-semibold text-2xl">Phone:</span> +91 9025316142
              </p>
              <p className="text-lg lg:text-2xl text-gray-600">
                <span className="font-semibold text-2xl">Email:</span> pukalfoods@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <HomeConnect />
      <Homefooter />
    </React.Fragment>
  );
};

