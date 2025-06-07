import React from 'react';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <div className="text-2xl font-bold text-blue-900">Silzila</div>
        <ul className="flex gap-6 text-sm text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer text-green-500 font-semibold">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-200 transition">Get Started</button>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-100 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
          WEBSITE DESIGN AND <br /> DEVELOPMENT SERVICES – ABOUT US
        </h1>
        {/* Placeholder for hero image */}
        <div className="mt-10 flex justify-center">
          <div className="w-72 h-48 bg-gray-300 rounded-lg" />
        </div>
      </div>

      {/* About Content */}
      <section className="px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Power your Business with Website Design and Development Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            What is innovation? It is something that makes your business unique from others.
            So, what is your USP? Major organizations are gaining potential leads worldwide
            through their uniqueness and creativity. Hence, it’s high time to consider implementing
            strategies outside the box if you don’t have one.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            It is essential to depend upon the right Website design and development services
            to drive good revenue. The top development company in India can help your business
            flourish digitally. Stepping forward to avail the correct solution is necessary today.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-green-600 font-medium">
            <li>Drive powerful revenue</li>
            <li>Boost brand recognition</li>
            <li>Connect with the target audience</li>
            <li>Elevate workforce</li>
          </ul>
        </div>

        {/* Placeholder for about image */}
        <div className="flex-1">
          <div className="w-full h-64 bg-gray-300 rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
