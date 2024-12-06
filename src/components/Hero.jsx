import  'react'
import {HERO_CONTENT} from '../constants'
import profilePic from "../assets/kevinRushProfile.png"

import { motion } from "framer-motion"


// const container = (delay)=>({
//     hidden : {x : -1000 ,Opacity :0 } ,
//  visible:{
//      x: 0 ,
//       Opacity: 1 } ,   

//     transition:{duration: 0.5 , delay :delay  }
// })




const Hero = () => {



  return (
<>

    <div className="border-b border-neutral-900 pb-4 lg:mb-35  ">
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
               
               <motion.h1 
            //   variants = {container(0)}  
            //   initial="hidden"
            //   animate="visible"
            whileInView={{Opacity : 1 , x :0 }}
            initial={{x : -300,Opacity:0 }}
            transition={{duration:0.5 }} 
         
            
                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                     Rahul Dagdi 
                </ motion.h1>
               <motion.span
//  variants = {container(0.5)}  
//  initial="hidden"
//  animate="visible"

whileInView={{Opacity : 1 , x :0 }}
initial={{x : -300,Opacity:0 }}
transition={{duration:1 }} 
  className='bg-gradient-to-t from-pink-300  to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent '> Mern Stack Developer 
  </motion.span>
                <motion.p 
                //  variants = {container(1)}  
                //  initial="hidden"
                //  animate="visible"
 whileInView={{Opacity : 1 , x :0 }}
initial={{x : -500,Opacity:0 }}
transition={{duration:1.5 }} 
                className='my-2 max-w-xl py-6 font-light tracking-tighter '> {HERO_CONTENT}</motion.p>
                
                </div>

            </div>
            <div className='w-full lg:w-1/2 lg:p-8' >
            <div className='flex justify-center'>
                <motion.img
                  whileInView={{Opacity : 1 , x :0 }}
                  initial={{x : 100,Opacity:0 }}
                  transition={{duration:2.5 }}

                src={profilePic} alt="profilePic" height={400} width={400} />
            </div>
            </div>



            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
               
       <motion.button 
       whileInView={{Opacity : 1 , x :0 }}
       initial={{x : -100,Opacity:0 }}
       transition={{duration:0.5 }} 
    
       
       className="ml-0 my-10 bg-blue-100 px-3 py-2 text-2xl rounded-md text-cyan-900  font-bold tracking-tight lg:mt-10 
       hover:bg-blue-400 hover:text-cyan-900 
       
       
       
       " >
        <a href='RAHUL--DAGDI-Resume-.pdf'  target='_blank'>RESUME</a>
       </motion.button>


            </div>
            </div>




        </div>

    </div>
      
</>
  )
}

export default Hero ; 
