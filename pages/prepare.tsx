import type { NextPage } from 'next'
import { Button, Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, useAnimationControls } from "framer-motion"
import { animateContainer, animateItem } from '../transitions'
import MainLayout from "../layouts/main.layout"

const Prepare: NextPage = () => {
  const router = useRouter()
  const containerControls = useAnimationControls()

  useEffect(() => {
    sequence()
  }, [])

  const sequence = async () => {
    await containerControls.start("shown")
  }

  const nextScreen = async () => {
    if (document.body.requestFullscreen) document.body.requestFullscreen()

    await containerControls.start("hidden")

    router.push("/start")
  }

  return (
    <MainLayout>
      <SimpleGrid columns={1} spacing={10}>
        <motion.div
          variants={animateContainer}
          initial="hidden"
          animate={containerControls}
        >
          <motion.div
            variants={animateItem}
          >
            <Heading size="2xl" textAlign="center">
              Switch all your devices to silent.
            </Heading>
          </motion.div>
          <motion.div
            variants={animateItem}
          >
            <Button
              colorScheme='teal'
              variant='outline'
              size='lg'
              w="100%"
              py={5}
              mt={10}
              onClick={nextScreen}
            >
              Click here when done
            </Button>
          </motion.div>
        </motion.div>
      </SimpleGrid>
    </MainLayout>
  )
}

export default Prepare
