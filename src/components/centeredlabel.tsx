import * as React from 'react';
import { Box,Flex } from '@chakra-ui/react';

interface ICategoryLabelProps {
  children:React.ReactNode
}

export const CenteredLabel: React.FunctionComponent<ICategoryLabelProps> = ({children}) => {
  return  <Box bgColor="white" padding="16px 24px" position="relative" width="fit-content" zIndex="1" textTransform="uppercase" fontWeight="bold" borderRadius="4px" textAlign="center">{children}</Box>;
};


