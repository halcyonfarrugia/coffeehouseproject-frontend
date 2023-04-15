import { HStack, Spinner, VStack, Text, Image, Hide, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai"
import { BsGoogle } from "react-icons/bs"

const Reviews = () => {
    const [reviews, setReviews] = useState(null)

    const fetchReviews = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`)
        const data = await response.json()
        console.log(data.reviews)
        if(data?.reviews) setReviews(data.reviews)
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    return (
        <HStack height="20vh" width="100%" align="center" justify="center" bg="#F6ECDB">
            { reviews ? 
                <HStack width="100%" justify="space-around" paddingX="32px">
                    <Text width="128px" fontSize={{ base: "1rem", md: "2rem" }} marginRight="16px"><BsGoogle/>{' '}Reviews</Text>
                    <HStack width="80%" className="slider">
                        <HStack className="slide-track" spacing={{ base: "1rem", md: "3rem" }} paddingLeft="2rem">
                        {
                            reviews.map((review) => {
                                if (review.rating > 3) return (
                                    <VStack minWidth="100px" height={{ base: "100px", md: "130px" }} bg="#FFFFFF" color="#363636" justify={{ base: "center", md: "space-between" }} key={review.author_name} padding="1rem" borderRadius="2rem" className="slide">
                                        <Hide below="md">
                                            <Text fontSize="12px" height="80%" overflow="hidden" >{review.text.slice(0, 140) + '...'}</Text>
                                        </Hide>
                                        <Flex width="100%" direction={{ base: "column", md: "row" }} align="center" justify="space-between">
                                            <Text fontSize="14px">{review.author_name}</Text>
                                            <HStack>
                                                <AiFillStar/>
                                                <Text>{review.rating}</Text>
                                            </HStack>
                                        </Flex>
                                    </VStack>
                                )
                            })
                        }
                        </HStack>
                    </HStack>
                    <Hide below="md">
                        <Image
                            src="https://res.cloudinary.com/dr4hp76ea/image/upload/v1677941624/Frame_1_1_ocq1aq.jpg"
                            alt="logo"
                            objectFit="contain"
                            w='80px'
                        />
                    </Hide>
                    
                </HStack>
                :
                <Spinner color="alphaBlack.400"/>
            }
        </HStack>
    )
}

export default Reviews