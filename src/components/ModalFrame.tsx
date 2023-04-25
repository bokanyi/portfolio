import { Flex, Box, ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { FC } from "react";

type Props ={
    link: string
}

export const ModalFrame :  FC<Props> = ({link}) => {
  const content = useGlobal($content);

  return (
    <Flex flexDirection={"column"} width={"400px"}>
      <ModalOverlay
                bg="none"
                backdropFilter="auto"
                // backdropInvert='80%'
                backdropBlur="2px"
              />
              <ModalContent>
                {/* <ModalHeader>{reference.name}</ModalHeader> */}
                <ModalCloseButton />
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
      
    </Flex>
  );
};
