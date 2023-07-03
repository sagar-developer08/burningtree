import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {

  const testimonials = [
    {
      id: 1,
      name: 'Kshitija Kubal',
      testimonial: 'Good understanding of requirements, can learn any skills quickly and his guidance is amazing. Working with him was a great experience.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      testimonial: 'Pellentesque ullamcorper augue vel risus semper, sed vestibulum quam cursus.',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      testimonial: 'Donec ullamcorper risus a ipsum finibus, ut fermentum mauris dapibus.',
    },
  ];
  return (
    <Carousel>
    {testimonials.map((testimonial) => (
      <div key={testimonial.id}>
        <h3>{testimonial.name}</h3>
        <p>{testimonial.testimonial}</p>
      </div>
    ))}
  </Carousel>
  );
};

export default CarouselComponent;
