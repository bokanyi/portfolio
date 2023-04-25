// import './App.css'
import { Flex } from '@chakra-ui/react'
import { Contacts } from './components/Contacts'
import { Education } from './components/Education'
import { Experience } from './components/Experiance'
import { Introduction } from './components/Introduction'
import { Languages } from './components/Languages'
import { Navbar } from './components/Navbar'
import { References } from './components/References'
import { Skills } from './components/Skills'
import { Box } from "@chakra-ui/react";

function App() {

  return (
    <Flex flexDirection={'column'}
    gap={"1em"}
    padding={"2em"}
    >
    <Navbar/>

      <Introduction/>
      <Contacts/>
      <Skills/>
      <Box w='600px' h='600px' bgGradient='radial(green.200, pink.500)'
      borderRadius={"50%"}
      zIndex={"-1"}
      position={"absolute"}
      right={"-300px"}
      filter={"blur(3em) opacity(85%)"}
      />
      <References/>
      <Languages/>
      <Education/>
      <Experience/>

    </Flex>
  )
}

export default App
