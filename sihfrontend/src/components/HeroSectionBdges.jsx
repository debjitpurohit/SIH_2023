import React from 'react'
import bronze from '../assets/badges/bronze-removebg-preview.png'
import silver from '../assets/badges/silver-removebg-preview.png'
import gold from '../assets/badges/gold-removebg-preview.png'
import platinum from '../assets/badges/platinum-removebg-preview.png'
import diamond from '../assets/badges/diamond-removebg-preview.png'

const HeroSectionBdges = () => {
  return (
    <div className='flex w-[45vw] justify-evenly'>
            <img src={diamond} className='  h-[19vh]' />
            <img src={platinum} className=' h-[19vh]' />
            <img src={gold} className='     h-[19vh]' />
            <img src={silver} className='   h-[19vh]' />
            <img src={bronze} className='   h-[19vh]' />
        </div>
  )
}

export default HeroSectionBdges
