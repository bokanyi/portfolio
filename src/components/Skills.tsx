import { Flex, Progress, Box } from "@chakra-ui/react";

import React from "react";

import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";

export const Skills = () => {
  const content = useGlobal($content);

  return (
    <Flex flexDirection={"column"} width={"300px"} >
      Skills
      {content?.skills.map((skill) => {
        return (
          <Flex  key={skill.name} justifyContent={"space-between"} >
            <p> {skill.name} </p>
            <Box width={"150px"}>

            <Progress value={skill.value*10} size="xs" colorScheme="red" />
            </Box>
            
          </Flex>
        );
      })}
    </Flex>
  );
};
