import { Flex, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";

export const Contacts = () => {
  const content = useGlobal($content);

  return (
    <Flex flexDirection={"column"} width={"400px"}>
      Contacts
      
          <Box gap={"1em"}>
            <p> {content?.contacts.email}</p>
            <p> {content?.contacts.github}</p>
            <p> {content?.contacts.linkedIn}</p>
            <p> {content?.contacts.tel}</p>
          </Box>
      
    </Flex>
  );
};
