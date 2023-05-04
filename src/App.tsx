import "./App.css";
import { Flex } from "@chakra-ui/react";
import { Contacts } from "./components/Contacts";
import { Education } from "./components/Education";
import { Experience } from "./components/Experiance";
import { Introduction } from "./components/Introduction";
import { Languages } from "./components/Languages";
import { Navbar } from "./components/Navbar";
import { References } from "./components/References";
import { Skills } from "./components/Skills";
import { Box } from "@chakra-ui/react";
import { Hobbies } from "./components/Hobbies";

function App() {
  return (
    <Flex
      flexDirection={"column"}
      gap={"1em"}
      padding={["1.2em", "2em"]}
      w={"100%"}
      overflow={"hidden"}
      position={"relative"}
    >
      <Navbar />

      <Introduction />

      <Contacts />

      <Flex flexDirection={"column"} alignItems={"center"}>
        <References />

        <Flex
          flexDirection={["column", "row"]}
          gap={[10, 25]}
          alignItems={["center", "flex-start"]}
          justifyContent={["center", "space-between"]}
          flexWrap={"wrap"}
        >
          <Skills />
          <Languages />
          <Education />
          <Experience />
        </Flex>

        <Hobbies></Hobbies>
      </Flex>

      <Box
        w={["300px", "400", "600px"]}
        h={["300px", "400", "600px"]}
        bgGradient={"radial(pink.300, green.200)"}
        borderRadius={"50%"}
        zIndex={"-1"}
        position={"fixed"}
        right={["-150px", "-200", "-300px"]}
        filter={"blur(3em) drop-shadow(0px 0px 50px beige) opacity(75%)"}
      />

      <Box
        w={["300px", "400", "600px"]}
        h={["300px", "400", "600px"]}
        bgGradient={"radial(green.600, pink.500)"}
        borderRadius={"50%"}
        zIndex={"-1"}
        position={"fixed"}
        bottom={["-50px", "-300", "-400px"]}
        filter={"blur(5em) drop-shadow(0px 0px 50px beige) opacity(25%)"}
      />
    </Flex>
  );
}

export default App;
