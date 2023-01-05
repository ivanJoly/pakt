import { Container, Stack, Flex, Box, Heading, Text, Image, Button } from '@chakra-ui/react';

export default function Feedback() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_YOUR FEEDBACK</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {':__'}Trusted by
                    </Text>
                    <br />
                </Heading>
                <Stack gap={16} padding={32}>
                    <Flex alignItems={'center'}>
                        <Box flex={'0 1 50%'} position={'relative'} height={'200px'}>
                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./monkey.svg'} />
                        </Box>
                        <Stack flex={'0 1 50%'} gap={2}>
                            <Box height={'45px'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'left'} w={'100%'} h={'100%'} src={'./boat.svg'} />
                            </Box>
                            <Text textStyle={'subtitle'} fontWeight={'bold'} fontSize={'larger'}>
                                “We love Pakt because it really helps us to manage our progress more efficiently, as well as making sure that we are ahead of schedule in the development process.”
                            </Text>
                            <Box>
                                <Text as={'span'} textStyle={'subtitle'} fontWeight={'bolder'}>
                                    Name Surname
                                </Text>
                                {' - '}
                                <Text as={'span'} textStyle={'subtitle'} fontStyle={'italic'}>
                                    Open Sea Founder
                                </Text>
                            </Box>
                        </Stack>
                    </Flex>
                    <Flex>
                        <Stack flex={'0 1 50%'} gap={2} paddingRight={{ base: 0, lg: 20 }}>
                            <Box height={'45px'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'left'} w={'100%'} h={'100%'} src={'./boat.svg'} />
                            </Box>
                            <Text textStyle={'subtitle'} fontWeight={'bold'} fontSize={'larger'}>
                                ““We love Pakt because it really helps us to manage our progress more efficiently, as well as making sure that we are ahead of schedule in the development process.” All
                                base UI elements are made using Nested Symbols”
                            </Text>
                            <Box>
                                <Text as={'span'} textStyle={'subtitle'} fontWeight={'bolder'}>
                                    Name Surname
                                </Text>
                                {' - '}
                                <Text as={'span'} textStyle={'subtitle'} fontStyle={'italic'}>
                                    Open Sea Founder
                                </Text>
                            </Box>
                        </Stack>
                        <Box flex={'0 1 50%'} position={'relative'} height={'200px'}>
                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./crypto_boy.svg'} />
                        </Box>
                    </Flex>
                </Stack>
            </Stack>
        </Container>
    );
}
