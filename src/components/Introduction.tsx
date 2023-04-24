import React from "react";
import { Flex } from "@chakra-ui/react";
import useGlobal from "../hooks/useGlobal"
import {$content} from "../states/content"

export const Introduction = () => {

    const content = useGlobal($content)

  return (
    <div>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" py={2}>
        <h1>{content?.name}</h1>
    
          <h2>{content?.position}</h2>
        <Flex gap={2}>
          <p>
            {content?.about}
          </p>
        </Flex>
      </Flex>
    </div>
  );
};
