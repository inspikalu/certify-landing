import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const profiles = [
  {
    name: "Mbanefo ebuka",
    position: "Full-Stack Designer",
    image: "/cre8tiveebuka.png"
  },
  {
    name: "Nwakamma Dominion C.",
    position: "Mobile Develeoper",
    image: "/immadotdev.png"
  },
  {
    name: "Okereke C. Kalu",
    position: "Free Stack Olosho",
    image: "/inspikalu.png"
  },
  {
    name: "Ubadineke Prince",
    position: "Back-End Dev.",
    image: "/ubadineke.png"
  }
]

const ProfileCard = function({ name, position, image }: { name: string, position: string, image: string }) {
  return (
    <motion.div 
      className="grid grid-rows-[1fr_1fr] relative bg-[#6C3ACA] p-6 text-white rounded-[30px] text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="aspect-square w-[8rem] rounded-full absolute -top-[20%] left-[50%] -translate-x-1/2 border-[4px] border-[#BB86FC] overflow-hidden">
          <Image src={image} alt={name} fill />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-[2.5rem] uppercase whitespace-nowrap px-8 text-center">{name}</span>
        <span className="capitalize whitespace-nowrap block text-center">{position}</span>
      </div>
    </motion.div>
  )
}

const Profiles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const marqueeVariants = {
    animate: {
      x: ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
    initial: {
      x: "-100%",
    },
  }

  return (
    <div ref={ref} className="w-full min-h-[287px] flex items-center justify-center my-6 overflow-hidden py-3" id="the_team">
      <motion.div 
        className="w-full min-h-[287px] flex items-center justify-center gap-[20px] flex-row-reverse"
        variants={marqueeVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {profiles.map((value, index) => (
          <ProfileCard 
            key={index} 
            name={value.name} 
            position={value.position} 
            image={value.image} 
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Profiles
