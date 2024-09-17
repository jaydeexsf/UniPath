import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // For social media icons

// Reusable Animated Link Component
const AnimatedLink = ({ to, children }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Link to={to} className="text-white mx-2 p-2 rounded transition-all duration-500">
      {children}
    </Link>
  </motion.div>
);

// Contact Us Form with Validation
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };


  return (
    <div className="bg-slate-900 text-white py-12">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        {isSubmitted ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Thank you for contacting us! We'll get back to you shortly.
          </motion.p>
        ) : (
          <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-6">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 py-2 px-4 rounded shadow-lg hover:bg-blue-700"
              type="submit"
            >
              Submit
            </motion.button>
          </form>
        )}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Guidance helped me navigate the confusing college application process!',
      name: 'John Doe',
    },
    {
      quote: 'Thanks to Guidance, I found the perfect scholarship.',
      name: 'Jane Smith',
    },
    {
      quote: 'The personalized career advice was spot on.',
      name: 'Emily Johnson',
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-12">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Students Say
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="italic">"{testimonial.quote}"</p>
              <p className="mt-4 font-bold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I start the application process?',
      answer: 'Simply sign in and follow the step-by-step guide tailored to your needs.',
    },
    {
      question: 'Are there any costs involved?',
      answer: 'Guidance is free to use for all students.',
    },
    {
      question: 'How can I get personalized support?',
      answer: 'Our advisors are available through chat and email for any questions you may have.',
    },
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="font-bold">{faq.question}</h3>
                <span>{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && <p className="mt-4">{faq.answer}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  const { isSignedIn } = useUser();
  const [mobile, setMobile] = useState(false)

  const showMenu = ()=> {
    setMobile(c => !c)
    console.log('ye')
  }
  return (
    <div className="min-h-screen bg-gray-800 text-gray-200">
      <header className="bg-slate-950 py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-bold text-white">
          <Link to="/" className="text-blue-400 transition-colors duration-300">
            Guidance
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <AnimatedLink to="/">Home</AnimatedLink>
          <AnimatedLink to="/services">Services</AnimatedLink>
          <AnimatedLink to="/testimonials">Testimonials</AnimatedLink>
          <AnimatedLink to="/contact">Contact Us</AnimatedLink>
        </div>
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <SignedIn>
              <Link to="/dashboard">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                  Dashboard
                </button>
              </Link>
            </SignedIn>
          ) : (
            <SignInButton>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={showMenu} className={`text-white ${mobile ? 'opacity-0' : ''}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu (to be implemented) */}
      <motion.div
      className={`fixed inset-0 right-0 bg-gray-800 bg-opacity-90 z-50 ${mobile ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: mobile ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto p-6">
        <div className="flex justify-end">
          <button
            onClick={showMenu}
            className="text-white -mr-2 hover:text-gray-300 transition-colors duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-12 space-y-6">
          <AnimatedLink to="/">Home</AnimatedLink>
          <AnimatedLink to="/services">Services</AnimatedLink>
          <AnimatedLink to="/testimonials">Testimonials</AnimatedLink>
          <AnimatedLink to="/contact">Contact Us</AnimatedLink>
        </div>
      </div>
    </motion.div>
      {/* <MobileMenu  above /> */}
    </header>

      <main>
        <section className="py-24 text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Unlock Your Future
          </motion.h1>
          <motion.p
            className="text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Guidance helps high school students with university applications, bursaries, and more.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {isSignedIn ? (
              <Link to="/dashboard" className="bg-blue-600 px-4 py-2 rounded-lg shadow-lg">
                Go to Dashboard
              </Link>
            ) : (
              <SignInButton>
                <button className="bg-blue-600 px-4 py-2 rounded-lg shadow-lg">
                  Sign In to Start
                </button>
              </SignInButton>
            )}
          </motion.div>
        </section>

        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 GuidanceApp. All Rights Reserved.</p>
          <div className="flex justify-center mt-4">
            <FaFacebook className="mx-2" />
            <FaTwitter className="mx-2" />
            <FaInstagram className="mx-2" />
            <FaYoutube className="mx-2" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
