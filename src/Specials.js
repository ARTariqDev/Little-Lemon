import React from 'react';
import { Card, CardBody, CardHeader, Image, Box, Stack, Text, Heading, Grid } from '@chakra-ui/react';
import './Specials.css'; // Import the CSS file

const Specials = ({ specials }) => {
  return (
    <>
    <h2 style={{textAlign: "center", padding: "1em",color: "#495E57",fontWeight: "bold",marginRight: "1em", fontSize: "24pt"}}>Specials</h2>
    <Box className="specials-container" justifyContent="center" style={{paddingTop: "-50em",backgroundColor: "#EDEFEE"}}> {/* Center content horizontally */}
      <Grid templateColumns="repeat(auto-fit, minmax(260px, 1fr))" gap={4}>
        {specials.map((special) => (
          <Card key={special.name} maxW="sm" className="card"> {/* Apply the new class */}
            <CardBody>
              <Image
                src={special.img}
                alt={special.name}
                borderRadius="inherit" /* Inherit border-radius from parent */
                objectFit="cover"
                width="100%"
                height="210px"
              />
              <Stack direction="column" spacing={2}> {/* Stack elements vertically */}
                <CardHeader className="card-header"> {/* Apply the new class */}
                  <Text id="name">{special.name}</Text>
                  <Box display="flex" justifyContent="flex-end" alignItems="center"> {/* Nested Box for Price */}
                    <Heading as="h4" size="md" id="price">
                      ${special.price}
                    </Heading>
                  </Box>
                </CardHeader>
                <Text id="text">{special.desc}</Text>
              </Stack>
            </CardBody>
            <Heading as="h3" mt={4} textAlign="center">
              Order a Delivery
            </Heading>
          </Card>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Specials;



