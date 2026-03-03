import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import "./ContactMeSection.css"
import { MdEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'

export default function ContactMeSection() {
  return (
   <section className='contact-me-section  flex flex-col justify-center items-center w-full px-10 py-10'>
 <TitleComponent
        subTitle=" EXPERTISE"
        title="Contact Me"
        typeClass="flex flex-col items-center justify-center text-center "
      />
<div className='info-div flex justify-between items-center w-full'>
<div className='flex justify-center items-center'>
<MdEmail/>
<p>zeinabslman004@gmail.com</p>
</div>
<div className='flex justify-center items-center'>
<GoLocation/>
<p>Lattakia,syria</p>
</div>


</div>
   </section>
  )
}
