import React from "react";
import youtubeThumbnail from "../../images/youtube-thumbnail.png";
import comboProducts from "../../images/combo-products.png";
import youtubeText from "../../images/youtube-text.png";

import backgroundImg from "../../images/homePage/youtube-background.png";

const HowItsMade = () => {
  return (
    <section className="relative min-h-screen overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Section Header */}
        <div className="mb-12 text-center">
          <h2 className="inline-block text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#c00002] to-[#f1c516] bg-clip-text text-transparent mb-2">
            How Our Snacks Are Made
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#c00002] to-[#f1c516] mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fun Snack Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#c00002]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Premium Ingredients
              </h3>
              <p className="text-gray-600 mb-4">
                We source only the highest quality ingredients to create our
                delicious snacks. Nothing artificial, just pure goodness!
              </p>
              <a
                href="#"
                className="inline-block text-[#c00002] font-semibold hover:text-[#f1c516] transition-colors"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Fun Snack Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#f1c516]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Exciting Flavors
              </h3>
              <p className="text-gray-600 mb-4">
                From classic favorites to innovative new combinations, our
                flavor experts are constantly creating delicious sensations!
              </p>
              <a
                href="#"
                className="inline-block text-[#f1c516] font-semibold hover:text-[#c00002] transition-colors"
              >
                Explore flavors →
              </a>
            </div>
        </div>

          {/* Fun Snack Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Crafted with Care
              </h3>
              <p className="text-gray-600 mb-4">
                Our master snack makers use traditional methods combined with
                modern technology to ensure perfect results every time.
              </p>
              <a
                href="https://www.youtube.com/@mobiteindia/videos"
                target="_blank"
                className="inline-block text-orange-500 font-semibold hover:text-[#c00002] transition-colors"
              >
                Watch the process →
              </a>
            </div>
            </div>
          </div>

        <div className="mt-16 bg-gradient-to-r from-[#c00002] to-[#f1c516] p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-white text-2xl font-bold mb-3">
                See How We Make the Magic Happen
              </h3>
              <p className="text-white opacity-90 mb-4">
                Get a behind-the-scenes look at our snack-making process and
                discover the secrets to our delicious flavors!
              </p>
              <a
                href="https://youtu.be/cf4QOo2zuIA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#c00002] font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch
              </a>
            </div>
            <div className="w-1/4 md:w-1/2 lg:w-1/3">
              <a
                href="https://youtu.be/cf4QOo2zuIA"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden shadow-xl aspect-video flex items-center justify-center group"
              >
                {/* YouTube thumbnail */}
                <img 
                  src="https://img.youtube.com/vi/cf4QOo2zuIA/maxresdefault.jpg" 
                  alt="YouTube video thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40 transition-opacity group-hover:opacity-20"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white opacity-90 z-10 transition-transform group-hover:scale-110"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="absolute bottom-3 left-3 text-white font-medium bg-red-600 px-3 py-1 rounded-lg text-sm">
                  Watch on YouTube
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Fun Snack Facts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-5 rounded-lg">
              <p className="text-4xl font-bold text-[#c00002] mb-2">100%</p>
              <p className="text-gray-700">Real Ingredients</p>
            </div>
            <div className="bg-yellow-50 p-5 rounded-lg">
              <p className="text-4xl font-bold text-[#f1c516] mb-2">12+</p>
              <p className="text-gray-700">Amazing Flavors</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <p className="text-4xl font-bold text-green-600 mb-2">24h</p>
              <p className="text-gray-700">Freshly Made Daily</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <p className="text-4xl font-bold text-blue-600 mb-2">50yr</p>
              <p className="text-gray-700">Family Tradition</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItsMade;
