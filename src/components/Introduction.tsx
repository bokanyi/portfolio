import { Flex, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";

export const Introduction = () => {
  const content = useGlobal($content);

  return (
    <div>
      <Flex flexDirection="column" gap={["2em", "4em"]}>
        <Box textStyle="h1" my={[5, 20]}>
          {content?.name}, {content?.position}
        </Box>

        <Box maxWidth={800} alignSelf={"end"}>
          {content?.about}
        </Box>
      </Flex>
    </div>
  );
};
