// import Navbar from './components/NavBar';
import Form from "./components/Form";
import { Box, useColorModeValue } from "@chakra-ui/react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import SimpleNavbar from "./components/Navbar";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";
import { useState,useEffect } from "react";

function App() {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/getuser/`,
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
    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <Box
          minH="100vh"
          bgGradient={useColorModeValue(
            "linear(to-tl, #FFBBEC, #A9C9FF, gray.100)",
            // 'linear(to-tl, #FFBBEC, #A9C9FF, gray.100)',
            "linear(to-tl, #FF3CAC, #784BA0, gray.800)"
          )}
        >
          {/* <Navbar /> */}
          <SimpleNavbar />
          {/* <Form /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route
              path="/Profile"
              element={isAuthenticated ? <Profile user={user} data={data}  /> : <Navigate to="/Signin" />}
            />
            <Route
              path="/Form"
              element={isAuthenticated ? <Form /> : <Navigate to="/Signin" />}
            />
            <Route
              path="/Signin"
              element={!isAuthenticated ? <Signin /> : <Navigate to="/Home" />}
            />
            <Route
              path="/Signup"
              element={!isAuthenticated ? <Signup /> : <Navigate to="/Home" />}
            />
          </Routes>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
