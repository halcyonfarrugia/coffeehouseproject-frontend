import { HStack, VStack, Image, Text, Show, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import "@fontsource/inter"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import Link from "next/link";
import { GoThreeBars } from "react-icons/go"

const Navbar = () => {
    const { onOpen, isOpen, onClose } = useDisclosure();
    return (
        <HStack p={{ base: "1rem", md: "2rem" }} justify="space-between" width="100%" align="center" position="absolute" zIndex="999" fontFamily="inter">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1677941624/Frame_1_1_ocq1aq.jpg"
              alt="logo"
              objectFit="contain"
              w={{ base: '4rem', md: '5rem' }}
            />
          </Link>
          <Show above="md">
            <HStack spacing="3rem" fontWeight="700" fontSize="lg" color="#433D3B">
              <Link href="/menu">
                <Text _hover={{ cursor: "pointer" }} className="animate-underline-property" position="relative">Menu</Text>
              </Link>
              <Link href="/contact-us">
                <Text _hover={{ cursor: "pointer" }} className="animate-underline-property" position="relative">Contact Us</Text>
              </Link>
            </HStack>
          </Show>
          <Show below="md">
            <GoThreeBars onClick={onOpen} style={{ color: "#FFFBF4", cursor: "pointer", fontSize: "3rem" }} />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen} fontFamily="inter">
                <DrawerOverlay>
                    <DrawerContent bg="#FFFBF4">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Image
                            src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1677941624/Frame_1_1_ocq1aq.jpg"
                            alt="logo"
                            objectFit="contain"
                            w='80px'
                        />
                    </DrawerHeader>
                    <DrawerBody spacing="3rem" fontWeight="700" fontSize="lg" color="#433D3B" as={VStack}>
                        <Link href="/">
                          <Text _hover={{ cursor: "pointer" }} className="animate-underline-property" position="relative">Home</Text>
                        </Link>
                        <Link href="/menu">
                          <Text _hover={{ cursor: "pointer" }} className="animate-underline-property" position="relative">Menu</Text>
                        </Link>
                        <Link href="/contact-us">
                          <Text _hover={{ cursor: "pointer" }} className="animate-underline-property" position="relative">Contact Us</Text>
                        </Link>
                    </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
          </Show>
        </HStack>
    )
}

export default Navbar