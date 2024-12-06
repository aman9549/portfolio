import 'react'
import { CONTACT } from '../constants'
import {  motion } from "framer-motion"


const Contect = () => {
  return (
    <>

<div className='border-b border-neutral-900 pb-24 ' >
<motion.h1

whileInView={{Opacity : 1 , y :0 }}
initial={{y : -100,Opacity:0 }}
transition={{duration:0.5 }}
className='my-20 text-center text-4xl'> 
Get in Touch 
</motion.h1>


<div className='text-center tracking-tighter'>


    <motion.p
      whileInView={{Opacity : 1 ,   x :0 }}
      initial={{x : -100,Opacity:0 }}
      transition={{duration:1 }}
    className='my-4'> 
      <a 
    href={`https://www.google.com/maps/search/${encodeURIComponent(CONTACT.address)}`} 
    target="_blank" 
    rel="noopener noreferrer" 
    className='text-blue-500'
  >
    {CONTACT.address}
  </a>
    </motion.p>


    <motion.p 
       whileInView={{Opacity : 1 ,   x :0 }}
       initial={{ x : 100,Opacity:0 }}
       transition={{duration:1 }}
    className='my-4'  > 
      <a href={`tel:${CONTACT.phoneNo}`} className='text-blue-500'>
    {CONTACT.phoneNo}
  </a>
  </motion.p>



<motion.p 
whileInView={{Opacity : 1 , y :0 }}
initial={{y : 100,Opacity:0 }}
transition={{duration:0.5 }}
className='my-4'>

<a href={`mailto:${CONTACT.email}`} target='_blank' className='border-b underline-offset-0'>
  {CONTACT.email}
</a>

 
    </motion.p>
  
  

</div>






    </div>  
    </>
  )
}

export default Contect ;
