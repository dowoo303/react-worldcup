import { Box } from "@chakra-ui/react";
import B from "./B";

function A() {
  return (
    <Box w={10} h={10} bgColor="red.500">
      A
      <B />
    </Box>
  );
}

export default A;
