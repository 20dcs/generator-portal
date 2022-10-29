import React from 'react'
import {
    ChakraProvider,
    Text,
    Input,
    Grid,
    Textarea,
    InputGroup,
    InputLeftAddon,
    Heading,
    CheckboxGroup,
    Stack,
    Checkbox,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
  } from '@chakra-ui/react';
import { Select, CreatableSelect } from 'chakra-react-select';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const Project = ({register,errors,technologies,control}) => {
  return (
    <>
    <Grid
                templateColumns='repeat(1, 1fr)'
                gap={4}
                width='96vh'
                justifySelf={'center'}>
                <Text fontSize={'2xl'} fontWeight={'extrabold'} width='32vh'>
                  Project 1:{' '}
                </Text>
                <InputGroup width='90vh'>
                  <Text fontWeight={'bold'} display='block' width='26vh'>
                    Project Title:{' '}
                  </Text>
                  <Input
                    id='projectTitle1'
                    name='projectTitle1'
                    {...register('projectTitle1', {
                      required: 'This is required',
                    })}
                    isInvalid={errors?.projectTitle1 ? true : false}
                    placeholder='Notes'
                    width='64vh'
                  />
                </InputGroup>
                <InputGroup width='90vh'>
                  <Text fontWeight={'bold'} display='block' width='26vh'>
                    Project Description:{' '}
                  </Text>
                  <Textarea
                    id='projectDescription1'
                    name='projectDescription1'
                    {...register('projectDescription1', {
                      required: 'This is required',
                    })}
                    isInvalid={errors?.projectDescription1 ? true : false}
                    placeholder='Lorem ispsum'
                    width='64vh'
                  />
                </InputGroup>
                <InputGroup width='90vh'>
                  <Text fontWeight={'bold'} display='block' width='26vh'>
                    Demo Link:{' '}
                  </Text>
                  <Input
                    id='projectLink1'
                    name='projectLink1'
                    {...register('projectLink1', {
                      required: 'This is required',
                    })}
                    isInvalid={errors?.projectLink1 ? true : false}
                    placeholder='demoNotes.com'
                    width='64vh'
                  />
                </InputGroup>
                <InputGroup width='90vh'>
                  <Text fontWeight={'bold'} display='block' width='26vh'>
                    Image Link:{' '}
                  </Text>
                  <Input
                    id='projectImgLink1'
                    name='projectImgLink1'
                    {...register('projectImgLink1', {
                      required: 'This is required',
                    })}
                    isInvalid={errors?.projectImgLink1 ? true : false}
                    placeholder='NotesImage.jpg'
                    width='64vh'
                  />
                </InputGroup>
                <InputGroup width='90vh'>
                  <Text fontWeight={'bold'} display='block' width='26vh'>
                    Technologies:{' '}
                  </Text>
                  <Controller
                    control={control}
                    name='project1'
                    rules={{ required: 'Select Technologies' }}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        width='64vh'
                        isInvalid={!!error}
                        id={'project1'}>
                        <CreatableSelect
                          isMulti
                          name={name}
                          ref={ref}
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                          options={technologies}
                          placeholder='Select Technologies'
                          closeMenuOnSelect={false}
                        />
                      </FormControl>
                    )}
                  />
                </InputGroup>
                <InputGroup width='90vh'>
                  <Text fontWeight={'bold'} display='block' width='26vh'>
                    Status:{' '}
                  </Text>
                  <Controller
                    control={control}
                    name='projectStatus1'
                    rules={{ required: 'Project Status required' }}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { error },
                    }) => (
                      <FormControl
                        width='36%'
                        isInvalid={!!error}
                        id={'projectStatus1'}>
                        <Select
                          name={name}
                          ref={ref}
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                          options={[
                            { value: 'Completed', label: 'Completed' },
                            { value: 'Working On it', label: 'Working On it' },
                          ]}
                          placeholder='Project status'
                          selectedOptionColor='green'
                          isSearchable={false}
                        />
                      </FormControl>
                    )}
                  />
                  {/* <Select
                icon={<ChevronDownIcon />}
                width={'36%'}
                variant='outline'
                size='md'>
                <option value='Completed'>Completed</option>
                <option value='Working On it'>Working On it</option>
              </Select> */}
                </InputGroup>
        </Grid>
    </>
  )
}

export default Project