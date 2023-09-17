import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  InputRightElement,
  Button,
  InputGroup,
  Container,
  Center,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Signup() {
  // const [show, setShow] = React.useState(false);
  // const handleClick = () => setShow(!show);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const isError = credentials.email === "";
  const isName = credentials.name === "";
  // const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://profolio-backend-7ugb.onrender.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // Save the auth token and redirect

    localStorage.setItem("token", json.authToken);
    // navigate("/Form");

    toast.success("Sign up Successfully");
    window.location.reload();
    console.log(json);
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Center h="90vh">
        <Container maxW="lg">
          <form onSubmit={handlesubmit}>
            <FormControl my={3} isInvalid={isName}>
              <Heading
                fontFamily="'Poppins', sans-serif;"
                textAlign="center"
                my={7}
                as="h2"
                size="xl"
              >
                Sign Up
              </Heading>
              <FormLabel>Name</FormLabel>
              <InputGroup size="md">
                <Input
                  isInvalid={isName}
                  pr="4.5rem"
                  type="name"
                  name="name"
                  id="name"
                  value={credentials.name}
                  onChange={onChange}
                />
              </InputGroup>
              {!isError ? (
                <></>
              ) : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
              <FormLabel my={3}>Email</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter your registered Profolio email to sign in
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
              <FormLabel my={3}>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="password"
                  // type={show ? "text" : "password"}
                  name="password"
                  id="password"
                  value={credentials.password}
                  placeholder="Enter password"
                  onChange={onChange}
                  required
                  minLength={5}
                />
                <InputRightElement width="4.5rem">
                  {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button> */}
                </InputRightElement>
              </InputGroup>
              <FormLabel my={3}>Confirm Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="password"
                  // type={show ? "text" : "password"}
                  name="cpassword"
                  id="cpassword"
                  value={credentials.cpassword}
                  placeholder="Enter password"
                  onChange={onChange}
                  required
                  minLength={5}
                />
                <InputRightElement width="4.5rem">
                  {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button> */}
                </InputRightElement>
              </InputGroup>
              <Button type="submit" my={5} colorScheme="blue">
                Sign Up
              </Button>
              <Stack>
                <Text fontSize="sm">
                  Already user?{" "}
                  <Link to="/Signin" color="blue">
                    <b>Click to Login</b>
                  </Link>
                </Text>
              </Stack>
            </FormControl>
          </form>
        </Container>
      </Center>
    </>
  );
}
export default Signup;
