import { FC, ReactNode } from "react"
import { Center, Heading, SimpleGrid } from "@chakra-ui/react"

type Props = {
  children?: ReactNode;
};

const MainLayout: FC<Props> = ({
  children
}) => {
  return <Center bg='#b0cece' h='100vh' color='#0c2543'>
    { children }
  </Center>
}

export default MainLayout