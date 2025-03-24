import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";

export default function AboutUs() {
  const sections = {
    vision: {
      title: "Our Vision",
      content: "To become India's most loved baked snack brand, bringing joy, taste, and quality to every bite while promoting better snacking choices for all."
    },
    mission: {
      title: "Our Mission",
      content: "Mobite offers high-quality, delicious snacks crafted for every lifestyle. With a unique taste and premium quality, our snacks bring people together, creating memorable and enjoyable moments with every bite."
    },
    about: {
      title: "About Us",
      content: "Welcome to Mobite, your destination for delicious and crunchy baked snacks. We craft our snacks with high-quality ingredients, ensuring a perfect balance of taste and texture. Whether you're on the go or sharing with friends and family, Mobite makes every moment more enjoyable. Experience the joy of snacking with flavors that bring fun, freshness, and satisfaction in every bite!"
    }
  };

  return (
    <Layout>
      <div className="bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-16">
            {/* Vision Section */}
            <div className="text-center bg-white/70 rounded-2xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-orange-600 mb-8">{sections.vision.title}</h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {sections.vision.content}
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-orange-100/70 rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">{sections.mission.title}</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
                {sections.mission.content}
              </p>
            </div>

            {/* About Us Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white/70 rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-orange-600">{sections.about.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {sections.about.content}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md max-w-md mx-auto">
                <img 
                  src="https://www.cerelia.org/images/Popped%20Pearl%20Millet%20-%20Dahi%20Puri.png"
                  alt="Mobite Snacks"
                  className="w-full h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
