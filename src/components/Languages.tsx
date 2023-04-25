import { Flex, Progress, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";


export const Languages = () => {
    const content = useGlobal($content);
  return (
    <Flex flexDirection={"column"} width={"300px"} >
      Languages
      {content?.languages.map((language) => {
        return (
          <Flex  key={language.name} justifyContent={"space-between"} >
            <p> {language.name} </p>
            <Box width={"150px"}>

            <Progress value={language.value*10} size="xs" colorScheme="red" />
            </Box>
            
          </Flex>
        );
      })}
    </Flex>
  )
}
