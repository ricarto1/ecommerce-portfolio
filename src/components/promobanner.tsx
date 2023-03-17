import { Box, Text } from "@chakra-ui/react";
import { CenteredLabel } from "./centeredlabel";
import Image, {StaticImageData} from "next/image"

type Props={
    image: StaticImageData,
    children: React.ReactNode;
}

export function Promobanner({ image, children}: Props) {
    return (<Box position={"relative"}>
      <Image src={image} alt=""></Image>
      <Box position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)">
        <CenteredLabel>{children}</CenteredLabel>
      </Box>
    </Box>);
  }