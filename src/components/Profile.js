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
  Box,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Getjson from "./Getjson";
import { NavLink } from "react-router-dom";
const url=process.env.REACT_APP_HOSTED_URL_LINK;
const Profile = ({user,data}) => {
  return (
    <div>
      {user ? (
        <>
          <Center>
            <Card my={10} width="2xl" align="center">
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
              <CardHeader>
                <Heading size="md"> Username: {user.username}</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">Email: {user.email}</Text>
              </CardBody>
              {/* <CardBody>
                <Text fontSize="xl">Id: {user._id}</Text>
              </CardBody> */}
              <CardBody>
              <NavLink target="_blank" to={`${url}/${user.username}`}>
                <Text fontSize="xl" sx={{color:"blue"}}>Portfolio Link: {url}/{user.username}</Text>
                </NavLink>
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
            <Getjson data={data} />
          </Center>
        </>
      ) : (
        <Center my={20}>
          <Spinner size="xl" />
          <Box ml={3}>
            <Text fontSize="xl">Loading...</Text>
          </Box>
        </Center>
      )}
    </div>
  );
};
export default Profile;
