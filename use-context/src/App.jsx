import { Box, ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";
import A from "./components/A";

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      <ChakraProvider>
        <Box>Hello, React</Box>
        <A />
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;
