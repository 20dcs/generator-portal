import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Box,
  Grid,
  GridItem,
  FormErrorMessage,
  Button,
  Input,
  Textarea,
  FormControl,
  Heading,
} from '@chakra-ui/react';

const Feedback = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: 'Kartik',
      email: 'kartik6868@gmail.com',
      phone: '9999888222',
      message: 'Hello world',
    },
  });

  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
  }
  return (
    <Box
      // zIndex={10}
      // position={{ md: 'absolute' }}
      width={{ base: '100%', md: '22em', lg: '32em' }}
      height={{ base: '100%', md: '22em', lg: '40em' }}
      borderRadius={'2em'}
      color={'black'}
      paddingY={{ base: '0', md: '2em' }}
      backgroundColor={'white'}>
      <Heading
        as={'h3'}
        fontSize={'1.6em'}
        textAlign={'center'}
        paddingTop={'1em'}>
        Feedback Form
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors}>
          <Grid templateRows='repeat(5, 1fr)' gap={4} marginX={{ base: '1em' }}>
            <GridItem>
              <Input
                fontSize={'1em'}
                id='name'
                name='name'
                placeholder='Name'
                variant='flushed'
                {...register('name', {
                  required: 'This is required',
                })}
                isInvalid={errors?.name ? true : false}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </GridItem>

            <GridItem>
              <Input
                fontSize={'1em'}
                id='email'
                isInvalid={errors?.email ? true : false}
                type='email'
                variant='flushed'
                placeholder='E-mail'
                {...register('email', {
                  required: 'This is required',
                  minLength: {
                    value: 4,
                    message: 'Please enter valid Email',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </GridItem>
            <GridItem>
              <Input
                fontSize={'1em'}
                id='phone'
                name='phone'
                placeholder='Phone'
                variant='flushed'
                {...register('phone', {
                  required: 'This is required',
                  maxLength: {
                    value: 10,
                    message: 'Please enter valid Phone number',
                  },
                })}
                isInvalid={errors?.phone ? true : false}
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </GridItem>
            <GridItem>
              <Textarea
                fontSize={'1em'}
                id='msg'
                name='msg'
                placeholder='Message'
                variant='outline'
                {...register('msg')}
                isInvalid={errors?.msg ? true : false}
              />
              <FormErrorMessage>{errors.msg?.message}</FormErrorMessage>
            </GridItem>
            <GridItem textAlign={'center'} maxHeight={{ base: '1em' }}>
              <Button
                bgColor={'#000000'}
                color={'gray.100'}
                isLoading={isSubmitting}
                borderRadius={'16px'}
                _hover={{
                  color: '#000000',
                  bgColor: 'gray.100',
                }}
                type='submit'>
                Submit
              </Button>
            </GridItem>
          </Grid>
        </FormControl>
      </form>
    </Box>
  );
};

export default Feedback;
