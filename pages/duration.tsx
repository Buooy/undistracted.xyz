import type { NextPage } from 'next'
import { Button, Center, Heading, HStack, SimpleGrid } from "@chakra-ui/react"
import TypeIt from "typeit-react"
import { useState } from 'react'
import { useRouter } from 'next/router'

const Duration: NextPage = () => {
  const router = useRouter();

  const nextScreen = () => {
    router.push(`start`)
  }

  return (
    <Center bg='#b0cece' h='100vh' color='#0c2543'>
      <SimpleGrid columns={1} spacing={10}>
        <Heading size="2xl" textAlign="center">
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .options({
                  speed: 70,
                  lifeLike: false,
                })
                .type("For the next 5 minutes,")
                .break()
                .break()
                .type("be fully focused on this app.")
                .pause(1000)
                .delete()
                .exec(nextScreen)

              return instance;
            }}
          />
        </Heading>
      </SimpleGrid>
    </Center>
  )
}

export default Duration
