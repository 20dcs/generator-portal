import { Card, Center, Heading, Spinner } from "@chakra-ui/react";
import { useState, useEffect, React } from "react";

const Getjson = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL of the API
    const apiUrl =
    `${process.env.REACT_APP_BACKEND_URL}/api/userdata/getdata`;

    // Define the headers, including the auth-token
    const headers = {
      //   'Content-Type': 'application/json',
      "auth-token": localStorage.getItem("token"), // Replace with your actual auth-token
    };

    // Fetch data from the API
    fetch(apiUrl, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Set the retrieved data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      {data ? (
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
      )}
    </div>
  );
};

export default Getjson;
