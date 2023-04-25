import { Flex, Box } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalFrame } from "../components/ModalFrame";
import { useState } from "react";

export const References = () => {
  const content = useGlobal($content);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [link, setLink] = useState("")

  return (
    <Flex flexDirection={"column"}>
      References
            <Modal isOpen={isOpen} size={"xl"}  onClose={onClose}>
              <ModalOverlay
                bg="none"
                backdropFilter="auto"
                // backdropInvert='80%'
                backdropBlur="2px"
                
              />
              <ModalContent height={"600px"}>
                {/* <ModalHeader>{reference.name}</ModalHeader> */}
                <ModalCloseButton color={"red"}/>
                <ModalBody>
                  <iframe
                    style={{
                      // position: "absolute",
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

            <Button onClick={() => {setLink(reference.link), onOpen()}}>Open Modal</Button>
          </Box>
        );
      })}
    </Flex>
  );
};
