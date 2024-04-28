import { Box, Image, Text, VStack, Heading, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={10}>
      <Box as="section" w="full" bg="gray.100" py={10}>
        <VStack spacing={3}>
          <Image src="/images/roger-federer-hero.jpg" alt="Roger Federer" boxSize="300px" m="auto" />
          <Heading as="h1" size="2xl">Roger Federer</Heading>
          <Text fontSize="xl">Professional Tennis Player</Text>
        </VStack>
      </Box>
      <Box as="section" w="full" py={10}>
        <Heading as="h2" size="xl" mb={5}>Biography</Heading>
        <Text>
          Roger Federer, born August 8, 1981, is a Swiss professional tennis player who is regarded by many as the greatest tennis player of all time. He has won 20 Grand Slam singles titles, the most in history for a male player and has held the world No. 1 spot in the ATP rankings a total of 310 weeks.
        </Text>
      </Box>
      <Box as="section" w="full" py={10} bg="gray.100">
        <Heading as="h2" size="xl" mb={5}>Career Highlights</Heading>
        <Image src="/images/career-highlight.jpg" alt="Career Highlight" boxSize="300px" m="auto" />
        <Text mt={3}>
          Among his numerous accolades, Federer has won eight Wimbledon titles, an Open Era record, and was continuously ranked in the top 10 from October 2002 to November 2016.
        </Text>
      </Box>
      <Box as="section" w="full" py={10}>
        <Heading as="h2" size="xl" mb={5}>Photo Gallery</Heading>
        <SimpleGrid columns={2} spacing={5}>
          <Image src="/images/gallery-1.jpg" alt="With Fans" boxSize="300px" />
          <Image src="/images/gallery-2.jpg" alt="Casual Moment" boxSize="300px" />
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Index;