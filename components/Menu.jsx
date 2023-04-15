import { VStack, Flex, Text, Box, Container, Image, HStack, Button, Hide } from "@chakra-ui/react";
import "@fontsource/eb-garamond"
import "@fontsource/eb-garamond/700.css"
import "@fontsource/eb-garamond/600.css"

const MenuItem = ({ title, price, description }) => {
    return (
        <Box width="100%" paddingLeft="48px">
            <HStack>
                <Text fontWeight="700">{title}</Text>
                <Text fontWeight="600" fontStyle="italic">${price}</Text>
            </HStack>
            <Text width={{ base: "90%", md: "480px" }}>{description}</Text>
        </Box>
    )
}

const Menu = () => {
    return (
        <VStack minHeight="100vh">
            <Flex 
            p={{ base: "1rem", md: "3rem" }}
            width="100%"
            height="100%"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dr4hp76ea/image/upload/v1678028965/background2_cb4fev.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'right',
            }}
            color="#00325E"
            align="center"
            justify={{ base: "center", md: "end" }}
            fontFamily="Inter" 
          >
            <VStack fontFamily="EB Garamond" width={{ base: "95%", md: "656px" }} bg="#FFFBF4" color="#433D3B" borderRadius="2rem" align="start" spacing="2rem" paddingY="2rem" maxH="95%">
                <HStack width="100%" justify="space-between" paddingX="3rem" align="center">
                    <Image
                        src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1677941624/Frame_1_1_ocq1aq.jpg"
                        alt="logo"
                        objectFit="contain"
                        w={{ base: "4rem", md: '5rem' }}
                    />
                    <Box width="70%" textAlign="right">
                        <Text fontSize={{ base: '1.75rem', md: "3rem" }} fontWeight="700">Favorites Menu</Text>
                        <Hide below="md">
                            <Text>Experience a Taste of Melbourne&apos;s Coffee Culture at Coffee House Project - Where Every Cup is Crafted For You.</Text>
                        </Hide>
                    </Box>
                </HStack>
                <VStack width="100%" spacing="1rem" overflow={{ base: "visible", md: "scroll" }} maxH="70%">
                    <MenuItem title="The Brownstone Blend" price="4.50" description="A smooth blend of dark and medium roast beans, perfect for an everyday cup of coffee"/>
                    <MenuItem title="The Loft Latte" price="5.50" description="A creamy latte with a hint of vanilla, topped with a fluffy foam roof"/>
                    <MenuItem title="The Bungalow Brew" price="4.50" description="A classic drip coffee made with freshly grounded beans, served in a cozy mug"/>
                    <MenuItem title="The Skyline Cappucino" price="6.00" description="A classic capppucino with a velvety foam 'skyline' design, perfect for a midday pick-me-up"/>
                    <MenuItem title="The Villa Vanilla" price="6.50" description="A decadent latte with a touch of sweet vanilla syrup, topped with whipped cream and caramel drizzle"/>
                    <MenuItem title="The Brickhouse Mocha" price="6.75" description="A rich mocha made with our house-made chocolate syrup, perfect for a cold winter day"/>
                    <MenuItem title="The Courtyard Cold Brew" price="6.50" description="A smooth, refreshing cold brew coffee, brewed for 12 hours and served over ice"/>
                </VStack>
                <Flex direction={{ base: "column", md: "row"}} width="100%" justify="space-between" paddingX="3rem" align="center">
                    <Button bg="#C9E5FF" _hover={{ bg: "#6DB9FF" }}>
                        View Menu
                    </Button>
                    <Image
                        marginTop={{ base: "1rem", md: "0"}}
                        src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1678031468/DALL_E_2023-02-28_16.13.01_-_black_and_white_one-line_doodle_of_a_coffee_machine-removebg-preview_wm38jv.png"
                        alt="logo"
                        objectFit="contain"
                        w='144px'
                    />
                </Flex>
            </VStack>
          </Flex>
        </VStack>
    )
}

export default Menu
