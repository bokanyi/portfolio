import { Flex, Box, FormControl, FormLabel, Textarea, Input, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure, Button, FormHelperText } from "@chakra-ui/react";
import { useState } from "react";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { PhoneIcon, EmailIcon, LinkIcon, InfoIcon } from "@chakra-ui/icons";

const defaultInputValues = {
  text: "",
  email: "",
};

export const Contacts = () => {
  const content = useGlobal($content);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [values, setValues] = useState(defaultInputValues);
  const [valid, setValid] = useState(true)

  const [helperText, setHelperText] = useState({
    text: "",
    email: ""
 })

  const validation = (text: string, email: string ): void => {
    setHelperText({text:"", email:"" })
    setValid(true)

    if(text.length < 5) {
      setHelperText(prevState => { return { ...prevState, text:'Please fill the textfield!'}})
      setValid(false)
    }
    if (!(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))){
      setHelperText(prevState => {return {...prevState, email:"Invalid email address!" }})
      setValid(false)
      } 
  }

  const sendData = () => {
    if (valid){
    console.log("message sent", values)
    onClose()}
    else return null
  }

const handleSubmit = (e: React.FormEvent< HTMLFormElement >) => {
  e.preventDefault()
  // validation(values.text, values.email)
  sendData()
  // else return null
}

  return (
    <Flex flexDirection={"column"} width={"400px"} >
       <Modal isOpen={isOpen} size={"sm"} onClose={onClose} >
        <ModalOverlay
        
          bg="none"
          backdropFilter="auto"
          // backdropInvert='80%'
          backdropBlur="2px"
        />
        <ModalContent>
          {/* <ModalHeader>{reference.name}</ModalHeader> */}
          <ModalCloseButton background={"green.200"} color={"pink.500"} />
          <ModalBody  mt={4} >
            <form onSubmit={(e) => handleSubmit(e)}
            onChange={() => validation(values.text, values.email)}
            >

            <FormControl
            >
            <FormLabel>Feel free to text me</FormLabel>
            <Textarea 
            value={values.text} 
            onChange={(e) => setValues({ ...values, text: e.target.value })}
             />
             { helperText.text.length > 0 && <FormHelperText>{helperText.text}</FormHelperText>}
            <FormLabel>Email address</FormLabel>
            <Input type='text' 
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
           
           { helperText.email.length > 0 && <FormHelperText>{helperText.email}</FormHelperText>}
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            <Button
            mt={4}
            // colorScheme='white'

            type='submit'
          >
            Submit
          </Button>
          </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button onClick={() => onOpen()}> Contact me </Button>
      <Box >
        <Flex gap={"1em"} alignItems={"center"}>
          <EmailIcon />
          <p> {content?.contacts.email}</p>
        </Flex>
        <Flex gap={"1em"} alignItems={"center"}>
          <InfoIcon />
          <p> {content?.contacts.github}</p>
        </Flex>
        <Flex gap={"1em"} alignItems={"center"}>
          <LinkIcon />
          <p> {content?.contacts.linkedIn}</p>
        </Flex>
        <Flex gap={"1em"} alignItems={"center"}>
        <PhoneIcon /> <p> {content?.contacts.tel}</p>
        </Flex>
       
      </Box>
    </Flex>
  );
};
