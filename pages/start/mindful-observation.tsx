import type { NextPage } from 'next'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import TypeIt from "typeit-react"
import MainLayout from "../../layouts/main.layout"

const MindfulObservation: NextPage = () => {

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
        
                .type("Mindful Observation")
                .pause(1000)
                .delete()

                .type("We are going to show you a picture.")
                .pause(1000)
                .delete()
                .type("Don't do anything else.")
                .pause(750)
                .delete()
                .type("For one whole minute.")
                .pause(750)
                .delete()
                .type("Just focus on the picture.")
                .pause(750)
                .delete()
                .type("Explore every aspect of it.")
                .pause(750)
                .delete()
                .type("Relax and be in the moment.")
                .pause(750)
                .delete()
                .type("Ready?")
                .pause(1500)
                .delete()

              return instance;
            }}
          />
        </Heading>
      </SimpleGrid>
    </MainLayout>
  )
}

export default MindfulObservation
