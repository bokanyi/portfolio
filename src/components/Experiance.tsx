import { Flex, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";

export const Experience = () => {
  const content = useGlobal($content);

  return (
    <Flex flexDirection={"column"} width={["100%", "47%", "47%","22%"]}>
      <Box textStyle={'h3'}>
      {content?.structure.experience}
        </Box>
      {content?.experience.map((experience) => {
        return (
          <Box key={experience.company} gap={"1em"}>
            <p>
              {" "}
              {experience.year} {experience.company}{" "}
            </p>
          </Box>
        );
      })}
    </Flex>
  );
};
