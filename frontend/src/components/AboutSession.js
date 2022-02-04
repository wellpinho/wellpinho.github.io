import { useHistory } from 'react-router-dom'
import './about.css'
import { motion } from 'framer-motion'
import { 
  ButtonAnimation, 
  FadeAnimation, 
  ImageAnimation, 
  TitleAnimation, 
  ScrollReveal 
} from '../components/Animation'
import { useScroll } from '../hooks/UseScroll'

const AboutSession = () => {
  const history = useHistory()
  const [element, controls] = useScroll()

  const redirectHandles = () => {
    history.push('/contact')
  }

  return (
    <motion.div 
      className="container about"
      variants={ScrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <div className="row align-items-md-stretch">
        <div className="col-md-6 col-xs-12 h-100 p-5 mt-5">
          <motion.h2 variants={TitleAnimation}>Wellington Pinho </motion.h2>
          <h3>Software Engineer</h3>
          <motion.p variants={FadeAnimation}>
            I'm a software engineer who is passionate about making code more
            acessible, creating technology to elevate people, and building community.
            Some technologies I enjoy working with include constant creation of little gears, the MEAN(Mongo, Express, React, and NodeJS)
            stack and VueJS. I am currently working on an awesome company called Ahgora Systemas
          </motion.p>
          <motion.button onClick={redirectHandles} variants={ButtonAnimation} className="btn btn-custom-red">Contact me</motion.button>
        </div>
        <div className="col-md-6 col-xs-12 h-100 p-5 mt-5">
          <motion.img variants={ImageAnimation} className="img-fluid" src="./assets/programador.gif" alt="" />
        </div>
      </div>
    </motion.div>
  )
}
export default AboutSession
