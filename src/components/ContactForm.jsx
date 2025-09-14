import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    // Handle form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
    setStatus('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-light-slate">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full bg-slate/10 border border-slate/30 rounded-md shadow-sm py-2 px-3 text-light-slate focus:outline-none focus:ring-sky-blue focus:border-sky-blue"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-light-slate">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full bg-slate/10 border border-slate/30 rounded-md shadow-sm py-2 px-3 text-light-slate focus:outline-none focus:ring-sky-blue focus:border-sky-blue"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-light-slate">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full bg-slate/10 border border-slate/30 rounded-md shadow-sm py-2 px-3 text-light-slate focus:outline-none focus:ring-sky-blue focus:border-sky-blue"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy focus:ring-orange-500 transition duration-300"
        >
          Send Message
        </button>
      </div>
      {status && <p className="text-center text-sky-blue">{status}</p>}
    </form>
  );
};

export default ContactForm;