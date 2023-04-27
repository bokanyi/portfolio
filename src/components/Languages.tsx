import { Flex, Progress, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";

export const Languages = () => {
  const content = useGlobal($content);
  return (
    <Flex flexDirection={"column"} width={["100%", "47%", "47%", "22%"]}>
      <Box textStyle={"h3"}>{content?.structure.languages}</Box>
      {content?.languages.map((language) => {
        return (
          <Flex
            key={language.name}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <p> {language.name} </p>
            <Box width={["150px", "100px", "100px"]}>
              <Progress
                value={language.value * 10}
                size="xs"
                style={{
                  borderRadius: 5,
                  backgroundColor: "transparent",
                  border: "0.5px solid pink",
                }}
                colorScheme="pink"
              />
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
