import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselComponent = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Kshitija Kubal',
      testimonial:
        'Good understanding of requirements, can learn any skills quickly and his guidance is amazing. Working with him was a great experience.',
    },
    {
      id: 2,
      name: 'Satwik ra',
      testimonial: 'A great developer with deep and broad technical experience.',
    },
    {
      id: 3,
      name: 'Amit Sharma',
      testimonial: 'An excellent developer with fast comprehending new technology.',
    },
    {
      id: 4,
      name: 'SIDDHARTH GHOLAP',
      testimonial: 'Awesome web developer',
    },
  ]
  return (
    <Carousel>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} style={{ padding: '20px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px' }}>{testimonial.name}</h3>
          <p style={{ fontSize: '16px' }}>{testimonial.testimonial}</p>
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselComponent
