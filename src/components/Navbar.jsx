import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex>
      <Link as={RouterLink} to="/" p={2} color="white">Home</Link>
      <Link as={RouterLink} to="/about" p={2} color="white">About Us</Link>
      <Link as={RouterLink} to="/catalog" p={2} color="white">Catalog</Link>
      <Link as={RouterLink} to="/where-to-find-us" p={2} color="white">Where to Find Us</Link>
      <Spacer />
      <Button as={RouterLink} to="/login" colorScheme="teal" variant="outline" mr={2}>Login</Button>
      <Button as={RouterLink} to="/register" colorScheme="teal" variant="solid">Register</Button>
    </Flex>
  </Box>
);

export default Navbar;