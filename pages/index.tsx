import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useContext, useRef, useEffect } from 'react';
import { ParallaxContext } from '../context/ParallaxContext';
import s from '../styles/Home.module.css'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const Home: NextPage = () => {

  const { scrollY } = useContext(ParallaxContext)
  const refContainer = useRef(null)

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer

  if (elContainer) {
    
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const porcentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight;
    
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, porcentY * numOfPages))
 
  }

  return (
    <>
      <Box ref={refContainer} bgColor='gray.800' minHeight='100vh' color='white' fontSize='4rem'>
        <Box mb='16' className={s.skillText}  style={{
          opacity: opacityForBlock(progress, 0)
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt quo voluptatibus laborum, pariatur ea ipsa aperiam non exercitationem ut illo?
          Deleniti omnis necessitatibus accusamus voluptate aspernatur magnam pariatur dolor exercitationem?
        </Box>
        <Box  className={s.skillText} style={{
          opacity: opacityForBlock(progress, 1)
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt quo voluptatibus laborum, pariatur ea ipsa aperiam non exercitationem ut illo?
          Deleniti omnis necessitatibus accusamus voluptate aspernatur magnam pariatur dolor exercitationem?
        </Box>

        <Box  className={s.skillText} style={{
          opacity: opacityForBlock(progress, 2)
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt quo voluptatibus laborum, pariatur ea ipsa aperiam non exercitationem ut illo?
          Deleniti omnis necessitatibus accusamus voluptate aspernatur magnam pariatur dolor exercitationem?
        </Box>

      </Box>
    </>
  )
}

export default Home
