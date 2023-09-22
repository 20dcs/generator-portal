import {
  Box,
  Center,
  Heading,
  Text,
  Link,
  Image,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
// import "./home.css";

const Home = () => {
  return (
    <Center>
      <Box
        maxW='80vw'
        alignItems='center'
        boxShadow='md'
        borderRadius='md'
        p={8}>
        <Heading as='h1' size='2xl' mb={4}>
          ProFolio
        </Heading>
        <Text fontSize='xl' mb={8}>
          Profolio is a customizable portfolio website template that allows
          users to easily create and host their own portfolio website. In this
          tutorial, we'll walk you through the steps to get started with
          Profolio.
        </Text>
        <Flex direction={['column', 'column', 'row']} mb={8}>
          <Box flex='1' mr={[0, 0, 8]}>
            <Heading as='h2' size='xl' mb={4}>
              Step 1: Fork the Template Repository
            </Heading>
            <Text fontSize='xl' mb={8}>
              To get started, head over to the{' '}
              <Link
                href='https://github.com/20dcs/Profolio'
                target='_blank'
                rel='noreferrer'
                color='blue.500'>
                Profolio GitHub repository
              </Link>{' '}
              and fork the repository to your own GitHub account.
            </Text>
            <Text fontSize='xl' mb={8}>
              After forking the repository, you'll need to replace the{' '}
              <code>data.json</code> file with your own personal data. To
              generate this data, visit{' '}
              <Link
                href='https://profoliomaker.netlify.app/'
                target='_blank'
                rel='noreferrer'
                color='blue.500'>
                https://profoliomaker.netlify.app/
              </Link>{' '}
              and fill in your details, just like making a resume.
            </Text>
            <Text fontSize='xl' mb={8}>
              Once you're finished, just copy the code that is generated and
              replace the existing <code>data.json</code> file in your forked
              repository.
            </Text>
          </Box>
          <Box flex='1'>
            <Image
              src='https://github.com/20dcs/Profolio/assets/36930635/263097b3-7b3e-4353-bd0e-c0187325a593'
              alt='Screenshot 1'
              borderRadius={'md'}
              mx={2}
              mb={4}
              w={'100%'}
            />
          </Box>
        </Flex>
        <Flex flexDirection={'row'}>
          <Image
            src='https://github.com/20dcs/Profolio/assets/36930635/36eb7746-baeb-4633-b821-f88688aae06e'
            alt='Screenshot 2'
            mb={4}
            borderRadius={'md'}
            mx={2}
            w={'50%'}
          />
          <Image
            src='https://github.com/20dcs/Profolio/assets/36930635/97f6cb29-cb49-40f0-ba87-9cdfb1ab413c'
            alt='Screenshot 3'
            mb={8}
            borderRadius={'md'}
            mx={2}
            w={'50%'}
          />
        </Flex>
        <Flex direction={['column-reverse', 'column-reverse', 'row']} mb={8}>
          <Box flex='1' mr={[0, 0, 8]}>
            <Heading as='h2' size='xl' mb={4}>
              Step 2: Replace the Data
            </Heading>
            <Text fontSize='xl' mb={8}>
              After forking the repository, you'll need to replace the{' '}
              <code>data.json</code> file with your own personal data. To
              generate this data, visit{' '}
              <Link
                href='https://profoliomaker.netlify.app/'
                target='_blank'
                rel='noreferrer'
                color='blue.500'>
                https://profoliomaker.netlify.app/
              </Link>{' '}
              and fill in your details, just like making a resume.
            </Text>
            <Text fontSize='xl' mb={8}>
              Once you're finished, just copy the code that is generated and
              replace the existing <code>data.json</code> file in your forked
              repository.
            </Text>
          </Box>
          <Box flex='1'>
            <Image
              src='https://github.com/20dcs/Profolio/assets/36930635/75923e99-234e-4eec-86e1-3763b1e5ad2f'
              alt='Screenshot 4'
              mb={4}
              borderRadius={'md'}
              mx={2}
              w={'100%'}
            />
          </Box>
        </Flex>
        <Flex flexDirection={'row'}>
          <Image
            src='https://github.com/20dcs/Profolio/assets/36930635/0e640d69-834c-4a47-a8eb-1602c8f0fea1'
            alt='Screenshot 7'
            mb={4}
            borderRadius={'md'}
            mx={2}
            w={'50%'}
          />
          <Image
            src='https://github.com/20dcs/Profolio/assets/36930635/6bd9d278-1ae7-4208-8577-0771430d0bf9'
            alt='Screenshot 8'
            mb={8}
            borderRadius={'md'}
            mx={2}
            w={'50%'}
          />
        </Flex>

        <Flex direction={['column', 'column', 'row']} mb={8}>
          <Box flex='1' mr={[0, 0, 8]}>
            <Heading as='h2' size='xl' mb={4}>
              Step 3: Host the Website
            </Heading>
            <Text fontSize='xl' mb={8}>
              Finally, you'll just need to host your portfolio website. Profolio
              is built with{' '}
              <Link
                href='https://nextjs.org/'
                target='_blank'
                rel='noreferrer'
                color='blue.500'>
                Next.js
              </Link>
              , so you can easily host your website with any free hosting
              platform such as{' '}
              <Link
                href='https://www.netlify.com/'
                target='_blank'
                rel='noreferrer'
                color='blue.500'>
                Netlify
              </Link>
              . Just sign up on the platform, give it access to your GitHub
              account and import your forked repository. It will be deployed on
              the internet. Once you've hosted your website on the internet, you
              can share a simple link to your portfolio and showcase your work
              to the world!
            </Text>
          </Box>
          <Box flex='1'>
            <Image
              src='https://github.com/20dcs/Profolio/assets/36930635/3422dae6-aa5c-44f3-9121-fb11b7a8b7fc'
              alt='Screenshot 9'
              mb={4}
              borderRadius={'md'}
              mx={2}
              w={'100%'}
            />
          </Box>
        </Flex>
        <Flex flexDirection={'row'}>
          <Image
            src='https://github.com/20dcs/Profolio/assets/36930635/06375df6-4916-4f7d-8907-a285cec7d742'
            alt='Screenshot 10'
            mb={4}
            borderRadius={'md'}
            mx={2}
            w={'50%'}
          />
          <Image
            src='https://github.com/20dcs/Profolio/assets/36930635/ea553c8f-e689-4e4e-aacd-9c4245639300'
            alt='Screenshot 12'
            mb={8}
            borderRadius={'md'}
            mx={2}
            w={'50%'}
          />
        </Flex>
        <Center>
          <Image
            src='https://github.com/20dcs/Profolio/assets/36930635/71adcabf-c33d-41fd-9da2-927f8c0eadbe'
            alt='Screenshot 13'
            mb={8}
            mx={2}
            w={'80%'}
            borderRadius={'md'}
          />
        </Center>
        <Text fontSize='3xl' fontWeight={'800'} fontStyle='italic'>
          That's it! With just three simple steps, you can create and host your
          very own professional portfolio website using Profolio✨
        </Text>
      </Box>
    </Center>
  );
};

export default Home;
