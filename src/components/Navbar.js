import React from "react";
import {
  chakra,
  useColorModeValue,
  Flex,
  HStack,
  Icon,
  Button,
  Box,
  IconButton,
  VStack,
  CloseButton,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react"; // Import components from Chakra UI
import { BiSun, BiMoon } from "react-icons/bi";
import { useDisclosure } from "@chakra-ui/hooks"; // Import hooks from Chakra UI
import { AiOutlineMenu } from "react-icons/ai"; // Import the AiOutlineMenu icon
import { Link } from "react-router-dom";
const SimpleNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <VisuallyHidden>Choc</VisuallyHidden> */}
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
                fontWeight="extrabold"
              >
                ProFolio
              </Text>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link to="/Home">
                <Button variant="ghost">Home</Button>
              </Link>
              {isAuthenticated && (
                <>
                  <Link to="/Form">
                    <Button variant="ghost">Form</Button>
                  </Link>
                  <Button
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.reload();
                    }}
                    variant="ghost"
                  >
                    Logout
                  </Button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Link to="/Signin">
                    <Button variant="ghost">Sign in</Button>
                  </Link>
                  <Link to="/Signup">
                    <Button variant="ghost">Sign up</Button>
                  </Link>
                </>
              )}
              <IconButton
                backgroundColor={useColorModeValue("gray.900", "gray.100")}
                color={useColorModeValue("gray.100", "gray.900")}
                onClick={toggleColorMode}
                icon={
                  colorMode === "light" ? (
                    <Icon as={BiMoon} />
                  ) : (
                    <Icon as={BiSun} />
                  )
                }
                margin="auto"
                w={8}
                h={8}
                size="lg"
                aria-label={"Toggle Dark mode"}
              />
            </HStack>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                // zIndex={2}
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link to="/Home">
                  <Button w="full" variant="ghost" onClick={mobileNav.onClose}>
                    Home
                  </Button>
                </Link>
                {isAuthenticated && (
                  <>
                    <Link to="/Form">
                      <Button
                        w="full"
                        variant="ghost"
                        onClick={mobileNav.onClose}
                      >
                        Form
                      </Button>
                    </Link>
                    <Button
                      w="full"
                      variant="ghost"
                      onClick={mobileNav.onClose}
                    >
                      Form
                    </Button>
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <Link to="/Signin">
                      <Button
                        w="full"
                        variant="ghost"
                        onClick={mobileNav.onClose}
                      >
                        Sign in
                      </Button>
                    </Link>
                    <Link to="/Signup">
                      <Button
                        w="full"
                        variant="ghost"
                        onClick={mobileNav.onClose}
                      >
                        Sign up
                      </Button>
                    </Link>
                  </>
                )}
                <IconButton
                  backgroundColor={useColorModeValue("gray.900", "gray.100")}
                  color={useColorModeValue("gray.100", "gray.900")}
                  onClick={toggleColorMode}
                  icon={
                    colorMode === "light" ? (
                      <Icon as={BiMoon} />
                    ) : (
                      <Icon as={BiSun} />
                    )
                  }
                  margin="auto"
                  w={8}
                  h={8}
                  size="lg"
                  aria-label={"Toggle Dark mode"}/>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default SimpleNavbar;
