import React, { lazy, Suspense } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LazyTestimonialImage = lazy(() => import('./TestimonialsImage'));

const Testimonials = ({ data }) => {
  // Settings for the Slider component
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Check if data exists before rendering */}
      {data && data.testimonials && (
        <div className="px-8 flex flex-col justify-center items-center h-auto w-full mt-20 lg:px-16 lg:flex-row lg:flex lg:gap-12">
          {/* TestimonialsImage component */}
          <div className="px-4 w-full h-40vh justify-center items-center mb-10">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyTestimonialImage />
            </Suspense>
          </div>
          <div className="px-4 w-full justify-center items-start lg:h-full mt-10 lg:w-7/12 lg:justify-start lg:items-center">
            {/* Testimonials heading */}
            <div className="mb-8 flex justify-start items-center w-full lg:h-1/10 lg:w-full lg:flex lg:justify-start lg:items-center">
              <h1 className="text-2xl font-bold lg:text-4xl text-purple lg:px-4">What my client says</h1>
            </div>
            {/* Slider component for testimonials */}
            <Slider {...settings} className="mx-10">
              {/* Mapping over testimonial data */}
              {data.testimonials.map((testimonial) => (
                <div key={testimonial._id} className="p-4">
                  {/* Individual testimonial */}
                  <div className="flex flex-col md:flex-row gap-1 mb-5">
                    {/* Testimonial image */}
                    <img
                      className="w-10 mb-2 mr-2 rounded-md items-center"
                      src={testimonial.image.url}
                      alt="client-img"
                      loading="lazy"
                    />
                    {/* Testimonial details */}
                    <div className="mb-2">
                      <h6>{testimonial.name}</h6>
                      <p className="text-purple text-md">{testimonial.position}</p>
                    </div>
                  </div>
                  {/* Testimonial review */}
                  <p>{testimonial.review}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
