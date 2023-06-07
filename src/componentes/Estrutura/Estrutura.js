import{ useState, useEffect, useRef } from 'react'
import './Estrutura.css'
import { motion } from 'framer-motion'

import image1 from '../img-local/2077.jpeg'
import image2 from '../img-local/corredor.jpeg'
import image3 from '../img-local/fora.jpg'
import image4 from '../img-local/quarto.jpeg'
import image5 from '../img-local/sofa1.jpeg'

const images = [image1, image2, image3, image4, image5]

function Estrutura(){

  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  return(
    <div className="Estrutura">
      <div className="leftEstrutura">
        <h3>Conheça nosso escritório</h3>
        <p>O nosso cantinho foi especialmente planejado e 
          projetado para atender os pequenos e suas famílias,
           os atendimentos contam com a técnica infantil de
            Ludoterapia por entender que a criança se expressa 
            naturalmente através do brincar.
            </p>
      </div>
      <div className="rightEstrutura">
          <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
            <motion.div className='inner'
            drag="x"
            dragConstraints={{left: 0, right: -width}}
            initial={{x: 200}}
            animate={{x: 0}}
            transition={{ duration: 3 }}
            >
              {images.map(image =>(
                <motion.div  className="item" key={image}>
                  <img src={image} ></img>
                </motion.div>
              ))}
      
            </motion.div>
          </motion.div>
      </div>

    </div>
  )
}

export default Estrutura