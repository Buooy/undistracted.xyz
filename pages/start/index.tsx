import type { NextPage } from 'next'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, useAnimationControls } from "framer-motion"
import { animateContainer, animateItem } from '../../transitions'
import MainLayout from "../../layouts/main.layout"

const Start: NextPage = () => {
  const router = useRouter()
  const containerControls = useAnimationControls()
  const firstControls = useAnimationControls()
  const secondControls = useAnimationControls()

  useEffect(() => {
    sequence()
  }, [])

  const sequence = async () => {
    await containerControls.start("shown")
    await firstControls.start("shownWithDelay")
    await firstControls.start("hiddenWithDelay")
    await firstControls.start("removed")
    await secondControls.start({ display: "flex" })
    await secondControls.start("shownWithDelay")
    await secondControls.start({ display: "flex", transition: { delay: 2 } })
    await secondControls.start("hiddenWithDelay")

    nextScreen()
  }

  const nextScreen = () => {
    router.push(`/start/mindful-breathing`)
  }

  return (
    <MainLayout>
      <SimpleGrid columns={1} spacing={10}>
        <motion.div
          initial="hidden"
          animate={containerControls}
          variants={animateContainer}
        >
          <motion.div
            initial="hidden"
            animate={firstControls}
            variants={animateItem}
          >
            <Heading size="2xl" textAlign="center">
              Let&apos;s do some mindful exercises together.
            </Heading>
          </motion.div>
          
          <motion.div
            initial="removed"
            animate={secondControls}
            variants={animateItem}
          >
            <Heading size="2xl" textAlign="center">
              Ready?
            </Heading>
          </motion.div>
        </motion.div>
      </SimpleGrid>
    </MainLayout>
  )
}

export default Start
