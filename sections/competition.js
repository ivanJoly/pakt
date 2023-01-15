import { Container, Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export default function Competition() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_OUR COMPETITION</Text>
                </Box>
                <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 0 }}>
                    <Stack flex={'0 1 50%'} spacing={{ base: 8, md: 10 }}>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                            <Text as={'span'} position={'relative'}>
                                {'</: '}Us vs them
                            </Text>
                            <br />
                        </Heading>
                    </Stack>
                    <Stack flex={'0 1 50%'} justify={'flex-start'} align={'flex-start'}>
                        <Text as={'span'} textStyle={'base'} paddingRight={32}>
                            In the Ethereum security landscape, there are many competitors vying for the same market, while they all provide valuable services, none can match Pakt's comprehensive
                            approach when it comes to protecting smart contracts and protocols on Ethereum.
                        </Text>
                    </Stack>
                </Stack>
                <Flex padding={32} gap={8}>
                    <Box flex={'0 1 50%'} position={'relative'} transform={'translateY(50px)'}>
                        <GlassCard width={'150px'} height={'120px'} position={'absolute'} top={'-5%'} left={'30%'} transform={'translateX(-50%)'} zIndex={3}>
                            <Box
                                width={'inherit'}
                                height={'inherit'}
                                position={'relative'}
                                overflow={'hidden'}
                                borderRadius={4}
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                padding={4}
                            >
                                <Box textAlign={'center'}>
                                    <Box position={'relative'} height={'80px'} width={'full'} overflow={'hidden'}>
                                        <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./rack_server.svg'} />
                                    </Box>
                                </Box>
                            </Box>
                        </GlassCard>
                        <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                            <Box padding={12}>
                                <Stack gap={4}>
                                    <Box height={20}></Box>
                                    <Heading flex={0} as="h5" size="lg" fontWeight={600}>
                                        Other Services
                                    </Heading>
                                    <Text as={'span'} textStyle={'base'} flex={0}>
                                        Competitors don't have as much security when it comes to Ethereum code audits, so they are more likely to make mistakes.
                                    </Text>
                                    <Stack gap={0} flex={0}>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                Lack of funds protections throughout the process
                                            </Text>
                                        </Flex>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                Slow response time
                                            </Text>
                                        </Flex>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                No hard checking of the code
                                            </Text>
                                        </Flex>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                Lack of rigorous review
                                            </Text>
                                        </Flex>
                                    </Stack>
                                </Stack>
                            </Box>
                        </GlassCard>
                    </Box>
                    <Box flex={'0 1 50%'} position={'relative'}>
                        <GlassCard width={'150px'} height={'120px'} position={'absolute'} top={'-5%'} left={'30%'} transform={'translateX(-50%)'} zIndex={3}>
                            <Box
                                width={'inherit'}
                                height={'inherit'}
                                position={'relative'}
                                overflow={'hidden'}
                                borderRadius={4}
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                padding={4}
                            >
                                <Box textAlign={'center'}>
                                    <Box position={'relative'} height={'80px'} width={'full'} overflow={'hidden'}>
                                        <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./house.svg'} />
                                    </Box>
                                </Box>
                            </Box>
                        </GlassCard>
                        <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                            <Box padding={12}>
                                <Stack gap={4}>
                                    <Box height={20}></Box>
                                    <Heading as="h5" size="lg" fontWeight={600}>
                                        Pakt Servicies
                                    </Heading>
                                    <Text as={'span'} textStyle={'base'}>
                                        We provide a comprehensive approach that goes beyond the standard code audit, providing a more rigorous and thorough process.
                                    </Text>
                                    <Stack gap={0}>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                Comprehensive code audit
                                            </Text>
                                        </Flex>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                Protection of funds at risk at any time
                                            </Text>
                                        </Flex>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                Rigorous review of every line of code
                                            </Text>
                                        </Flex>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                Manual inspection for malicious intent
                                            </Text>
                                        </Flex>
                                        <Flex align={'center'} justifyContent={'center'} gap={4}>
                                            <Text as={'span'} flex={0}>
                                                X
                                            </Text>
                                            <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'}>
                                                Focus on changelog
                                            </Text>
                                        </Flex>
                                    </Stack>
                                </Stack>
                            </Box>
                        </GlassCard>
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}
