import React, { useState } from "react";
import Footer from "../Components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Formspree form submit
    fetch("https://formspree.io/f/xdkdekor", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  return (
    <section id="contact-page" className=" h-[100vh] w-full  py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions, suggestions, or collaboration ideas? Reach out to us
            anytime!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info + Map */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600">📍 123 Wander Street, Travel City, Earth</p>
              <p className="text-gray-600">📧 email@wandermap.com</p>
              <p className="text-gray-600">📞 +91 9876543210</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                title="WanderMap Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.953284779538!2d75.78899321451018!3d26.912433483124998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dc65d5675b%3A0xadc67a0ec2c36f0b!2sJaipur!5e0!3m2!1sen!2sin!4v1617777777777"
                className="w-full"
                height="250"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          {submitted ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center text-green-600 text-lg font-medium">
              ✅ Thank you! Your message has been sent.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md space-y-5"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              {/* Hidden redirect field (optional) */}
              <input
                type="hidden"
                name="_redirect"
                value="https://wandermap.vercel.app/thankyou"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-16 bg-gray-100">
        <Footer />
      </div>

    </section>

    

  );
};

export default Contact;
