import { Box } from "@chakra-ui/react";
import C from "./C";

function B() {
  return (
    <Box w={10} h={10} bgColor="red.500">
      B
      <C />
    </Box>
  );
}

export default B;
