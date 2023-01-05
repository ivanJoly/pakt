import { Container, Stack, Flex, Box, Heading, Text, Image, Button } from '@chakra-ui/react';

export default function SetUs() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 0 }}>
                    <Stack flex={'0 1 50%'} spacing={{ base: 5, md: 10 }}>
                        <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                            <Text as={'span'}>_WHAT SETS US APART</Text>
                        </Box>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                            <Text as={'span'} position={'relative'}>
                                {'>/'}Innovative staging platform
                            </Text>
                            <br />
                        </Heading>
                        <Stack gap={4} paddingLeft={20}>
                            <Text as={'span'} textStyle={'subtitle'}>
                                The platform works by providing an automated code review system that focuses on changelog rather than code while also manually inspecting each line of code for errors.
                            </Text>
                            <Flex gap={12} alignItems={'center'}>
                                <Box position={'relative'} height={'50px'}>
                                    <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./efficient.svg'} />
                                </Box>
                                <Stack flex={1} gap={1}>
                                    <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }} spacing={0}>
                                        <Text as={'span'} position={'relative'}>
                                            {'>'} Safely try things out
                                        </Text>
                                    </Heading>
                                    <Text as={'span'} textStyle={'subtitle'}>
                                        safely test out and evaluate protocol changes before officially deploying them
                                    </Text>
                                </Stack>
                            </Flex>
                            <Flex gap={12} alignItems={'center'}>
                                <Box position={'relative'} height={'50px'}>
                                    <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./cheap.svg'} />
                                </Box>
                                <Stack flex={1} gap={1}>
                                    <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }} spacing={0}>
                                        <Text as={'span'} position={'relative'}>
                                            {'>'} Easier to audit
                                        </Text>
                                    </Heading>
                                    <Text as={'span'} textStyle={'subtitle'}>
                                        easier to audit protocol changes by providing an automated review system
                                    </Text>
                                </Stack>
                            </Flex>
                        </Stack>
                    </Stack>
                    <Flex flex={'0 1 50%'} justify={'center'} align={'flex-start'} position={'relative'} w={'full'}>
                        <Box position={'relative'} height={'300px'} rounded={'2xl'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./set_us_vector.svg'} />
                        </Box>
                    </Flex>
                </Stack>
            </Stack>
        </Container>
    );
}
