import { Flex, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal"
import {$content} from "../states/content"

export const Education = () => {
    const content = useGlobal($content)

  return (
    <Flex flexDirection={"column"} width={["100%", "47%", "47%","22%"]}>
       <Box textStyle={'h3'}>
       {content?.structure.education}
        </Box>
      {content?.education.map((education) => {
        return (
          <Box key={education.name} gap={"1em"}>
            <p>  {education.year} </p>
            <h1> {education.name}</h1>
            <p> {education.degree}</p>
          </Box>
        );
      })}
    </Flex>
  )
}
