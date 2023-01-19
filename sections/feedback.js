import { Container, Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export default function Feedback() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Stack gap={4} pb={{ base: 12, sm: 0 }}>
                    <Box color={'brand.tertiary'} display={'flex'}>
                        <Text as={'span'}>_YOUR FEEDBACK</Text>
                    </Box>
                    <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                        <Text as={'span'} position={'relative'}>
                            {':__'}Trusted by
                        </Text>
                        <br />
                    </Heading>
                </Stack>
                <Stack gap={16} padding={{ base: 4, sm: 16, md: 8, lg: 32 }}>
                    <Flex alignItems={'center'} direction={{ base: 'column', md: 'row' }} gap={{ base: 16 }}>
                        <Flex order={{ base: 0 }} flex={'0 1 50%'} position={'relative'} justifyContent={'center'} height={220} width={'100%'} maxW={450}>
                            <Box position={'relative'} margin={{ base: 0, md: 4 }} width={'inherit'} height={'inherit'}>
                                <Box position={'absolute'} bottom={0} left={'50%'} transform={'translateX(-50%)'} zIndex={3} width={'75%'}>
                                    <Box position={'relative'} height={'300px'} width={'full'} overflow={'hidden'}>
                                        <Image alt="" fit={'contain'} align={'bottom'} w={'100%'} h={'100%'} src={`./monkey.svg`} />
                                    </Box>
                                </Box>
                                <GlassCard width={'inherit'} height={'inherit'}></GlassCard>
                                <GlassCard width={'inherit'} height={'inherit'} position={'absolute'} bottom={0} transform={'rotate(5deg); transform-origin: 100% 100%;'} zIndex={2}></GlassCard>
                                <Box
                                    position={'absolute'}
                                    top={'50%'}
                                    left={'50%'}
                                    transform={'translate(-50%, -50%)'}
                                    height={220}
                                    width={220}
                                    borderRadius={'50%'}
                                    background={'#a6efb6'}
                                    zIndex={1}
                                    opacity={'0.85'}
                                ></Box>
                            </Box>
                        </Flex>
                        <Stack flex={{ base: '1', sm: '0 1 50%' }} gap={2} paddingRight={{ lg: 0, xl: 20 }}>
                            <Box height={'45px'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'left'} w={'100%'} h={'100%'} src={'./boat.svg'} />
                            </Box>
                            <Text textStyle={'base'} fontWeight={'bold'} fontSize={'larger'}>
                                “We love Pakt because it really helps us to manage our progress more efficiently, as well as making sure that we are ahead of schedule in the development process.”
                            </Text>
                            <Box>
                                <Text as={'span'} textStyle={'base'} fontWeight={'bolder'}>
                                    Name Surname
                                </Text>
                                {' - '}
                                <Text as={'span'} textStyle={'base'} fontStyle={'italic'}>
                                    Open Sea Founder
                                </Text>
                            </Box>
                        </Stack>
                    </Flex>
                    <Flex alignItems={'center'} direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 0 }}>
                        <Stack order={{ base: 1, md: 0 }} flex={'0 1 50%'} gap={2} paddingRight={{ lg: 0, xl: 20 }}>
                            <Box height={'45px'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'left'} w={'100%'} h={'100%'} src={'./boat.svg'} />
                            </Box>
                            <Text textStyle={'base'} fontWeight={'bold'} fontSize={'larger'}>
                                ““We love Pakt because it really helps us to manage our progress more efficiently, as well as making sure that we are ahead of schedule in the development process.” All
                                base UI elements are made using Nested Symbols”
                            </Text>
                            <Box>
                                <Text as={'span'} textStyle={'base'} fontWeight={'bolder'}>
                                    Name Surname
                                </Text>
                                {' - '}
                                <Text as={'span'} textStyle={'base'} fontStyle={'italic'}>
                                    Open Sea Founder
                                </Text>
                            </Box>
                        </Stack>
                        <Flex order={{ base: 0, md: 1 }} flex={'0 1 50%'} position={'relative'} justifyContent={'center'} height={220} width={'100%'} maxW={450}>
                            <Box position={'relative'} margin={{ base: 0, md: 4 }} width={'inherit'} height={'inherit'}>
                                <Box position={'absolute'} bottom={0} left={'50%'} transform={'translateX(-50%)'} zIndex={3} width={'75%'}>
                                    <Box position={'relative'} height={'300px'} width={'full'} overflow={'hidden'}>
                                        <Image alt="" fit={'contain'} align={'bottom'} w={'100%'} h={'100%'} src={`./crypto_boy.svg`} />
                                    </Box>
                                </Box>
                                <GlassCard width={'inherit'} height={'inherit'}></GlassCard>
                                <GlassCard width={'inherit'} height={'inherit'} position={'absolute'} bottom={0} transform={'rotate(5deg); transform-origin: 100% 100%;'} zIndex={2}></GlassCard>
                                <Box
                                    position={'absolute'}
                                    top={'50%'}
                                    left={'50%'}
                                    transform={'translate(-50%, -50%)'}
                                    height={220}
                                    width={220}
                                    borderRadius={'50%'}
                                    background={'#0031ff'}
                                    zIndex={1}
                                    opacity={'0.85'}
                                ></Box>
                            </Box>
                        </Flex>
                    </Flex>
                </Stack>
            </Stack>
        </Container>
    );
}
