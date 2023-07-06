import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { AiFillStar } from 'react-icons/ai'

const CarouselComponent = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sameer C.R',
      testimonial:
        'Had a hand on experience in backend Fullfill our bussiness need and also Great ,perfect time of Delivery.',
    },
    {
      id: 2,
      name: 'Satwik ra',
      testimonial: 'Has worked with for bulk delivery system has great knownlege of backend and frontEnd.Eager to learn new things and Full needs .',
    },
    {
      id: 3,
      name: 'Amit Sharma',
      testimonial: 'An excellent developer with fast comprehending new technology.',
    },
    {
      id: 4,
      name: 'SIDDHARTH GHOLAP',
      testimonial: 'Awesome web developer Agency',
    },
  ]
  const carouselStyle = {
    position: 'relative',
    width: '100%',
  }

  const slideStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px', // Adjust the height according to your needs
  }

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  }

  const prevArrowStyle = {
    ...arrowStyle,
    left: '10px', // Adjust the positioning according to your needs
  }

  const nextArrowStyle = {
    ...arrowStyle,
    right: '10px', // Adjust the positioning according to your needs
  }

  const testimonialStyle = {
    padding: '20px',
    textAlign: 'center',
  }

  const nameStyle = {
    marginBottom: '10px',
  }

  const textStyle = {
    fontSize: '16px',
  }
  const starStyle = {
    color: 'gold',
    marginRight: '5px',
  }

  return (
    <>
    <h1 className="company-name">Our Reviews</h1>
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            style={prevArrowStyle}
            onClick={onClickHandler}
            title={label}
          />
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            style={nextArrowStyle}
            onClick={onClickHandler}
            title={label}
          />
        )
      }
    >
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          style={testimonialStyle}
        >
          <h3 style={nameStyle}>{testimonial.name}</h3>
          <div style={textStyle}>
            <AiFillStar style={starStyle} />
            {testimonial.testimonial}
          </div>
        </div>
      ))}
    </Carousel>

    </>
  )
}


export default CarouselComponent
