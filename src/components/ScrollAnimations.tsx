import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    title: "MASTERFUL",
    name: "Phil Clevenger",
    desc: "Vice President, Product Experience DocuSign | Ex Adobe Sr.Director, UX",
  },
  {
    title: "PROACTIVE",
    name: "Adrian Ornik",
    desc: "Global Growth Leader at EY",
  },
  {
    title: "INNOVATIVE",
    name: "Jayan K Narayanan",
    desc: "Ex. Product Director, Adobe Photoshop Elements",
  },
  {
    title: "VISIONARY",
    name: "Hemant Charya",
    desc: "Ex. Product Dev Head, Reliance BigFlix",
  },
  {
    title: "ADAPTABLE",
    name: "Rohan Chandhok",
    desc: "Dev Leader at SAP Labs | Ex PM, Adobe",
  },
  {
    title: "TRAILBLAZER",
    name: "Kabir Malkani",
    desc: "Creative Director, GTB India",
  },
  {
    title: "RELIABLE",
    name: "Dinesh Krishnan",
    desc: "Visual Editor, The Hindu",
  },
  {
    title: "FUTURISTIC",
    name: "Geetaj Channana",
    desc: "Vice President, Samsung Research India",
  },
];

const Hero = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center justify-center px-6">
      <img
        src="/hero-image.jpg"
        alt="Sani Mani"
        className="w-44 h-44 rounded-full border-4 border-white mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight">
        I DO UX,<br /> THAT DRIVES <span className="text-blue-400">BUSINESS GROWTH</span>
      </h1>
      <p className="mt-6 text-center max-w-2xl text-gray-300">
        Hello, I’m <span className="text-blue-400">Sani Mani</span>, a UX Professional who designs for clarity,
        adoption, and impact — from global platforms to hyperlocal products.
      </p>
      <Button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white">See My Work</Button>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Endorsements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="transition-transform duration-300"
          >
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-md font-bold text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-gray-400 text-center text-sm">
      © {new Date().getFullYear()} Sani Mani. All rights reserved.
    </footer>
  );
};

const Portfolio = () => {
  return (
    <main className="font-sans">
      <Hero />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Portfolio;
