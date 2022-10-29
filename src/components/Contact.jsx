import { Box, Flex, Grid } from '@chakra-ui/react';
import Feedback from './Feedback';
function Contact() {
  return (
    <Flex
      className='Contact'
      width={{ base: '100%', lg: '100%' }}
      height={{ base: '100vh', lg: '78vh' }}
      textAlign='center'>
      <Grid
        className={'Form'}
        templateColumns='repeat(1, 1fr)'
        gap={4}
        marginX={'auto'}
        marginTop={'4%'}
        maxW={'80%'}>
        <Box
          className='form'
          paddingBottom={{ base: '4%' }}
          paddingTop={{ md: '6%' }}
          alignContent={'center'}
          justifySelf={{ base: 'center' }}
          minW={'80%'}
          textAlign='-webkit-center'>
          <Feedback />
          {/* <Form/>    */}
        </Box>
      </Grid>
    </Flex>
  );
}

export default Contact;
