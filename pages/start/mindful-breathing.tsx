import type { NextPage } from 'next'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import TypeIt from "typeit-react"
import MainLayout from "../../layouts/main.layout"
import { useRouter } from 'next/router'

const MindfulBreathing: NextPage = () => {
  const router = useRouter()

  const nextScreen = () => {
    router.push(`/start/mindful-observation`)
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

                .type("Mindful Breathing")
                .pause(1000)
                .delete()
                .type("Start by breathing through your nose slowly.")
                .pause(1200)
                .empty()
                .type("Breath out slowly for the next 5 seconds")
                .pause(1500)
                .empty()
                .pause(100)
                .type("2")
                .pause(900)
                .delete()
                .pause(100)
                .type("3")
                .pause(900)
                .delete()
                .pause(100)
                .type("4")
                .pause(900)
                .delete()
                .pause(100)
                .type("5")
                .pause(900)
                .delete()

                .type("And again, breathe in...")
                .pause(3000)
                .empty()
                .type("And breathe out...")
                .pause(1100)
                .empty()
                .pause(100)
                .type("2")
                .pause(900)
                .delete()
                .pause(100)
                .type("3")
                .pause(900)
                .delete()
                .pause(100)
                .type("4")
                .pause(900)
                .delete()
                .pause(100)
                .type("5")
                .pause(900)
                .delete()

                .type("Let's try it once more.")
                .pause(750)
                .empty()
                .type("This time, focus on your breathing")
                .pause(500)
                .empty()
                .type("And breathe in...")
                .pause(3000)
                .empty()
                .type("And breathe out...")
                .pause(1700)
                .empty()
                .pause(100)
                .type("2")
                .pause(900)
                .delete()
                .pause(100)
                .type("3")
                .pause(900)
                .delete()
                .pause(100)
                .type("4")
                .pause(900)
                .delete()
                .pause(100)
                .type("5")
                .pause(900)
                .delete()

                .type("One last time...")
                .pause(750)
                .empty()
                .type("This time, do it with a smile :)")
                .pause(1000)
                .empty()
                .type("Breathe in...")
                .pause(3000)
                .empty()
                .type("And breathe out...")
                .pause(1700)
                .empty()
                .pause(100)
                .type("2")
                .pause(900)
                .delete()
                .pause(100)
                .type("3")
                .pause(900)
                .delete()
                .pause(100)
                .type("4")
                .pause(900)
                .delete()
                .pause(100)
                .type("5")
                .pause(900)
                .delete()

                .type("Awesome... feeling good?")
                .pause(750)
                .delete()

                .type("Let's move on to the next exercise.")
                .pause(1000)
                .empty()
                
                .exec(nextScreen)

              return instance;
            }}
          />
        </Heading>
      </SimpleGrid>
    </MainLayout>
  )
}

export default MindfulBreathing
