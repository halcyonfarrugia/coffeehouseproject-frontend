import { VStack, Text, Image } from "@chakra-ui/react"
import Link from "next/link"
import "@fontsource/inter/600.css"

const Footer = () => {
    return (
        <VStack width="100vw" minHeight="25vh" bg="#FFFBF4" color="#433D3B" justify="space-around" align="start" padding="1rem 2rem" fontSize="0.9rem" fontWeight="600">
            <Link href="/">
                <Text _hover={{ cursor: "pointer" }} className="animate-underline-property" position="relative">Home</Text>
            </Link>
            <Link href="/menu">
                <Text _hover={{ cursor: "pointer" }} className="animate-underline-property" position="relative">Menu</Text>
            </Link>
            <Link href="/contact-us">
                <Text _hover={{ cursor: "pointer" }} className="animate-underline-property" position="relative">Contact Us</Text>
            </Link>
            <Link href="/">
                <Image
                    src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1677941624/Frame_1_1_ocq1aq.jpg"
                    alt="logo"
                    objectFit="contain"
                    w='5rem'
                />
            </Link>
        </VStack>
    )
    
}

export default Footer