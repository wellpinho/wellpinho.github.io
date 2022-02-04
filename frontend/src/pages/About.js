import AboutSession from "../components/AboutSession"
import SectionService from "../components/SectionService"

import { motion } from 'framer-motion'
import { pageAnimation } from '../components/Animation'

const about = () => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      exit='exit'
      variants={pageAnimation}
    >
      <AboutSession />
      <SectionService />
    </motion.div>
  )
}

export default about