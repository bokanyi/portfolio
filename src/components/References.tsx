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
    <Flex flexDirection={"column"}>
      References
      <Modal isOpen={isOpen} size={"xl"} onClose={onClose} >
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          // backdropInvert='80%'
          backdropBlur="2px"
        />
        <ModalContent height={"600px"}>
          {/* <ModalHeader>{reference.name}</ModalHeader> */}
          <ModalCloseButton background={"green.200"} color={"pink.500"} />
          <ModalBody  mt={4} mb={4}>
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
      {content?.reference.map((reference) => {
        return (
          <Box key={reference.name} gap={"1em"}>
            <h1>{reference.name}</h1>
            <p>
              {reference.description} {reference.tools}
            </p>

            {reference.link && (
              <Button
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
          </Box>
        );
      })}
    </Flex>
  );
};
