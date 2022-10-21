import React from 'react';
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
} from '@chakra-ui/react';
import { Select, CreatableSelect } from 'chakra-react-select';

import { ChevronDownIcon } from '@chakra-ui/icons';

const Form = () => {
  let technologies = [
    {
      label: 'Technologies',
      options: [
        { value: 'AdobeXd', label: 'AdobeXd' },
        { value: 'AfterEffects', label: 'AfterEffects' },
        { value: 'Bootstrap', label: 'Bootstrap' },
        { value: 'Css', label: 'Css' },
        { value: 'HTML', label: 'HTML' },
        { value: 'Figma', label: 'Figma' },
        { value: 'Firebase', label: 'Firebase' },
        { value: 'Illustrator', label: 'Illustrator' },
        { value: 'Javascript', label: 'Javascript' },
        { value: 'ReactJs', label: 'ReactJs' },
        { value: 'NextJs', label: 'NextJs' },
        { value: 'NodeJs', label: 'NodeJs' },
        { value: 'Sass', label: 'Sass' },
        { value: 'Tailwind', label: 'Tailwind' },
        //   { value: 'blue', label: 'Blue', color: '#0052CC' },
        //   { value: 'purple', label: 'Purple', color: '#5243AA' },
        //   { value: 'red', label: 'Red', color: '#FF5630' },
        //   { value: 'orange', label: 'Orange', color: '#FF8B00' },
        //   { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        //   { value: 'green', label: 'Green', color: '#36B37E' },
      ],
    },
  ];
  return (
    <ChakraProvider resetCSS>
      <Grid
        className={'Form'}
        id='intro'
        paddingY={'4vh'}
        templateColumns='repeat(1, 1fr)'
        gap={4}
        marginX={'auto'}
        marginTop={'4%'}
        maxW={'80%'}>
        <Heading>Introduction</Heading>
        <Grid templateColumns='repeat(5, 1fr)' gap={1}>
          <Text fontWeight={'bold'} width='20vh'>
            My name is:{' '}
          </Text>
          <Input placeholder='Peter Parker' />
        </Grid>
        <Grid templateColumns='repeat(5, 1fr)' gap={1}>
          <Text fontWeight={'bold'} width='20vh'>
            Positions
          </Text>
          <Input placeholder='Position 1' />
          <Input placeholder='Position 2' />
          <Input placeholder='Position 3' />
          <Input placeholder='Position 4' />
        </Grid>
        <Grid templateColumns='repeat(5, 1fr)' gap={14}>
          <Text fontWeight={'bold'} width='20vh'>
            Bio:{' '}
          </Text>
          <Input
            placeholder='Peter Parker'
            width='64vh'
            size='md'
            display='block'
          />
        </Grid>
        <Grid templateColumns='repeat(1 1fr)' gap={2}>
          <Text fontWeight={'bold'} width='20vh'>
            Description:{' '}
          </Text>
          <Textarea
            size='md'
            placeholder='Lorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsunLorem ispsun'
            minWidth='80vh'
            minHeight='16vh'
          />
          <Grid templateColumns='repeat(5, 1fr)' gap={14}>
            <Text fontWeight={'bold'} width='20vh'>
              Image Link:{' '}
            </Text>
            <Input
              placeholder='https://cdn.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.webp'
              width='80vh'
              size='sm'
              display='block'
            />
          </Grid>
        </Grid>

        <Grid templateColumns='repeat(5, 1fr)' gap={14}>
          <Text fontWeight={'bold'} width='20vh'>
            Skills:
          </Text>
          {/* <CheckboxGroup colorScheme='green' defaultValue={['HTML', 'CSS']}>
            <Grid templateColumns='repeat(2, 1fr)' gap={2} width='64vh'>
              <Checkbox value='AdobeXd'>AdobeXd</Checkbox>
              <Checkbox value='AfterEffects'>AfterEffects</Checkbox>
              <Checkbox value='Bootstrap'>Bootstrap</Checkbox>
              <Checkbox value='Css'>Css</Checkbox>
              <Checkbox value='HTML'>HTML</Checkbox>
              <Checkbox value='Figma'>Figma</Checkbox>
              <Checkbox value='Firebase'>Firebase</Checkbox>
              <Checkbox value='Illustrator'>Illustrator</Checkbox>
              <Checkbox value='Javascript'>Javascript</Checkbox>
              <Checkbox value='ReactJs'>ReactJs</Checkbox>
              <Checkbox value='NextJs'>NextJs</Checkbox>
              <Checkbox value='NodeJs'>NodeJs</Checkbox>
              <Checkbox value='Sass'>Sass</Checkbox>
              <Checkbox value='Tailwind'>Tailwind</Checkbox>
            </Grid>
          </CheckboxGroup> */}
          <FormControl width='80vh'>
            <CreatableSelect
              isMulti
              name='tech'
              options={technologies}
              placeholder='Select Technologies'
              closeMenuOnSelect={false}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        className={'Form'}
        id='socials'
        paddingY={'4vh'}
        templateColumns='repeat(1, 1fr)'
        gap={4}
        marginX={'auto'}
        marginTop={'4%'}
        maxW={'80%'}>
        <Heading>Socials</Heading>

        <Grid templateColumns='repeat(5, 1fr)' gap={14}>
          <Text fontWeight={'bold'} width='20vh'>
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
          <Text fontWeight={'bold'} width='20vh'>
            Github:{' '}
          </Text>
          <InputGroup width='64vh'>
            <InputLeftAddon>https://github.com/</InputLeftAddon>
            <Input placeholder='peterparker' width />
          </InputGroup>
        </Grid>
        <Grid templateColumns='repeat(5, 1fr)' gap={14}>
          <Text fontWeight={'bold'} width='20vh'>
            LinkedIn:{' '}
          </Text>
          <InputGroup width='64vh'>
            <InputLeftAddon>https://www.linkedin.com/in/</InputLeftAddon>
            <Input placeholder='peterparker' width />
          </InputGroup>
        </Grid>
        <Grid templateColumns='repeat(5, 1fr)' gap={14}>
          <Text fontWeight={'bold'} width='20vh'>
            Twitter:{' '}
          </Text>
          <InputGroup width='64vh'>
            <InputLeftAddon>https://twitter.com/</InputLeftAddon>
            <Input placeholder='peterparker' width />
          </InputGroup>
        </Grid>
        <Grid
          id='projects'
          paddingY={'4vh'}
          marginBottom={'8vh'}
          templateColumns='repeat(1, 1fr)'
          gap={14}
          display='grid'>
          <Heading>Projects</Heading>

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
              <Input placeholder='Notes' width='64vh' />
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Project Description:{' '}
              </Text>
              <Textarea placeholder='Lorem ispsum' width='64vh' />
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Demo Link:{' '}
              </Text>
              <Input placeholder='demoNotes.com' width='64vh' />
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Image Link:{' '}
              </Text>
              <Input placeholder='NotesImage.jpg' width='64vh' />
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Technologies:{' '}
              </Text>
              <FormControl width='64vh'>
                <CreatableSelect
                  isMulti
                  name='tech'
                  options={technologies}
                  placeholder='Select Technologies'
                  closeMenuOnSelect={false}
                />
              </FormControl>
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Status:{' '}
              </Text>
              <FormControl width={'36%'}>
                <Select
                  options={[
                    { value: 'Completed', label: 'Completed' },
                    { value: 'Working On it', label: 'Working On it' },
                  ]}
                  placeholder='Project status'
                  selectedOptionColor='green'
                  isSearchable={false}
                />
              </FormControl>
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

          {/* Project2 */}

          <Grid
            templateColumns='repeat(1, 1fr)'
            gap={4}
            width='96vh'
            justifySelf={'center'}>
            <Text fontSize={'2xl'} fontWeight={'extrabold'} width='32vh'>
              Project 2:{' '}
            </Text>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Project Title:{' '}
              </Text>
              <Input placeholder='Notes' width='64vh' />
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Project Description:{' '}
              </Text>
              <Textarea placeholder='Lorem ispsum' width='64vh' />
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Demo Link:{' '}
              </Text>
              <Input placeholder='demoNotes.com' width='64vh' />
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Image Link:{' '}
              </Text>
              <Input placeholder='NotesImage.jpg' width='64vh' />
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Technologies:{' '}
              </Text>
              <FormControl width='64vh'>
                <CreatableSelect
                  isMulti
                  name='tech'
                  options={technologies}
                  placeholder='Select Technologies'
                  closeMenuOnSelect={false}
                />
              </FormControl>
            </InputGroup>
            <InputGroup width='90vh'>
              <Text fontWeight={'bold'} display='block' width='26vh'>
                Status:{' '}
              </Text>
              <FormControl width={'36%'}>
                <Select
                  options={[
                    { value: 'Completed', label: 'Completed' },
                    { value: 'Working On it', label: 'Working On it' },
                  ]}
                  placeholder='Project status'
                  selectedOptionColor='green'
                  isSearchable={false}
                />
              </FormControl>
            </InputGroup>
          </Grid>
        </Grid>
      </Grid>
    </ChakraProvider>
  );
};

export default Form;
