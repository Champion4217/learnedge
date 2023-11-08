import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All rights reserved" color={'white'} />
          <Heading
            children="@Champion4217"
            color={'yellow.400'}
            size={'sm'}
            fontFamily={'body'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a href="https://youtube.com" target="blank">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com" target="blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/Champion4217" target="blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
