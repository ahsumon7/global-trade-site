import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { FaShip, FaPlane, FaDolly, FaFileContract } from 'react-icons/fa';

const Services = () => {
  const allServices = [
    {
      icon: <FaShip size={40} />,
      title: 'Export Services',
      description:
        'We manage all aspects of your export process, from documentation and packaging to final delivery, ensuring your goods reach their destination safely and on time.',
    },
    {
      icon: <FaPlane size={40} />,
      title: 'Import Services',
      description:
        'Our import solutions simplify the complexities of bringing goods into the country, handling customs clearance, tariffs, and transportation efficiently.',
    },
    {
      icon: <FaDolly size={40} />,
      title: 'Logistics & Warehousing',
      description:
        'State-of-the-art warehousing and distribution services to manage your inventory. We provide flexible solutions tailored to your supply chain needs.',
    },
    {
      icon: <FaFileContract size={40} />,
      title: 'Customs Brokerage',
      description:
        'Our expert customs brokers navigate complex regulations to ensure compliance and avoid delays, saving you time and money.',
    },
  ];

  return (
    <div className='py-16 pt-24 bg-navy'>
      <div className='container mx-auto px-4'>
        <section className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-light-slate mb-4'>
            Comprehensive Trade Solutions
          </h1>
          <p className='max-w-3xl mx-auto text-slate text-lg'>
            We provide a complete suite of services designed to handle every
            aspect of your international trade operations.
          </p>
        </section>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {allServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
