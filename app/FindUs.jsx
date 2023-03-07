import { VStack, Flex, Text, Box, Image, HStack, Button, Link, Hide } from "@chakra-ui/react";
import "@fontsource/eb-garamond"
import "@fontsource/eb-garamond/700.css"
import "@fontsource/eb-garamond/600.css"
import { AiOutlineInstagram } from "react-icons/ai"
import Map from 'react-map-gl'

const FindUs = () => {
    return (
        <HStack width="100vw" height="100vh" justify="start" padding="0" spacing="0">
          <Flex 
            p={{ base: "2rem 1rem", md: "3rem" }}
            width={{ base: "100%", md: "75%" }}
            height="100%"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dr4hp76ea/image/upload/v1678032470/FindUsBackground_u5ofvz.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            color="#433D3B"
            align="center"
            justify={{ base: "center", md: "start" }}
            fontFamily="EB Garamond"
            paddingLeft={{ base: "1rem", md: "3rem" }}
          >
            <VStack bg="#FFFBF4" width={{ base: "95%", md: "540px" }} maxHeight="100vh" minHeight="95%" borderRadius="2rem" align="start" padding="1rem 2rem" justify="center">
                <Text fontSize="3rem" fontWeight="700">Find Us</Text>
                <Text>Shop 1/114 Flinders St, Melbourne VIC 3000</Text>
                <Link isExternal="true" href="https://www.instagram.com/coffeehouse.project/">
                    <HStack>
                        <AiOutlineInstagram/>
                        <Text>instagram/@coffeehouse.project</Text>
                    </HStack>
                </Link>
                <Button bg="#EBA04C" _hover={{ bg: "#EE8209"}} color="white">Contact Us</Button>
                <Box width="100%" height="70%" paddingY="2rem" overflow="scroll">
                    <Map
                        initialViewState={{
                            latitude: -37.816692,
                            longitude: 144.970246,
                            zoom: 17.5
                        }}
                        style={{width: '100%', height: '300px'}}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPS_API_KEY}
                    />
                </Box>
            </VStack>
          </Flex>
          <Hide below="md">
            <Image
              src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1678032206/DALL_E_2023-02-28_15.17_2_jxtdil.png"
              alt="blueprint2"
              objectFit="cover"
              w='25%'
              height="100%"
              marginInlineStart="0"
            />
          </Hide>
        </HStack>
    )
}

export default FindUs