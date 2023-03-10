import { Flex } from "@chakra-ui/react";
import { Advantageitem } from "./advantageitem";

export function Advantagesection() {
    return (<Flex justifyContent="space-between" margin="32px 0">
      <Advantageitem title="Free Shiping" content="On all UA order or order above $100" icon="/ico-truck.svg" />
      <Advantageitem title="30 days return" content="Simply return within 30 days for an exchange" icon="/ico-return.svg" />
      <Advantageitem title="Support 24/7" content="Contact us 24 hours a day, 7 days a week" icon="/ico-support.svg" />
    </Flex>);
  }