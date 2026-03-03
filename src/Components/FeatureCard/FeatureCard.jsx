import React from 'react'
import "./FeatureCard.css"
import { cardVariants } from '../Variants/Variants'
import { motion } from 'framer-motion'
export default function FeatureCard({icon:Icon,feature,text,color}) {
  return (
    <motion.div className={`feature-card flex justify-cnter items-center p-3 glass-effect gap-7 w-full mb-4  ${color}`}
      variants={cardVariants}
    >
        <div className='glass-effect p-5 flex items-center justify-center text-4xl'>
      <Icon/>
      </div>
      <div className='flex flex-col items-start justify-center'>
        <h5 className='text-2xl  '>{feature}</h5>
        <p className='text-gray-500 text-[1.3rem]'>{text}</p>
      </div>

    </motion.div>
  )
}
