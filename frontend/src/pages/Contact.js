import Form from '../components/Form';
import Social from '../components/Social';

import { motion } from 'framer-motion'
import { pageAnimation } from '../components/Animation'

function Contact() {
  return ( 
    <motion.div 
      className="container"
      initial='hidden'
      animate='show'
      exit='exit'
      variants={pageAnimation}
    >
      <h2>Get in touch</h2>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <Form />
        </div>
        <div className="col-md-1 col-xs-12">
          <Social />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;