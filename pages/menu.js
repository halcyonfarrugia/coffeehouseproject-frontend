import { Flex, Select, VStack, Image, HStack } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import "@fontsource/eb-garamond"
import "@fontsource/eb-garamond/700.css"
import Footer from "@/components/Footer"
import { Canvas } from "@react-three/fiber"
import Model from "@/components/Model"
import Item from "@/components/Item"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import Head from "next/head"

export default () => {
    const brew = [
        { title: "The Brownstone Blend", price: "4.50", description: "A smooth blend of dark and medium roast beans, perfect for an everyday cup of coffee" }, 
        { title: "The Bungalow Brew", price: "4.50", description: "A classic drip coffee made with freshly ground beans, served in a cozy mug" }, 
        { title: "The Courtyard Cold Brew", price: "6.50", description: "A smooth, refreshing cold brew coffee, brewed for 12 hours and served over ice" }
    ];

    const espresso = [
        { title: "The Loft Latte", price: "5.50", description: "A creamy latte with a hint of vanilla, topped with a fluffy foam roof" }, 
        { title: "The Skyline Cappuccino", price: "6.00", description: "A classic cappuccino with a velvety foam 'skyline' design, perfect for a midday pick-me-up" }, 
        { title: "The Villa Vanilla", price: "6.50", description: "A decadent latte with a touch of sweet vanilla syrup, topped with whipped cream and caramel drizzle" },
        { title: "The Brickhouse Mocha", price: "6.75", description: "A rich mocha made with our house-made chocolate syrup, perfect for a cold winter day" }
    ];

    const [items, setItems] = useState(brew)

    const itemsAnimation = useAnimation();

    const animateItems = () => {
        itemsAnimation.start((i) => ({
            opacity: 1,
            translateY: 0,
        }))
    };

    const handleSelect = (e) => {
        itemsAnimation.set((i) => ({ opacity: 0 }))
        setItems( e.target.value === 'espresso' ? espresso : brew )
        animateItems()
    }

    useEffect(() => {
        animateItems()
    }, [items])

    return (
        <motion.main
        >
            <Head>
                <title>Coffee House Project | Menu</title>
                <meta name="description" content="Explore the menu at Coffee House Project and discover our delicious selection of coffee, tea, and baked goods. We offer something for everyone, including vegan and gluten-free options." />
                <meta name="keywords" content="coffee, tea, baked goods, menu, vegan, gluten-free" />
                <meta name="author" content="Coffee House Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Coffee House Project | Menu" />
                <meta property="og:description" content="Explore the menu at Coffee House Project and discover our delicious selection of coffee, tea, and baked goods. We offer something for everyone, including vegan and gluten-free options." />
                <meta property="og:image" content="Logo.jpg" />
                <meta property="og:url" content="https://www.coffeehouseproject.com/menu" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <Flex
                height={{ md: "100vh" }}
                minHeight="100vh"
                width="100vw"
                style={{
                backgroundImage: `url('https://res.cloudinary.com/dr4hp76ea/image/upload/v1678154316/background_3_riq0a3.jpg')`,
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
                <VStack color="#433D3B" width={{ base: "80%", md: "20%" }} align={{ base: "center", md: "start" }} spacing="2rem">
                    <HStack spacing="2rem" width="100%" paddingLeft={{ base: "0", md: "2rem" }} justify={{ base: "center", md: "start"}} >
                        <Image 
                            src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1678153927/Mask_group_aweqgt.png"
                            alt="coffeeCup"
                            objectFit="contain"
                            w={{ base: '5rem', md: '7rem' }}
                        />
                        <Select border="none" fontSize={{ base: "1.25rem", md: "2rem" }}
                            height="4rem"
                            alignContent="center"
                            width="20rem"
                            color=""
                            onChange={handleSelect}
                        >
                            <option value="brew">Brew</option>
                            <option value="espresso">Espresso</option>
                        </Select>
                    </HStack>
                    <VStack width={{ base: "100%", md: "90%" }} align={{ base: "center", md: "start" }} spacing="2rem">
                        { items.map((item, index) => (
                            <motion.div key={index} style={{ minWidth: "100%" }} initial={{ opacity: 0, translateY: "-1rem" }} transition={{ delay: (index + 1) * 0.2 }} animate={itemsAnimation}>
                                <Item title={item.title} price={item.price} description={item.description} />
                            </motion.div>
                        ))}
                    </VStack>
                </VStack>
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