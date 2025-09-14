import React from 'react';
import Slider from 'react-slick';

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const logos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <div className='py-28 sm:py-32 bg-navy'>
      <div className='container mx-auto px-4'>
        {/* Clean, single heading structure */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-light-slate'>
            Our Valued Partners
          </h2>
          <p className='text-slate mt-4 text-lg'>
            Trusted by leading companies worldwide
          </p>
        </div>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            // Added more padding here for better spacing between logos
            <div key={index} className='px-6 sm:px-8'>
              <img
                src={`https://placehold.co/150x60/ffffff/0a192f?text=Partner+${logo}`}
                alt={`Partner logo ${index + 1}`}
                className='mx-auto h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer'
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientCarousel;
