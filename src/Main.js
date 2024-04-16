import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Center, Box, Image, Flex } from '@chakra-ui/react';
import styles from './Main.css';
import BookingForm from './BookingForm'; // Import your BookingForm component

const Main = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleButtonClick = () => {
    setShowBookingForm(true);
  };

  return (
    <main height="20em">
      <Center py={8} style={{ width: "85%", marginLeft: "auto", marginRight: "auto", padding: "1em", paddingBottom: "-50em" }}>
        <Flex direction={{ base: 'column', md: 'row' }}> {/* Responsive layout */}
          <Card> {/* Wrap content in Card */}
            <CardBody>
              <CardHeader><h1 style={{ marginRight: "5em" }}>Little Lemon</h1></CardHeader> {/* Restaurant name */}
              <h4>Chicago</h4> {/* Location */}
              <p>
                Little Lemon is a charming neighborhood bistro that serves simple
                food and classic cocktails in a lively but casual environment. The
                restaurant features a locally-sourced menu with daily specials.
              </p>
              <button className="reserve-button" onClick={handleButtonClick}>
                Reserve a Table
              </button>
              {showBookingForm && <BookingForm />} {/* Conditionally render BookingForm */}
            </CardBody>
          </Card>
          <Box w="40%" order={{ base: 1, md: 0 }}> {/* Image container with order for responsiveness */}
            <Image
              src="restaurant.jpg" // Replace with your banner image
              alt="Little Lemon Restaurant"
              objectFit="cover"
              style={{ width: '140%', height: '60%', borderRadius: "16pt" }}
            />
          </Box>
        </Flex>
      </Center>
    </main>
  );
};

export default Main;
