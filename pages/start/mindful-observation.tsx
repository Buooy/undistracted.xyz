import type { NextPage } from 'next'
import { Center, Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, useAnimationControls } from "framer-motion"
import YouTube from 'react-youtube';
import {useWindowSize} from 'react-use';
import { animateContainer, animateItem } from '../../transitions'
import MainLayout from "../../layouts/main.layout"

const MindfulObservation: NextPage = () => {
  const router = useRouter()
  const containerControls = useAnimationControls()
  const firstControls = useAnimationControls()
  const secondControls = useAnimationControls()
  const [text, setText] = useState("")
  const {width, height} = useWindowSize()
  
  useEffect(() => {
    sequence()
  }, [])

  const sequence = async () => {
    await containerControls.start("shown")
    await secondControls.start({ overflow: "hidden" })
    
    setText("Mindful Observation")
    await firstControls.start("shownWithDelay")
    await firstControls.start("hiddenWithDelay")

    setText("We are going to show you a video.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")
    
    setText("Don't do anything else.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("For one whole minute.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("Just focus on the video.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("Explore every aspect of it.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("Relax in the moment.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("Ready?")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("Let's go")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")
    await firstControls.start("removed")

    await secondControls.start({ display: "flex" })
    await secondControls.start("shownWithDelay")
    await secondControls.start({ display: "flex", transition: { delay: 60 } })
    await secondControls.start("hiddenWithDelay")
    await secondControls.start("removed")

    setText("How was it?")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("We are glad you liked it too.")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("Ready for one last exercise?")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    setText("Let's go")
    await firstControls.start("shownWithDelay")
    await firstControls.start({ display: "flex", transition: { delay: 2 } })
    await firstControls.start("hiddenWithDelay")

    // nextScreen()
  }

  const nextScreen = () => {
    router.push(`/start/mindful-appreciation`)
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

          <motion.div
            initial="removed"
            animate={secondControls}
            variants={animateItem}
          >
            <Center w="90vw" h="90vh" bgColor="">
              <YouTube
                videoId="tzwcUsZvGS0"
                opts={{
                  width: width * 0.9,
                  height: height * 0.9,
                  playerVars: {
                    controls: 0,
                    t: 30,
                    autoplay: 1,
                    mute: 1,
                  }
                }}
              />
            </Center>
          </motion.div>
        </motion.div>
      </SimpleGrid>
    </MainLayout>
  )
}

export default MindfulObservation
