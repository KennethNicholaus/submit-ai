import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., API call)
    console.log('Form submitted');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-slate-900 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Thank You!</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Your message has been sent. Our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Build the Future Together</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            Ready to unlock the power of AI for your enterprise? Reach out to our team to start the conversation.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name"
                required
                className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                required
                className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;