import { useLocation } from 'react-router-dom'
import Card from '../components/Card';
import { useApi } from '../hooks/userApi';
import Detail from '../components/Detail'

import { motion } from 'framer-motion'
import { pageAnimation } from '../components/Animation'

function Portfolio() {
  const location = useLocation()
  const slug = location.pathname.split('/')[2]
  const {data} = useApi('/portfolio')

  return ( 
    <motion.div 
      className="container"
      initial='hidden'
      animate='show'
      exit='exit'
      variants={pageAnimation}
    >
      {slug && <Detail slug={slug}/>}

      <div className="row">
          {data?.data.map((item) =>
            <Card key={item.slug} item={item} />
          )}
      </div>
    </motion.div>
  );
}

export default Portfolio;