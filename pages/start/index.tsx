import type { NextPage } from 'next'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import TypeIt from "typeit-react"
import { useRouter } from 'next/router'
import MainLayout from "../../layouts/main.layout"

const Start: NextPage = () => {
  const router = useRouter()

  const nextScreen = () => {
    router.push(`/start/mindful-breathing`)
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

                .type("Let's do some mindful exercises together.")
                .pause(1000)
                .delete()

                .type("Ready?")
                .pause(1000)
                .delete()

                .exec(nextScreen())

              return instance;
            }}
          />
        </Heading>
      </SimpleGrid>
    </MainLayout>
  )
}

export default Start
