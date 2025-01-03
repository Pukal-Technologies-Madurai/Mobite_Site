import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialDiv from "./SocialDiv";
import Chatbot from "./Chatbot";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Mobite India</title>
      </Helmet>
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <SocialDiv />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Layout;
