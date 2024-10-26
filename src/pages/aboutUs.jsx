import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";

export default function AboutUs() {
  const text = `Welcome to Mobite, your go-to destination for delicious and fun baked snacks in India!
    Bringing joy to your taste buds, Whether you’re in the mood for a quick bite on the go or something to share with friends and family, 
    our snacks are the perfect choice. 
    Thank you for choosing Mobite, We look forward to being a part of your snacking moments, 
    bringing a little bit of fun and flavor to your day!`;

  return (
    <Layout>
      <About text={text} />
    </Layout>
  );
};
