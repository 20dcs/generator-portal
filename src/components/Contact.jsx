import { Box, Flex } from '@chakra-ui/react';
import Feedback from './Feedback';

function Contact() {
  return (
    <Flex
      className='Contact'
      width={{ base: '100%', lg: '100%' }}
      height={{ base: '100vh', lg: '78vh' }}
      textAlign='center'>
      <Box
        className='form'
        paddingBottom={{ base: '4%' }}
        paddingTop={{ md: '6%' }}
        alignContent={'center'}
        justifySelf={{ base: 'center' }}
        minW={'100%'}
        textAlign='-webkit-center'>
        <Feedback />
      </Box>
    </Flex>
  );
}

export default Contact;
