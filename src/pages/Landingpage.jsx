import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">YourLogo</div>
          <nav>
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/about" className="mx-2">About Us</Link>
            <Link to="/services" className="mx-2">Services</Link>
            <Link to="/contact" className="mx-2">Contact</Link>
            <Link to="/login" className="mx-2 bg-white text-blue-600 py-1 px-3 rounded">Log In</Link>
          </nav>
        </div>
      </header>
      
      <main className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold">Your Gateway to a Successful Future</h1>
            <p className="mt-4 text-lg">Guiding Grade 12 Students Through College Applications and Beyond</p>
            <div className="mt-6">
              <Link to="/signup" className="bg-blue-600 text-white py-2 px-4 rounded mr-4">Get Started</Link>
              <Link to="/about" className="bg-transparent border-2 border-white text-white py-2 px-4 rounded">Learn More</Link>
            </div>
          </div>
        </div>
      </main>
      
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Personalized Application Assistance</h3>
              <p className="mt-2">Get tailored support for your application process.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">College and Career Guidance</h3>
              <p className="mt-2">Expert advice on choosing the right path.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Scholarship and Financial Aid Help</h3>
              <p className="mt-2">Find and apply for scholarships to fund your education.</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
          <div className="mt-4">
            <Link to="/about" className="mx-2">About Us</Link>
            <Link to="/services" className="mx-2">Services</Link>
            <Link to="/contact" className="mx-2">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
