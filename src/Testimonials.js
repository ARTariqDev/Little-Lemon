import React from 'react';
import { Box, Stack, Text, Heading, Grid, Avatar } from '@chakra-ui/react';

const Testimonials = () => {
  return (
    <>
    <h1 style={{marginLeft:"12em"}}>Testimonials</h1>
    <Box
      className="testimonials-container"
      py={8}
      px={4}
      bgColor="gray.100"
      borderRadius="lg"
    >
      {/* Added padding, background color, and border radius */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {/* Testimonial Card 1 */}
        <Box p={4} shadow="md" borderRadius="lg" bg="white">
          <Stack direction="column" spacing={4} alignItems="center">
            <Avatar name="John Doe" src="https://picsum.photos/50/50?random=6" />
            <Heading as="h5" size="md">
              "Great Service"
            </Heading>
            <Text textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Stack direction="row" spacing={1} alignItems="center">
              <Text fontWeight="bold">John Doe</Text>
              <Text>Customer</Text>
            </Stack>
          </Stack>
        </Box>

        {/* Added two more testimonial cards here following the same structure */}
        <Box p={4} shadow="md" borderRadius="lg" bg="white">
          <Stack direction="column" spacing={4} alignItems="center">
            <Avatar name="Jane Doe" src="https://picsum.photos/50/50?random=7" />
            <Heading as="h5" size="md">
              "Excellent Product"
            </Heading>
            <Text textAlign="center">
              Donec nec odio semper, pulvinar libero sit amet.
            </Text>
            <Stack direction="row" spacing={1} alignItems="center">
              <Text fontWeight="bold">Jane Doe</Text>
              <Text>Customer</Text>
            </Stack>
          </Stack>
        </Box>

        <Box p={4} shadow="md" borderRadius="lg" bg="white">
          <Stack direction="column" spacing={4} alignItems="center">
            <Avatar name="Mike Smith" src="https://picsum.photos/50/50?random=8" />
            <Heading as="h5" size="md">
              "Fast Delivery"
            </Heading>
            <Text textAlign="center">
              Pulvinar libero sit amet, pulvinar libero sit amet.
            </Text>
            <Stack direction="row" spacing={1} alignItems="center">
              <Text fontWeight="bold">Mike Smith</Text>
              <Text>Customer</Text>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Box>
    </>
  );
};

export default Testimonials;
