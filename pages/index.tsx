import type { NextPage } from 'next'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, useAnimationControls } from "framer-motion"
import { animateContainer, animateItem } from '../transitions'
import MainLayout from "../layouts/main.layout"

const Home: NextPage = () => {
  const router = useRouter()
  const controls = useAnimationControls()

  useEffect(() => {
    sequence()
  }, [])

  const sequence = async () => {
    await controls.start("shown")
    await controls.start("hiddenWithDelay")

    nextScreen()
  }

  const nextScreen = () => {
    router.push("prepare")
  }

  return (
    <MainLayout>
      <SimpleGrid columns={1} spacing={10}>
        <motion.div
          variants={animateContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            variants={animateItem}
          >
            <Heading size="2xl" textAlign="center">
              Be Mindful.
            </Heading>
          </motion.div>
          <motion.div
            variants={animateItem}
          >
            <Heading mt={5} size="2xl" textAlign="center">
              Be Undistracted.
            </Heading>
          </motion.div>
        </motion.div>
      </SimpleGrid>
    </MainLayout>
  )
}

export default Home
