import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    const recipient = 'kenneth.nicholaus@submit-ai.com';
    const subject = `Contact Form Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    // Reset the form and button after a delay to allow the mail client to open
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Build the Future Together</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Ready to unlock the power of AI for your enterprise? Reach out to our team to start the conversation.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                aria-label="Your Name"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                aria-label="Your Email"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              aria-label="Your Message"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full md:w-auto shadow-lg hover:shadow-cyan-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Opening Your Email App...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;