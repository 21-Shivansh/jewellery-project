import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-3xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_logo} alt="" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Luna d'Oro, we celebrate the art of fine jewelry, where timeless elegance meets exquisite craftsmanship. Inspired by the radiance of the moon and the luxury of gold, our collections are designed to bring beauty, sophistication, and grace to every occasion.</p>
          <p>Each piece at Luna d'Oro is crafted with passion and precision, using the finest materials to ensure unmatched quality. Whether you seek a classic heirloom or a modern statement piece, our jewelry reflects a perfect blend of tradition and contemporary artistry.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At Luna d'Oro, we uphold the highest standards of craftsmanship, ensuring each piece is meticulously designed with premium materials. Our commitment to quality guarantees timeless elegance, durability, and lasting brilliance in every jewel.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>At Luna d'Oro, we ensure a seamless shopping experience with secure payments, easy returns, and worldwide shipping. Enjoy luxury with the convenience of shopping anytime, anywhere! ✨</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>At Luna d'Oro, we prioritize your satisfaction with exceptional customer service, ensuring a seamless shopping experience from start to finish. Our dedicated team is always ready to assist you with expert guidance, personalized recommendations, and prompt support. </p>
        </div>

      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
