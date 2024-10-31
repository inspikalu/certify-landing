'use client'

import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import Marquee from "@/app/components/Marquee"
import Cards from "@/app/components/Cards"
import Profiles from "@/app/components/Profiles"
import Footer from "@/app/components/Footer"
import { motion } from "framer-motion"

const MarginedSection = function({ children }: { children: React.ReactNode }) {
  return (
    <motion.section 
      className="mx-[40px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Home = function() {
  return (
    <motion.div 
      className="mt-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <MarginedSection>
          <Navbar />
          <Hero />
        </MarginedSection>
      </motion.div>

      <motion.div variants={item}>
        <Marquee />
      </motion.div>

      <motion.div variants={item}>
        <MarginedSection>
          <Cards />
        </MarginedSection>
      </motion.div>

      <motion.div variants={item}>
        <Profiles />
      </motion.div>

      <motion.div variants={item}>
        <Footer />
      </motion.div>
    </motion.div>
  )
}

export default Home
