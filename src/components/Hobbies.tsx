import { Flex, Box, Image } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { useState } from "react";
import { Card } from "./Card";

export const Hobbies = () => {
  const content = useGlobal($content);


  return (
    <Flex flexDirection={"column"} alignItems={"center"} w={["100%", "60%"]} my={["5em", "10em"]}>
      <Box textStyle={"h3"}>{content?.structure.hobbies}</Box>

      <Flex flexDirection={[ "row"]} w={"100%"} alignItems={"center"} justifyContent={"space-around"}  my={["5em", "10em"]}>

        <Card img= "coffee" description="Coffee making" ></Card>
        <Card img= "kettlebell" description="Kettlebell training" ></Card>
        <Card img= "hiking" description="Hiking" ></Card>
      
      </Flex>
    </Flex>
  );
};
