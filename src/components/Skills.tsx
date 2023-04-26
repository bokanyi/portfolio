import { Flex, Progress, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";

export const Skills = () => {
  const content = useGlobal($content);

  return (
    <Flex flexDirection={"column"} width={["100%","47%","47%", "22%"]} >
        <Box textStyle={'h3'}>
        {content?.structure.skills}

        </Box>
      
      {content?.skills.map((skill) => {
        return (
          <Flex  key={skill.name} alignItems={"center"} justifyContent={"space-between"} >
            <p> {skill.name} </p>
            <Box width={["150px", "100px", "100px"]}>

            <Progress value={skill.value*10} size="xs" style={{borderRadius: 5, backgroundColor: "transparent", border: "0.5px solid pink"}} 
            colorScheme="pink" 
            />
            </Box>
            
          </Flex>
        );
      })}
    </Flex>
  );
};
