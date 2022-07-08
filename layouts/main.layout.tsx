import { FC, ReactNode, useEffect, useState } from "react"
import { Center } from "@chakra-ui/react"
import {useWindowSize} from 'react-use'

type Props = {
  children?: ReactNode;
};

const MainLayout: FC<Props> = ({
  children
}) => {
  const {width, height} = useWindowSize()
  const [mainHeight, setMainHeight] = useState(0)

  useEffect(() => {
    setMainHeight(height)
  }, [height])

  return <Center bg='#b0cece' h={mainHeight + 'px'} px={3} color='#0c2543'>
    { children }
  </Center>
}

export default MainLayout