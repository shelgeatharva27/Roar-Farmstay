import AboutImg from "../assets/about2.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
       <h2 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Us</span> </h2>
        <div className="flex flex-wrap ">
            <motion.div whileInView={{x:0, opacity: 1}}  initial={{x:-100,opacity:0}}
                            animate={{x:0, opacity:1}} transition={{duration: 0.5, delay: 0.2}} className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={AboutImg} alt="" />
                </div>
            </motion.div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justtify-start text-3xl p-10">
                    <motion.p initial={{x:-100, opacity: 0}}
                            animate={{x:0, opacity:1}} transition={{duration: 0.5, delay: 0.2}} className="my-2 max-w-xl py">Our cozy dining area is designed for relaxation and connecting with loved ones. Enjoy delicious local dishes made from fresh, farm-grown ingredients, and unwind in peaceful outdoor spaces perfect for lounging or stargazing. It’s an inviting spot to create lasting memories with friends and family, surrounded by nature’s calm beauty.</motion.p>
                </div>
                
                </div>
        </div>
      
    </div>
  )
}

export default About
