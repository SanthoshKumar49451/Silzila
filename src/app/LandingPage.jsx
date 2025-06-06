import React from 'react';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 rounded-lg flex items-center justify-center transform rotate-12">
                  <span className="text-white font-bold text-lg transform -rotate-12">T</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Techwens</div>
                <div className="text-xs text-gray-500 -mt-1">Curating Technology that Speaks</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors">Home</a>
              <a href="#" className="text-teal-500 font-medium text-base">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
                <div className="text-white drop-shadow-lg">WEBSITE DESIGN AND</div>
                <div className="text-white drop-shadow-lg">DEVELOPMENT SERVICES</div>
                <div className="text-gray-300 text-4xl font-medium mt-4">— ABOUT US</div>
              </h1>
            </div>
            
            {/* Hero Illustration */}
            <div className="relative">
              <div className="relative w-full h-80">
                {/* Main yellow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-3xl transform rotate-3"></div>
                
                {/* Team illustration */}
                <div className="relative z-10 h-full flex items-center justify-center p-8">
                  {/* Lightbulb */}
                  <div className="absolute top-8 left-12">
                    <div className="w-12 h-16 bg-yellow-200 rounded-t-full relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-300 rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  
                  {/* People figures */}
                  <div className="grid grid-cols-2 gap-8 w-full max-w-xs">
                    {/* Person 1 - Left */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-teal-500 rounded-full mb-2"></div>
                      <div className="w-16 h-20 bg-blue-600 rounded-t-full"></div>
                      <div className="w-8 h-12 bg-blue-700 rounded-b-lg -mt-2"></div>
                    </div>
                    
                    {/* Person 2 - Right */}
                    <div className="flex flex-col items-center mt-8">
                      <div className="w-12 h-12 bg-pink-400 rounded-full mb-2"></div>
                      <div className="w-16 h-20 bg-purple-500 rounded-t-full"></div>
                      <div className="w-8 h-12 bg-purple-600 rounded-b-lg -mt-2"></div>
                    </div>
                  </div>
                  
                  {/* Additional people in background */}
                  <div className="absolute bottom-4 left-8">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    <div className="w-10 h-12 bg-green-600 rounded-t-full mt-1"></div>
                  </div>
                  
                  <div className="absolute bottom-4 right-8">
                    <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                    <div className="w-10 h-12 bg-red-500 rounded-t-full mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                <span className="block">Power your Business with</span>
                <span className="block text-blue-600">Website Design and Development</span>
                <span className="block">Services</span>
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  What is innovation? It is something that makes your business unique from others. So, what is your 
                  USP? Major organizations are gaining potential leads worldwide through their uniqueness and 
                  creativity. Hence, it's high time to consider implementing strategies outside the box if you don't 
                  have one.
                </p>
                <p>
                  It is essential to depend upon the right Website design and development services to drive good 
                  revenue. The top development company in India can help your business flourish digitally. Stepping 
                  forward to avail the correct solution is necessary today.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Drive powerful revenue</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Boost brand recognition</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Connect with the target audience</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Elevate workforce</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side illustration */}
            <div className="relative">
              <div className="relative w-full h-96">
                {/* Background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform -rotate-2"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full p-8">
                  {/* Letter T with geometric elements */}
                  <div className="absolute top-8 left-8">
                    <div className="relative">
                      <div className="text-6xl font-bold text-gray-300 opacity-50">T</div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-gray-400 rounded"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 border-2 border-gray-400"></div>
                    </div>
                  </div>
                  
                  {/* Team collaboration illustration */}
                  <div className="absolute bottom-8 right-8 left-8 top-20">
                    <div className="relative h-full">
                      {/* Puzzle pieces */}
                      <div className="absolute top-4 right-16">
                        <div className="w-16 h-16 bg-green-400 rounded-lg transform rotate-12 relative">
                          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-6 bg-green-400 rounded-r-full"></div>
                        </div>
                      </div>
                      
                      <div className="absolute top-12 right-4">
                        <div className="w-16 h-16 bg-purple-400 rounded-lg transform -rotate-6 relative">
                          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-6 bg-white rounded-r-full"></div>
                        </div>
                      </div>
                      
                      {/* People figures */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end">
                        {/* Person 1 */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-blue-500 rounded-full mb-1"></div>
                          <div className="w-12 h-16 bg-blue-600 rounded-t-full"></div>
                        </div>
                        
                        {/* Person 2 */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-teal-500 rounded-full mb-1"></div>
                          <div className="w-12 h-16 bg-teal-600 rounded-t-full"></div>
                        </div>
                        
                        {/* Person 3 */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-yellow-500 rounded-full mb-1"></div>
                          <div className="w-12 h-16 bg-yellow-600 rounded-t-full"></div>
                        </div>
                        
                        {/* Person 4 */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-pink-500 rounded-full mb-1"></div>
                          <div className="w-12 h-16 bg-pink-600 rounded-t-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;