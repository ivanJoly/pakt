import { Container, Stack, Flex, Box, Heading, Text, Image, Button } from '@chakra-ui/react';

export default function Stats() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_STATS</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'//: '}Security in Blockhain
                    </Text>
                    <br />
                </Heading>
            </Stack>
        </Container>
    );
}
