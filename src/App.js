
import Navbar from './components/NavBar';
import Form from "./components/Form";
import { Box, useColorModeValue } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <Box
        bgGradient={useColorModeValue(
          'linear(to-tl, #FFBBEC, #A9C9FF, gray.100)',
          'linear(to-tl, #FFBBEC, #A9C9FF, gray.100)'
          // 'linear(to-t, #FF3CAC, #784BA0, gray.800)'
        )}
      >
        <Navbar />
        <Form />
      </Box>
    </div>
  );
}

export default App;
