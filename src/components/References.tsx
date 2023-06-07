import { Flex, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export const References = () => {
  const content = useGlobal($content);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [link, setLink] = useState("");

  return (
    <Flex flexDirection={"column"} mb={[10, 20, 40]}>

      <Box textStyle={"h3"} ml={[5, 20]} mb={[0, 20, 40]}>
        {content?.structure.references}
      </Box>
      <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent height={"600px"}>
          <ModalCloseButton background={"green.200"} color={"pink.500"} />
          <ModalBody mt={4} mb={4}>
            <iframe
              style={{
                // position: "absolute",
                borderRadius: "5px",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
              src={link}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box overflowY={"scroll"} width={["100vw"]} padding={[5, 10,20]} >

      <Flex width={["auto","auto","1600px",]} flexDirection={["column", "column", "row"]} gap={[5, 10, 35]} >
        {content?.reference.map((reference) => {
          return (
            <Flex flex="1" flexDirection={"column"}  key={reference.name}>
              <Box textStyle="h2">{reference.name} </Box>
              <Box textStyle="h4">{reference.tools}</Box>
              <Box>{reference.description}</Box>

              {reference.link && (
                <Button
                  alignSelf={["center", "start"]}
                  my={4}
                  onClick={(e) => {
                    e.preventDefault();
                    if (e.metaKey) {
                      window.open(reference.link, "_blank");
                    } else {
                      setLink(reference.link), onOpen();
                    }
                  }}
                >
                  Link
                </Button>
              )}
            </Flex>
          );
        })}
      </Flex>
      </Box>
    </Flex>
  );
};
