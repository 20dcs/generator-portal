import React from 'react';
import {
  ChakraProvider,
  Text,
  Input,
  Grid,
  Textarea,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
const Form = () => (
  <ChakraProvider resetCSS>
    <Grid
      className={'Form'}
      id='intro'
      templateColumns='repeat(1, 1fr)'
      gap={4}
      marginX={'auto'}
      marginTop={'4%'}
      maxW={'80%'}>
      <Grid templateColumns='repeat(5, 1fr)' gap={1}>
        <Text width='20vh'>My name is: </Text>
        <Input placeholder='Peter Parker' />
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)' gap={1}>
        <Text width='20vh'>Positions</Text>
        <Input placeholder='Position 1' />
        <Input placeholder='Position 2' />
        <Input placeholder='Position 3' />
        <Input placeholder='Position 4' />
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)' gap={14}>
        <Text p='10px' width='20vh'>
          Bio:{' '}
        </Text>
        <Input
          placeholder='Peter Parker'
          width='64vh'
          size='md'
          display='block'
        />
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)' gap={14}>
        <Text width='20vh'>Description: </Text>
        <Textarea
          size='md'
          placeholder='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias accusantium beatae dolorem ipsam voluptatibus, deserunt, quae neque quaerat voluptates a eum, nihil perspiciatis cumque architecto quis eaque dicta. Nulla, velit!'
          minWidth='80vh'
          minHeight='16vh'
        />
      </Grid>
    </Grid>
    <Grid
      className={'Form'}
      id='contact'
      templateColumns='repeat(1, 1fr)'
      gap={4}
      marginX={'auto'}
      marginTop={'4%'}
      maxW={'80%'}>
      <Grid templateColumns='repeat(5, 1fr)' gap={14}>
        <Text p='10px' width='20vh'>
          Email:{' '}
        </Text>
        <Input
          placeholder='peterparker@gmail.com'
          width='64vh'
          size='md'
          display='block'
        />
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)' gap={14}>
        <Text p='10px' width='20vh'>
          Github:{' '}
        </Text>
        <InputGroup width='64vh'>
          <InputLeftAddon>https://github.com/</InputLeftAddon>
          <Input placeholder='peterparker' width />
        </InputGroup>
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)' gap={14}>
        <Text p='10px' width='20vh'>
          LinkedIn:{' '}
        </Text>
        <InputGroup width='64vh'>
          <InputLeftAddon>https://www.linkedin.com/in/</InputLeftAddon>
          <Input placeholder='peterparker' width />
        </InputGroup>
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)' gap={14}>
        <Text p='10px' width='20vh'>
          Twitter:{' '}
        </Text>
        <InputGroup width='64vh'>
          <InputLeftAddon>https://twitter.com/</InputLeftAddon>
          <Input placeholder='peterparker' width />
        </InputGroup>
      </Grid>
    </Grid>
  </ChakraProvider>
);

export default Form;
