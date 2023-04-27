import { Box, Image } from "@chakra-ui/react";
import { FC, useState } from "react";

type Props = {
  img: string;
  description: string;
};

export const Card: FC<Props> = ({ img, description }) => {
  const [flip, setFlip] = useState(false);

  return (
    <Box
      width={"100px"}
      className={`card ${flip ? "flip " : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <Image
        className={"front"}
        src={`src/assets/${img}.png`}
        alt={`${img}`}
        borderRadius={"50%"}
      ></Image>
      <Box className={"back"}>{description}</Box>
    </Box>
  );
};
