import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Getjson from "./Getjson";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://profolio-backend-7ugb.onrender.com/api/auth/getuser/",
        {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const json = await response.json();
      setUser(json);
      console.log("success");
      console.log(json);
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <Center>
            <Card my={10} width="xl" align="center">
              <Heading
                fontFamily="'Poppins', sans-serif;"
                textAlign="center"
                my={5}
                as="h2"
                size="xl"
              >
                User Details
              </Heading>
              <CardHeader>
                <Heading size="md"> Name: {user.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">Email: {user.email}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={() => {
                    localStorage.removeItem("token");
                    // navigate("/Home")
                    window.location.reload();
                    toast.success("Logout Successfully");
                  }}
                  colorScheme="blue"
                >
                  Logout
                </Button>
              </CardFooter>
            </Card>
          </Center>
          <Center>
            <Getjson />
          </Center>
        </>
      ) : (
        <Center my={20}>
          <Spinner size="xl" />
        </Center>
      )}
    </div>
  );
};
export default Profile;
