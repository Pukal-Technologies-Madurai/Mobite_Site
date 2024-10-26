import React from "react";
import connect from "../images/connect.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";

import connectUs from "../images/homePage/petter-bg1.png";
import connectUs1 from "../images/homePage/petter-bg2.png";

const SocialDiv = () => {
    const socialLinks = [
        { icon: facebook, href: "https://www.facebook.com/people/Mobiteindia/61565652641786/", label: "Facebook" },
        { icon: instagram, href: "https://www.instagram.com/mobiteindia/", label: "Instagram" },
        // { icon: youtube, href: "https://www.instagram.com/mobiteindia/", label: "YouTube" },
        // { icon: twitter, href: "https://www.x.com/mobiteindia/", label: "Twitter" }
    ];

    const footerLinks = [
        { text: "Contact us", href: "contact" },
        { text: "FAQ", href: "#" },
        { text: "Terms & Conditions", href: "#" },
        { text: "Privacy Policy", href: "#" }
    ];


    return (
        <section className="relative min-h-[20vh] max-h-[30vh] bg-gradient-to-b from-secondary to-secondary/90 overflow-hidden px-4 sm:px-8">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div
                    className="absolute bottom-0 left-0 w-1/2 h-full bg-left-bottom bg-no-repeat opacity-50 md:opacity-100"
                    style={{
                        backgroundImage: `url(${connectUs})`,
                        backgroundSize: "cover",  // Ensures the background scales properly
                        backgroundPosition: "left", // Keeps it centered
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto h-full px-6 sm:px-12 lg:px-44 py-6 sm:py-8">
                <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0">
                    {/* Connect Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={connect}
                            alt="Connect With Us"
                            className="w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96 max-w-full h-auto transition-all duration-300"
                        />
                    </div>

                    {/* Social Media Links */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="flex gap-6 sm:gap-8">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform hover:scale-125 transition-transform duration-300"
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.label}
                                        className="w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px] object-contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialDiv