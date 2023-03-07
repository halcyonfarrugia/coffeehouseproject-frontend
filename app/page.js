"use client"
import { Box, Flex, HStack, Image, Text, VStack, Button, Link, Show } from "@chakra-ui/react";
import "@fontsource/inter"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/space-grotesk/600.css"
import "@fontsource/space-grotesk/500.css"
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import "../styles/carousel.scss"
import Reviews from "./Reviews";
import Menu from "./Menu";
import FindUs from "./FindUs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"

export default function Home() {
  return (
      <motion.main
      >
        <Navbar/>
        <Flex width="100vw" height={{ base: "100vh", md: "80vh" }} justify="start" bg="white" padding="0" direction={{ base: "column", md: "row"}}>
          <Image
            src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1677942861/DALL_E_2023-02-28_15.17_1_dc8yom.png"
            alt="blueprint"
            objectFit="cover"
            h={{ base: "15vh", md: '100%' }} 
            w={{ base: "100%", md: '25%' }} 
          />
          <Flex 
            p="3rem"
            height={{ base: "85vh", md: '100%' }} 
            width={{ base: "100%", md: '75%' }}
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dr4hp76ea/image/upload/v1677942857/DALL_E_2023-02-28_14.58_1_ndegkm.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            color="#00325E"
            align="center"
            justify="center"
            fontFamily="Space Grotesk"
            direction={{ base: "column", md: "row" }}
          >
            <VStack width={{ base: "100%", md: "35%" }} spacing="1rem" align={{ base: "center", md: "start" }}>
              <Text fontSize={{ base: "1.5rem", lg: "2.5rem", xl: "3rem" }} fontWeight="600">Building Community, <br/> One Cup at a Time.</Text>
              <Text fontWeight="500" fontSize={{ base: "0.8rem", xl: "1.25rem" }} display={{ base: "none", md: "block"}}>Awaken Your Senses with Melbourne's Finest Coffee Experience at Coffee House Project.</Text>
              <Button fontFamily="inter" color="white" bg="#F2850A" paddingX="2rem" _hover={{ bg: "#E17700"}}>
                Browse
              </Button>
              <HStack width="100%" align="center" spacing="2rem" paddingTop={{ base: "0", md: "2rem" }} justify={{ base: "center", md: "start"}}>
                <Text fontFamily="inter" fontWeight="600" color="#294983">Now Serving:</Text>
                <Image 
                  src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1677945880/94Kd2MbO_400x400-removebg-preview_1_1_id7vv3.png"
                  alt="marketLaneLogo"
                  objectFit="contain"
                  w='48px'
                />
              </HStack>
            </VStack>
            <VStack height={{ base: "60%", md: "100%" }} width="50%" align="end">
              <Canvas camera={{ fov: 13, position: [0, 10, 30]}}>
                <ambientLight/>
                <pointLight position={[10, 10, 10]} />
                <Model url="coffeehouseproject.gltf" />
              </Canvas>
            </VStack>
          </Flex>
        </Flex>
        <Reviews/>
        <Menu/>
        <FindUs/>
        <Footer/>
      </motion.main>
  )
}
