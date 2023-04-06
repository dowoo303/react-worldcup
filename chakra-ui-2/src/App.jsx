import {
  ChakraProvider,
  Button,
  useDisclosure,
  Flex,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Button onClick={onOpen}>Open</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Fuck UP!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>안녕하세요. 사랑합니다.</ModalBody>
            <ModalFooter>
              <Button mr={4} onClick={onClose}>
                닫기
              </Button>
              010-xxxx-xxxx
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
