"use client"

import { Flex, Textarea, Select, VStack, Image, HStack, Container, FormControl, Input, FormLabel, Button, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react"
import Navbar from "../Navbar"
import "@fontsource/eb-garamond"
import "@fontsource/eb-garamond/700.css"
import Footer from "../Footer"
import { Canvas } from "@react-three/fiber"
import Model from "../Model"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [subject, setSubject] = useState(null)
    const [description, setDescription] = useState(null)
    const [responseMessage, setResponseMessage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if ( !name || !email || !subject || !description ) {
            setResponseMessage({ status: "warning", message: "Please fill in all fields" })
            setTimeout(() => {
                setResponseMessage(null)
            }, 2500)
            return;
        }

        const body = { name, email, subject, description };
        try {
            console.log(`${process.env.NEXT_PUBLIC_API_URL}/form`)
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await response.json()
            setResponseMessage({ status: data.status, message: data.message })
            setTimeout(() => {
                setResponseMessage(null)
            }, 2500)
        } catch (error) {
            setResponseMessage({ status: 'error', message: 'Error occurred in reaching server. Please try again later' })
            setTimeout(() => {
                setResponseMessage(null)
            }, 2500)
        }
    }

    return (
        <motion.main
        >
            <Navbar/>
            <Flex
                height={{ md: "100vh" }}
                minHeight="100vh"
                width="100vw"
                style={{
                backgroundImage: `url('https://res.cloudinary.com/dr4hp76ea/image/upload/v1678167217/background_4_dhygv2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
                color="#00325E"
                align="center"
                justify={{ base: "start", md: "space-around" }}
                fontFamily="EB Garamond"
                direction={{ base: "column", md: "row" }}
                paddingTop={{ base: "4rem", md: "0"}}
            >
                <form style={{ width: "70%" }} onSubmit={handleSubmit}>
                    <VStack color="#433D3B" width="100%" align={{ base: "center", md: "start" }} paddingLeft="2rem" spacing="2rem">
                        <FormControl isRequired>
                            <FormLabel fontWeight="700" color="#433D3B" fontSize="1.2rem">Name</FormLabel>
                            <Input type="text" placeholder="Enter name" _placeholder={{ fontStyle: "italic", color: "#433D3B" }} bg="#FFFFFF" color="#433D3B" onChange={(e) => setName(e.target.value)}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontWeight="700" color="#433D3B" fontSize="1.2rem">Email</FormLabel>
                            <Input type="text" placeholder="Enter email" _placeholder={{ fontStyle: "italic", color: "#433D3B" }} bg="#FFFFFF" color="#433D3B" onChange={(e) => setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontWeight="700" color="#433D3B" fontSize="1.2rem">Subject</FormLabel>
                            <Input type="text" placeholder="Enter subject" _placeholder={{ fontStyle: "italic", color: "#433D3B" }} bg="#FFFFFF" color="#433D3B" onChange={(e) => setSubject(e.target.value)}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontWeight="700" color="#433D3B" fontSize="1.2rem">Description</FormLabel>
                            <Textarea type="text" placeholder="Enter description" _placeholder={{ fontStyle: "italic", color: "#433D3B" }} bg="#FFFFFF" color="#433D3B" onChange={(e) => setDescription(e.target.value)}/>
                        </FormControl>
                        { responseMessage && <Alert status={ responseMessage.status }>
                            <AlertIcon />
                            <AlertDescription>{ responseMessage.message }</AlertDescription>
                        </Alert> }
                        <Button bg="#FF900D" color="white" _hover={{ bg: "#FF6B00" }} size="lg" type="submit" onClick={handleSubmit}>Submit</Button>
                    </VStack>
                </form>
                <VStack height={{ base: "40%", md: "80%" }} width="50%" align="end">
                    <Canvas camera={{ fov: 13, position: [0, 10, 30]}}>
                        <ambientLight/>
                        <pointLight position={[10, 10, 10]} />
                        <Model url="coffeehouseproject.gltf" />
                    </Canvas>
                </VStack>
            </Flex>
            <Footer/>
        </motion.main>
    )
}