import React from 'react';
// import { SketchPicker } from 'react-color';
import { HexColorPicker } from 'react-colorful';
import {
  ChakraProvider,
  Text,
  Input,
  Grid,
  Textarea,
  InputGroup,
  InputLeftAddon,
  Heading,
  FormControl,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import {  CreatableSelect } from 'chakra-react-select';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Project from './Project';

const Form = () => {
  const [color, setColor] = useState('#aabbcc');
  const [projectArray, setProject] = useState([
    {
      title: 'Reports',
      ImageLink: '',
      Status: 'Completed',
      ProjectName: 'Reports',
      Technologies: ['HTML', 'TAILWIND', 'REACT', 'NEXT'],
      Description: 'Write reports for your students in 60 seconds or less',
      DemoLink: '',
    },
  ]);
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

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: 'Kartik',
      // position1: 'Web Developer',
    },
  });

  async function onSubmit(values) {
    // console.log(values);
    let data = {
      Color: '#00FFFF',
      Head: {
        title: values?.name ?? 'Jhon Doe | Frontend Developer & Designer',
        NavbarName: values?.name ?? 'Jhon Doe',
      },
      HomePage: {
        name: values?.name ?? 'Jhon Doe',
        Position: ['Position 1', 'Position 2', 'Position 3', 'Position 4'],
        description:
          values?.bio ??
          'I design and build websites that look good, and work well.',
      },
      AboutPage: {
        AboutParagraph:
          values?.description ??
          'I am a frontend developer and designer with a passion for creating beautiful and user-friendly websites and applications. I have a strong background in both web development and graphic design, and I enjoy using my skills to create stunning websites and interfaces that are easy to use and navigate.In my previous work, I have designed and developed websites for a variety of clients, including small businesses, non-profit organizations, and large corporations. I have also created mobile applications and responsive websites that are compatible with a variety of devices and screen sizes. My goal is always to create websites and applications that are visually appealing and user-friendly, and I believe that my skills and experience make me an excellent frontend developer and designer.',
        ImageLink:
          'https://cdn.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.webp',
      },
      Skills: ['Html', 'Bootstrap', 'Figma'],
      Projects: [
        {
          title: values?.projectTitle1 ?? 'Reports',
          ImageLink: values?.projectImgLink1 ?? '',
          Status: values?.name ?? 'Completed',
          ProjectName: values?.name ?? 'Reports',
          Technologies: ['HTML', 'TAILWIND', 'REACT', 'NEXT'],
          Description:
            values?.projectDescription1 ??
            'Write reports for your students in 60 seconds or less',
          DemoLink: values?.projectLink1 ?? '',
        },
        {
          title: 'TruthTable Generator',
          ImageLink:
            'https://user-images.githubusercontent.com/36930635/141287110-ce711d51-f9ca-42fd-8a25-f8e037d3c41b.png',
          Status: 'Completed',
          ProjectName: 'ColorHub',
          Technologies: ['HTML', 'TAILWIND', 'REACT', 'NEXT'],
          Description:
            'A responsive Web application which generates Truth table of Boolean expressions.',
          DemoLink: '',
        },
        {
          title: 'Meme Generator',
          ImageLink: '',
          Status: 'Working On it',
          ProjectName: 'ColorHub',
          Technologies: ['HTML', 'REACT', 'NEXT'],
          Description: 'Guide',
          DemoLink: '',
        },
      ],
      Contact: {
        Email: values?.email ?? 'johndoe@gmail.com',
        Github: values?.github ?? 'https://github.com/johndoe',
        Twitter: values?.twitter ?? 'https://twitter.com/johndoe',
        linkedIn: values?.linkedIn ?? 'https://linkedin.com/',
      },
    };

    if (values?.skills) {
      let tempArray = [];
      values.skills.forEach((s) => tempArray.push(s.value));
      data.Skills = tempArray;
    }
    console.log('data 148:   ', data);

    // When a post request is sent to the create url, we'll add a new users to the database.

    const newPerson = { userName: values.name, data: values };
    // {
    //     "userName": "John doe",
    //     "data": " {     \"Color\": \"#00FFFF\",     \"Head\": {         \"title\": \"Kartik\",         \"NavbarName\": \"Kartik\"     },     \"HomePage\": {         \"name\": \"Kartik\",         \"Position\": [             \"Position 1\",             \"Position 2\",             \"Position 3\",             \"Position 4\"         ],         \"description\": \"kjbkjb jkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj \"     },     \"AboutPage\": {         \"AboutParagraph\": \"jkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj bkj bkj bkj bkj bk jb kjbkj b kjbkj bk jbk bkj b kbkjb kjb kj bjkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj bkj bkj bkj bkj bk jb kjbkj b kjbkj bk jbk bkj b kbkjb kjb kj bjkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj bkj bkj bkj bkj bk jb kjbkj b kjbkj bk jbk bkj b kbkjb kjb kj bjkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj bkj bkj bkj bkj bk jb kjbkj b kjbkj bk jbk bkj b kbkjb kjb kj bjkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj bkj bkj bkj bkj bk jb kjbkj b kjbkj bk jbk bkj b kbkjb kjb kj bjkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj bkj bkj bkj bkj bk jb kjbkj b kjbkj bk jbk bkj b kbkjb kjb kj bjkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj bkj bkj bkj bkj bk jb kjbkj b kjbkj bk jbk bkj b kbkjb kjb kj bjkjb jkb kjb kjb kjb kj bkj bkj bkj bkjbkj bkj bkj bkj bkj bk jb kjbkj b kjbkj bk jbk bkj b kbkjb kjb kj b\",         \"ImageLink\": \"https://cdn.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.webp\"     },     \"Skills\": [         \"Javascript\",         \"ReactJs\",         \"NextJs\",         \"NodeJs\",         \"j\",         \"AdobeXd\",         \"AfterEffects\",         \"Bootstrap\",         \"kjbkjbk\"     ],     \"Projects\": [         {             \"title\": \"kjb\",             \"ImageLink\": \"nl\",             \"Status\": \"Kartik\",             \"ProjectName\": \"Kartik\",             \"Technologies\": [                 \"HTML\",                 \"TAILWIND\",                 \"REACT\",                 \"NEXT\"             ],             \"Description\": \"jn\",             \"DemoLink\": \"jl\"         },         {             \"title\": \"TruthTable Generator\",             \"ImageLink\": \"https://user-images.githubusercontent.com/36930635/141287110-ce711d51-f9ca-42fd-8a25-f8e037d3c41b.png\",             \"Status\": \"Completed\",             \"ProjectName\": \"ColorHub\",             \"Technologies\": [                 \"HTML\",                 \"TAILWIND\",                 \"REACT\",                 \"NEXT\"             ],             \"Description\": \"A responsive Web application which generates Truth table of Boolean expressions.\",             \"DemoLink\": \"\"         },         {             \"title\": \"Meme Generator\",             \"ImageLink\": \"\",             \"Status\": \"Working On it\",             \"ProjectName\": \"ColorHub\",             \"Technologies\": [                 \"HTML\",                 \"REACT\",                 \"NEXT\"             ],             \"Description\": \"Guide\",             \"DemoLink\": \"\"         }     ],     \"Contact\": {         \"Email\": \"hb\",         \"Github\": \"kjb\",         \"Twitter\": \"jbkjb\",         \"linkedIn\": \"https://linkedin.com/\"     } }"
    // }

    console.log('newPerson', newPerson);
    await fetch('http://localhost:5000/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  return (
    <ChakraProvider resetCSS>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors}>
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
                Choose theme color:{' '}
              </Text>
              {/* Color picker*/}
              <HexColorPicker color={color} onChange={setColor} />
              <Text fontWeight={'bold'} width='20vh'>
                My name is:{' '}
              </Text>
              <Input
                id='name'
                name='name'
                {...register('name', {
                  required: 'This is required',
                })}
                isInvalid={errors?.name ? true : false}
                placeholder='Peter Parker'
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </Grid>
            <Grid templateColumns='repeat(5, 1fr)' gap={1}>
              <Text fontWeight={'bold'} width='20vh'>
                Positions
              </Text>
              <Input
                id='Position 1'
                name='Position 1'
                variant='flushed'
                {...register('position1', {
                  required: 'This is required',
                })}
                isInvalid={errors?.position1 ? true : false}
                placeholder='Position 1'
              />
              <Input
                id='Position 2'
                name='Position 2'
                variant='flushed'
                {...register('position2', {
                  required: 'This is required',
                })}
                isInvalid={errors?.position2 ? true : false}
                placeholder='Position 2'
              />
              <Input
                id='Position 3'
                name='Position 3'
                variant='flushed'
                {...register('position3', {
                  required: 'This is required',
                })}
                isInvalid={errors?.position3 ? true : false}
                placeholder='Position 3'
              />
              <Input
                id='Position 4'
                name='Position 4'
                variant='flushed'
                {...register('position4', {
                  required: 'This is required',
                })}
                isInvalid={errors?.position4 ? true : false}
                placeholder='Position 4'
              />
            </Grid>
            <Grid templateColumns='repeat(5, 1fr)' gap={14}>
              <Text fontWeight={'bold'} width='20vh'>
                Bio:{' '}
              </Text>
              <Input
                placeholder='I am secretly spiderman'
                id='bio'
                name='bio'
                {...register('bio', {
                  required: 'This is required',
                })}
                isInvalid={errors?.bio ? true : false}
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
                id='description'
                name='description'
                {...register('description', {
                  required: 'This is required',
                })}
                isInvalid={errors?.description ? true : false}
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
                  id='imgLink'
                  name='imgLink'
                  {...register('imgLink', {
                    required: 'This is required',
                  })}
                  isInvalid={errors?.imgLink ? true : false}
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
              <Controller
                control={control}
                name='skills'
                rules={{ required: 'Please enter at least one food group.' }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { error },
                }) => (
                  <FormControl width='80vh' isInvalid={!!error} id={'skills'}>
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
                id='email'
                name='email'
                {...register('email', {
                  required: 'This is required',
                })}
                isInvalid={errors?.email ? true : false}
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
                <Input
                  id='github'
                  name='github'
                  {...register('github', {
                    required: 'This is required',
                  })}
                  isInvalid={errors?.github ? true : false}
                  placeholder='peterparker'
                  width
                />
              </InputGroup>
            </Grid>
            <Grid templateColumns='repeat(5, 1fr)' gap={14}>
              <Text fontWeight={'bold'} width='20vh'>
                LinkedIn:{' '}
              </Text>
              <InputGroup width='64vh'>
                <InputLeftAddon>https://www.linkedin.com/in/</InputLeftAddon>
                <Input
                  id='linkedin'
                  name='linkedin'
                  {...register('linkedin', {
                    required: 'This is required',
                  })}
                  isInvalid={errors?.linkedin ? true : false}
                  placeholder='peterparker'
                  width
                />
              </InputGroup>
            </Grid>
            <Grid templateColumns='repeat(5, 1fr)' gap={14}>
              <Text fontWeight={'bold'} width='20vh'>
                Twitter:{' '}
              </Text>
              <InputGroup width='64vh'>
                <InputLeftAddon>https://twitter.com/</InputLeftAddon>
                <Input
                  id='twitter'
                  name='twitter'
                  {...register('twitter', {
                    required: 'This is required',
                  })}
                  isInvalid={errors?.twitter ? true : false}
                  placeholder='peterparker'
                  width
                />
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

              {/* Project1 */}
              <Project
                register={register}
                errors={errors}
                control={control}
                technologies={technologies}
              />
              {/* Project2 */}
              <Project
                register={register}
                errors={errors}
                control={control}
                technologies={technologies}
              />
            </Grid>
            <Button
              bgColor={'#000000'}
              color={'gray.100'}
              isLoading={isSubmitting}
              borderRadius={'6px'}
              _hover={{
                color: '#000000',
                bgColor: 'gray.100',
              }}
              type='submit'>
              Submit
            </Button>
          </Grid>
        </FormControl>
      </form>
    </ChakraProvider>
  );
};

export default Form;
