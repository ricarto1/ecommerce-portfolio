import * as React from 'react';
import { Box,Flex } from '@chakra-ui/react';

interface ICategoryLabelProps {
  children:React.ReactNode
}

export const CenteredLabel: React.FunctionComponent<ICategoryLabelProps> = ({children}) => {
  return <Flex display="flex" alignItems="center" justifyContent="center" height="100%" > <Box bgColor="white" padding="16px 24px" position="relative" width="fit-content" zIndex="1" textTransform="uppercase" fontWeight="bold" borderRadius="4px" >{children}</Box></Flex>;
};


