import type { NextPage } from 'next'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import TypeIt from "typeit-react"
import { useRouter } from 'next/router'
import MainLayout from "../layouts/main.layout"

const Home: NextPage = () => {
  const router = useRouter()

  const nextScreen = () => {
    router.push("prepare")
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
                .type("Be Mindful.")
                .pause(250)
                .break()
                .break()
                .type("Be Undistracted.")
                .pause(500)
                .delete()
                .exec(nextScreen)

              // Remember to return it!
              return instance;
            }}
          />
        </Heading>
      </SimpleGrid>
    </MainLayout>
  )
}

export default Home
