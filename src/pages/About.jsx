import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      title: 'CEO & Founder',
      img: 'https://placehold.co/400x400/1e293b/ffffff?text=JD',
    },
    {
      name: 'Jane Smith',
      title: 'Head of Logistics',
      img: 'https://placehold.co/400x400/1e293b/ffffff?text=JS',
    },
    {
      name: 'Sam Wilson',
      title: 'Customs Director',
      img: 'https://placehold.co/400x400/1e293b/ffffff?text=SW',
    },
  ];

  return (
    <div className='py-16 pt-24 bg-navy'>
      <div className='container mx-auto px-4'>
        {/* Company History */}
        <section className='text-center mb-20'>
          <h1 className='text-4xl md:text-5xl font-bold text-light-slate mb-4'>
            About GlobalTrade Inc.
          </h1>
          <p className='max-w-3xl mx-auto text-slate text-lg'>
            Founded in 2010, GlobalTrade Inc. began with a mission to bridge
            global markets. We've since grown into a trusted partner for
            businesses worldwide, known for our reliability, expertise, and
            commitment to client success.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className='grid md:grid-cols-2 gap-12 mb-20'>
          <div className='bg-slate/5 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold text-sky-blue mb-3'>
              Our Mission
            </h2>
            <p className='text-slate'>
              To provide exceptional export-import services that empower
              businesses to thrive in the international marketplace. We are
              dedicated to delivering seamless, efficient, and transparent
              logistics solutions.
            </p>
          </div>
          <div className='bg-slate/5 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold text-sky-blue mb-3'>
              Our Vision
            </h2>
            <p className='text-slate'>
              To be the world's most customer-centric trade and logistics
              company, creating a global network where commerce is simple,
              accessible, and sustainable for everyone.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className='text-center mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-light-slate mb-12'>
            Meet Our Leadership Team
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div key={index} className='bg-slate/5 p-6 rounded-lg'>
                <img
                  src={member.img}
                  alt={member.name}
                  className='w-32 h-32 rounded-full mx-auto mb-4 border-4 border-sky-blue'
                />
                <h3 className='text-xl font-bold text-light-slate'>
                  {member.name}
                </h3>
                <p className='text-accent-orange'>{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-light-slate mb-8'>
            Our Certifications
          </h2>
          <div className='flex justify-center items-center gap-8 flex-wrap'>
            <div className='p-4 bg-slate/5 rounded-lg text-light-slate font-semibold'>
              ISO 9001:2015
            </div>
            <div className='p-4 bg-slate/5 rounded-lg text-light-slate font-semibold'>
              Authorized Economic Operator (AEO)
            </div>
            <div className='p-4 bg-slate/5 rounded-lg text-light-slate font-semibold'>
              C-TPAT Certified
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
