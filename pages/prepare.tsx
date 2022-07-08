import type { NextPage } from 'next'
import { Button, Center, Heading, SimpleGrid } from "@chakra-ui/react"
import TypeIt from "typeit-react"
import { useState } from 'react'
import { useRouter } from 'next/router'
import MainLayout from "../layouts/main.layout"

const Prepare: NextPage = () => {
  const router = useRouter()
  const [showCompletedButton, setShowCompletedButton ] = useState(false)

  const nextScreen = () => {
    if (document.body.requestFullscreen) document.body.requestFullscreen()
    router.push("start")
  }

  return (
    <MainLayout>
      <SimpleGrid columns={1} spacing={10}>
        <Heading size="2xl" textAlign="center">
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .options({
                  speed: 70,
                  lifeLike: false,
                })
                .type("Switch all your devices to slient.")
                .pause(500)
                .exec(() => setShowCompletedButton(true))

              return instance;
            }}
          />
        </Heading>

        <Button
          colorScheme='teal'
          variant='outline'
          size='lg'
          opacity={showCompletedButton ? 1 : 0}
          onClick={nextScreen}
        >
          Done&nbsp; 	&#10003;
        </Button>
      </SimpleGrid>
    </MainLayout>
  )
}

export default Prepare
