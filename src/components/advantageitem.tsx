import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import Image from "next/image"

type Props= {
    title: string;
    content: string;
    icon: string;
}

export function Advantageitem({title, content, icon}: Props) {
    return (<Grid gridTemplateColumns={{
      base:"1 fr",
      sm:"40px 1fr"
    }} alignItems="center" justifyItems="center" gap={{
      base:"16px",
      sm:"8px"
    }}>
      <GridItem>
        <Image src={icon} width={40} height={40} alt="" />
      </GridItem>
      <GridItem>
        <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">{title}</Text>
        <Show above="sm">
        <Text fontSize="xs">{content}</Text>
        </Show>
      </GridItem>
    </Grid>);
  }