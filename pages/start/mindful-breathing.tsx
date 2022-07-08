import type { NextPage } from 'next'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, useAnimationControls } from "framer-motion"
import { animateContainer, animateItem } from '../../transitions'
import MainLayout from "../../layouts/main.layout"

const MindfulBreathing: NextPage = () => {
  const router = useRouter()
  const containerControls = useAnimationControls()
  const firstControls = useAnimationControls()
  const [text, setText] = useState("")
  
  useEffect(() => {
    sequence()
  }, [])

  const sequence = async () => {
    await containerControls.start("shown")
    
    setText("Mindful Breathing")
    await firstControls.start("shownWithDelay")
    await firstControls.start("hiddenWithDelay")
    
    setText("Start by breathing through your nose slowly.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 3 } })
    await firstControls.start("hiddenWithDelay")
    
    setText("Breathe out slowly for the next 5 seconds")
    await firstControls.start("shownWithDelay")
    await firstControls.start("hiddenWithDelay")
    setText("2")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("3")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("4")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("5")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")

    setText("And again, breathe in...")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 3 } })
    await firstControls.start("hiddenWithDelay")
    setText("And breathe out...")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")
    setText("2")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("3")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("4")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("5")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")

    setText("Awesome. Let's try it once more.")
    await firstControls.start("shownWithDelay")
    await firstControls.start("hiddenWithDelay")
    setText("This time, focus on your breathing")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")
    setText("Breathe in...")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 3 } })
    await firstControls.start("hiddenWithDelay")
    setText("And breathe out...")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")
    setText("2")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("3")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("4")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("5")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")

    setText("One last time...")
    await firstControls.start("shownWithDelay")
    await firstControls.start("hiddenWithDelay")
    setText("This time, do it with a smile :)")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")
    setText("Breathe in...")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 3 } })
    await firstControls.start("hiddenWithDelay")
    setText("And breathe out...")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")
    setText("2")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("3")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("4")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    setText("5")
    await firstControls.start({ display: "flex", transition: { delay: 1 } })
    await firstControls.start("hiddenWithDelay")

    setText("Awesome... feeling good?")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")
    setText("Let's move on to the next exercise.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    nextScreen()
  }

  const nextScreen = () => {
    router.push(`/start/mindful-observation`)
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
              { text }
            </Heading>
          </motion.div>
        </motion.div>
      </SimpleGrid>
    </MainLayout>
  )
}

export default MindfulBreathing
