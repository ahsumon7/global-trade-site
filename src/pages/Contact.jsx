import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='py-16 pt-24 bg-navy'>
      <div className='container mx-auto px-4'>
        <section className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-light-slate mb-4'>
            Get In Touch
          </h1>
          <p className='max-w-3xl mx-auto text-slate text-lg'>
            We're here to help. Reach out to us with any questions or to request
            a quote for our services.
          </p>
        </section>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-slate/5 p-8 rounded-lg'>
            <h2 className='text-2xl font-bold text-light-slate mb-6'>
              Send us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info & Map */}
          <div className='space-y-8'>
            <div className='bg-slate/5 p-8 rounded-lg'>
              <h2 className='text-2xl font-bold text-light-slate mb-6'>
                Contact Information
              </h2>
              <div className='space-y-4 text-slate'>
                <p className='flex items-center'>
                  <FaMapMarkerAlt className='mr-3 text-accent-orange' /> 123
                  Trade Street, New York, NY 10001
                </p>
                <p className='flex items-center'>
                  <FaPhone className='mr-3 text-accent-orange' /> (123) 456-7890
                </p>
                <p className='flex items-center'>
                  <FaEnvelope className='mr-3 text-accent-orange' />{' '}
                  contact@globaltrade.com
                </p>
              </div>
            </div>

            <div className='rounded-lg overflow-hidden shadow-lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617544062402!2d-74.00834228459427!3d40.74844097932785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117429%3A0x949f76c368f03761!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1672532959888!5m2!1sen!2sus'
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Office Location'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
