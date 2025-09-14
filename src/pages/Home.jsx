import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import ClientCarousel from '../components/ClientCarousel';
import { FaShip, FaPlane, FaDolly } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: <FaShip size={40} />,
      title: 'Sea Freight Export',
      description:
        'Reliable and cost-effective sea freight solutions for your export needs.',
    },
    {
      icon: <FaPlane size={40} />,
      title: 'Air Freight Import',
      description:
        'Fast and secure air freight services to import goods from anywhere in the world.',
    },
    {
      icon: <FaDolly size={40} />,
      title: 'Global Logistics',
      description:
        'Comprehensive logistics and supply chain management to streamline your operations.',
    },
  ];

  return (
    <div className='bg-gradient-to-br from-navy via-sky-blue to-blue-900 min-h-screen'>
      <HeroSection />

      {/* Services Preview Section */}
      <section className='py-24 bg-light-navy/80 backdrop-blur-md rounded-xl mx-4 mt-8 shadow-2xl'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-light-slate drop-shadow-lg mb-4 animate-fade-in'>
            Our Core Services
          </h2>
          <p className='max-w-3xl mx-auto text-slate mt-4 mb-12 text-lg md:text-xl'>
            We offer a full spectrum of services to make your global trade
            operations seamless and efficient.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {services.map((service, index) => (
              <div className='transition-transform duration-300 hover:scale-105'>
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
          <div className='mt-16'>
            <Link
              to='/services'
              className='inline-flex items-center gap-2 text-accent-orange font-semibold hover:text-orange-400 transition-colors duration-300 text-lg group bg-white/10 px-6 py-3 rounded-full shadow-lg hover:bg-white/20'
            >
              Explore All Services
              <span className='inline-block transition-transform duration-300 group-hover:translate-x-2 text-2xl'>
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ClientCarousel />

      {/* About Preview Section */}
      <section className='py-24'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center'>
          <div className='order-2 md:order-1'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-light-slate mb-4 drop-shadow-lg'>
              Your Trusted Partner in Global Trade
            </h2>
            <p className='text-slate mb-6 text-lg md:text-xl'>
              With over a decade of experience, we have established ourselves as
              a leader in the export-import industry. Our mission is to simplify
              international trade for our clients through innovative solutions
              and unparalleled customer service.
            </p>
            <Link
              to='/about'
              className='bg-gradient-to-r from-sky-blue to-blue-400 text-navy font-bold py-3 px-8 rounded-full hover:from-blue-400 hover:to-sky-blue transition duration-300 shadow-lg shadow-sky-blue/20'
            >
              Learn More About Us
            </Link>
          </div>
          <div className='order-1 md:order-2 flex justify-center'>
            <img
              src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80'
              alt='Company meeting'
              className='rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-sky-blue'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
