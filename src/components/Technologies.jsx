import  'react'
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

import { RiReactjsLine    } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import {  SiMongodb    } from 'react-icons/si'
import { SiExpress } from "react-icons/si";
import {  TbBrandNextjs   } from 'react-icons/tb'

import { SiContao } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

import {  motion } from "framer-motion"


const iconVariants = (duration)=>({
    initial: {y: -10},
    animate :{
        y : [10 ,-10 ],
        transition: {
            duration: duration,
            ease :"linear" ,
            repeat: Infinity,
            repeatType :"reverse"
            
        }
    }

})

const Technologies = () => {
  return (
    <>
<div className='border-b border-neutral-800 pb-24 ' >
                <motion.h1 
                
                whileInView={{Opacity : 1 , y :0 }}
                initial={{y : -100,Opacity:0 }}
                transition={{duration:1.5 }}

                className='my-20 text-center text-4xl'> Technologies </motion.h1>

                <motion.div 
                
                whileInView={{Opacity : 1 , x :0 }}
                initial={{x : -100,Opacity:0 }}
                transition={{duration:1.5 }}

                className='flex flex-wrap items-center justify-center gap-4'> 

                    <motion.div 
                   
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                    
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <FaHtml5  className='text-7xl text-red-600' />
                    </motion.div>


                    <motion.div 
                       variants={iconVariants(2.5)}
                       initial="initial"
                       animate="animate"
                    
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <DiCss3   className='text-7xl text-blue-200' />
                    </motion.div>
                    <motion.div 
                       variants={iconVariants(3)}
                       initial="initial"
                       animate="animate"
                    
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <SiJavascript   className='text-7xl text-yellow-400' />
                     </motion.div>
                  


                     <motion.div 
                       variants={iconVariants(2)}
                       initial="initial"
                       animate="animate"
                    
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     < DiBootstrap   className='text-7xl text-purple-800 '  />
                     </motion.div>
                  
                     <motion.div 
                       variants={iconVariants(2.5)}
                       initial="initial"
                       animate="animate"
                    
                    
                    className=' rounded-2xl  border-4 border-neutral-900 p-4 '>
                     < FaGithub   className='text-7xl text-black-900' />
                     </motion.div>



                     <motion.div 
                       variants={iconVariants(3)}
                       initial="initial"
                       animate="animate"
                    
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <RiReactjsLine className='text-7xl text-cyan-400' />
                     </motion.div>


                     <motion.div 
                       variants={iconVariants(2)}
                       initial="initial"
                       animate="animate"
                    
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <FaNodeJs className='text-7xl text-green-700' />
                     </motion.div>

                     <motion.div 
                       variants={iconVariants(2.5)}
                       initial="initial"
                       animate="animate"
                    
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <SiMongodb className='text-7xl text-green-500' />
                     </motion.div>
                  



                   

                     <motion.div 
                       variants={iconVariants(3)}
                       initial="initial"
                       animate="animate"
                    
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <SiExpress className='text-7xl text-gray-100' />
                     </motion.div>

                     <motion.div 
                       variants={iconVariants(2)}
                       initial="initial"
                       animate="animate"
                    className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <TbBrandNextjs className='text-7xl text-white-400' />
                   </motion.div>
   

                   <motion.div 
                       variants={iconVariants(2.5)}
                       initial="initial"
                       animate="animate"
                     className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <SiContao className='text-7xl' />
                     </motion.div>


                     <motion.div 
                       variants={iconVariants(3)}
                       initial="initial"
                       animate="animate"
                     className=' rounded-2xl  border-4 border-neutral-800 p-4 '>
                     <TbBrandCpp className='text-7xl text-white-400 ' />
                     </motion.div>


              
                   
                    





                    

                </motion.div>


            </div>

      
    </>
  )
}

export default Technologies
