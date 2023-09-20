import {
  Box,
  Button,
  Center,
  Code,
  Grid,
  Spinner,
  useClipboard,
  Text,
} from '@chakra-ui/react';
import { useState, useEffect, React } from 'react';

const Getjson = () => {
  const { onCopy, setValue, hasCopied } = useClipboard('');

  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL of the API
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/userdata/getdata`;

    // Define the headers, including the auth-token
    const headers = {
      //   'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token'), // Replace with your actual auth-token
    };

    // Fetch data from the API
    fetch(apiUrl, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data); // Set the retrieved data in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      {data ? (
        data.map((jsonCode) => (
          <Grid
            key={jsonCode._id}
            paddingBottom={'4vh'}
            templateColumns='repeat(1, 1fr)'
            marginX={'auto'}
            marginTop={'4%'}
            maxW={'100%'}>
            <Code
              marginX={'auto'}
              height={'100vh'}
              width={'100vh'}
              overflow={'scroll'}>
              <Button
                bgColor={'gray.400'}
                color={'white'}
                // isLoading={isSubmitting}
                borderRadius={'6px'}
                _hover={{
                  color: 'black',
                }}
                float={'right'}
                margin={'4px'}
                onClick={() => {
                  setValue(JSON.stringify(jsonCode));
                  onCopy();
                }}>
                {hasCopied ? 'Copied!' : 'Copy'}
              </Button>

              <pre style={{ margin: '16px' }}>
                {JSON.stringify(jsonCode, null, 2)}
              </pre>
            </Code>
          </Grid>
        ))
      ) : (
        <Center my={20}>
          <Spinner size='xl' />
          <Box ml={3}>
            <Text fontSize="xl">Getting Data...</Text>
          </Box>
        </Center>
      )}

      {/* {data ? (
        <>
          <Card minWidth="xl">
          <Heading
                fontFamily="'Poppins', sans-serif;"
                textAlign="center"
                my={5}
                as="h2"
                size="xl"
              >
                JSON User Data
              </Heading>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Card>
        </>
      ) : (
        <Center my={20}>
          <Spinner size="xl" />
        </Center>
      )} */}
    </div>
  );
};

export default Getjson;
