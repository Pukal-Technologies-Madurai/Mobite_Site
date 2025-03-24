import React from "react";
import connect from "../images/connect.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import connectUs from "../images/homePage/petter-bg1.png";

import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import connectUs1 from "../images/homePage/petter-bg2.png";

const SocialDiv = () => {
    const socialLinks = [
        { icon: facebook, href: "https://www.facebook.com/people/Mobiteindia/61565652641786/", label: "Facebook" },
        { icon: instagram, href: "https://www.instagram.com/mobiteindia/profilecard", label: "Instagram" },
        { icon: youtube, href: "https://www.youtube.com/@mobiteindia", label: "YouTube" },
        { icon: twitter, href: "https://www.x.com/mobiteindia/", label: "Twitter" }
    ];

    return (
        <section className="relative py-16 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
            {/* Modern Wave Shape Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute bottom-0 w-full h-48 text-white/5" viewBox="0 0 1440 320">
                    <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-12">
                    {/* Header Section */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect With Us</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">Stay updated with our latest news, updates, and exciting offers through our social media channels.</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 
                                    hover:bg-white/20 hover:shadow-xl hover:shadow-white/10 
                                    transform hover:-translate-y-2">
                                    <img
                                        src={social.icon}
                                        alt={social.label}
                                        className="w-12 h-12 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <p className="text-white/90 text-center mt-3 text-sm font-medium">
                                        {social.label}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialDiv;