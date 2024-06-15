import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="center">
      <Image src="/images/company-logo.png" alt="Company Logo" boxSize="150px" />
      <Heading as="h1" size="xl">Our Company</Heading>
      <Text fontSize="lg">"Your satisfaction is our priority"</Text>
      {/* Slider for new products will be added here */}
    </VStack>
  </Box>
);

export default About;