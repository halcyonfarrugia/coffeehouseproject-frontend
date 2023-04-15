import { Box, HStack, Text } from "@chakra-ui/react"

const Item = ({ title, price, description }) => {
    return (
        <Box width="100%" color="#433D3B" bg="#FFFFFF" borderRadius="1rem" padding="1rem">
            <HStack>
                <Text fontWeight="700">{title}</Text>
                <Text fontWeight="600" fontStyle="italic">${price}</Text>
            </HStack>
            <Text width={{ base: "90%", md: "480px" }}>{description}</Text>
        </Box>
    )
}

export default Item