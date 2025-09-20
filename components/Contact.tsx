import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    const formData = {
      name,
      email,
      message,
    };

    try {
      // ==============================================================================
      // ACTION REQUIRED: 
      // 1. Go to https://formspree.io/ and create a new form.
      // 2. Set the recipient email to kenneth.nicholaus@submit-ai.com.
      // 3. Replace the URL below with your own unique Formspree form URL.
      //    (This is a public test endpoint: f/xeqyqjka)
      // ==============================================================================
      const response = await fetch('https://formspree.io/f/xeqyqjka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Build the Future Together</h2>
          
          {submissionStatus !== 'success' && (
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Ready to unlock the power of AI for your enterprise? Reach out to our team to start the conversation.
            </p>
          )}

          {submissionStatus === 'success' ? (
            <div className="bg-green-900/50 border border-green-700 text-green-300 px-6 py-4 rounded-lg text-center">
              <h3 className="font-bold text-xl">Thank You!</h3>
              <p>Your message has been sent successfully. We will get back to you shortly.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  aria-label="Your Name"
                />
                <input 
                  type="email"
                  name="email" 
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  aria-label="Your Email"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                aria-label="Your Message"
              ></textarea>
              
              {submissionStatus === 'error' && (
                <p className="text-red-400 text-center">
                  Oops! Something went wrong. Please check your details and try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full md:w-auto shadow-lg hover:shadow-cyan-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;