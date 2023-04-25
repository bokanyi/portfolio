import React from 'react'
import { Button, Flex, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChatIcon } from "@chakra-ui/icons"
import { useColorMode } from '@chakra-ui/color-mode'
import {switchLanguage} from '../states/content'

export const Navbar= () => {

    const { colorMode, toggleColorMode } = useColorMode()


  return (
    <Flex justifyContent="space-between" alignItems="center" py={2}>
      <Flex gap={2}>
          <Button variant="ghost" onClick={() => switchLanguage("english")}>En</Button>

          <Button variant="ghost" onClick={() => switchLanguage("hungarian")}>Hu</Button>
       

      </Flex>
        <IconButton aria-label='' variant="ghost" onClick={toggleColorMode} icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} />

        
    </Flex>
  )
}
