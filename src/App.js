
// import Navbar from './components/NavBar';
import Form from "./components/Form";
import { Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import SimpleNavbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Box
        bgGradient={useColorModeValue(
          'linear(to-tl, #FFBBEC, #A9C9FF, gray.100)',
          // 'linear(to-tl, #FFBBEC, #A9C9FF, gray.100)',
          'linear(to-tl, #FF3CAC, #784BA0, gray.800)'
        )}
      >
        {/* <Navbar /> */}
        <SimpleNavbar/>
        {/* <Form /> */}
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Form" element={<Form/>}/>
              <Route path="/Signin" element={<Signin/>}/>
              <Route path="/Signup" element={<Signup/>}/>
              
      </Routes>
      </Box>
    </div>
    </BrowserRouter>
  );
}

export default App;
