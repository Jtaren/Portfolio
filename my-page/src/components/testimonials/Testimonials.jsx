import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
// import { Pagination } from 'swiper';

// import {Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'aspernatur labore distinctio ratione delectus voluptatem'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Modi alias animi delorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro'
  },
  {
    avatar: AVTR3,
    name: 'Nana Ama',
    review: 'Modi alias animi delorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro'
  },
  {
    avatar: AVTR4,
    name: 'Kwame Despite',
    review: 'Modi alias animi delorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro'
  },
  
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      
        
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials