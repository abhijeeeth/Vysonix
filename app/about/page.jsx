import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-20">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?auto=format&fit=crop&q=80&w=2031&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vizonix Logo"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-[14px] mb-4">
              Vizonix is a leading web development company specializing in creating
              stunning and efficient websites. Our team of experienced developers
              and designers are dedicated to delivering high-quality web solutions.
            </p>
            <p className="text-gray-600 text-[14px]">
              We pride ourselves on our commitment to excellence and client
              satisfaction. Contact us today to start your web development journey
              with Vizonix.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
