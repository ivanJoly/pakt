import { Container, Stack, Flex, Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export default function Hero() {
    return (
        <Box width={'100%'} backgroundImage={'./hero_background.png'} backgroundPosition={'right'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
            <Container maxW="container.xl">
                <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                    <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 0 }}>
                        <Stack flex={'0 1 50%'} spacing={{ base: 5, md: 10 }} paddingRight={{ base: 0, lg: 10 }}>
                            <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                                <Text as={'span'}>SECURITY</Text>
                                <Text as={'span'}>INNOVATION</Text>
                                <Text as={'span'}>TECHNOLOGY</Text>
                            </Box>
                            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '4xl', sm: '5xl', lg: '7xl' }} spacing={0}>
                                <Text
                                    as={'span'}
                                    position={'relative'}
                                    _after={{
                                        content: "''",
                                        width: 'full',
                                        height: '30%',
                                        position: 'absolute',
                                        bottom: 1,
                                        left: 0,
                                        bg: 'blue.400',
                                        zIndex: -1,
                                    }}
                                >
                                    {'</:'} Keep your code safe
                                </Text>
                                <br />
                            </Heading>
                            <Text as={'span'} textStyle={'subtitle'}>
                                Helping EVM projects avoid getting hacked, and losing funds, reputation, and credibility whilst reassuring users about the safety of new protocol changes.
                            </Text>
                            <Box>
                                <Button size="sm">GET IN TOUCH</Button>
                            </Box>
                        </Stack>
                        <Flex flex={'0 1 50%'} justify={'center'} align={'center'} position={'relative'} w={'full'}>
                            <Box position={'relative'} height={'300px'} rounded={'2xl'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./hero_vector.svg'} />
                            </Box>
                            {/* <Box position={'relative'} height={'150px'}>
                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./hero_vector_1.svg'} />
                        </Box> */}
                        </Flex>
                    </Stack>
                </Stack>
                {/* linear-gradient(90deg, rgba(121,240,169,1) 0%, rgba(54,111,198,0.85) 25%, rgba(101,84,169,0.2) 75%, rgba(23,86,180,0.5) 100%); */}
                <Stack direction={'row'} gap={4}>
                    <GlassCard width={280} height={180}>
                        <Box height={'100%'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'} padding={4}>
                            <Heading as="h6" size="md" fontWeight={600}>
                                Efficient
                            </Heading>
                            <Text as={'span'} textAlign={'center'}>
                                Maximum productivity with minimum wasted effort
                            </Text>
                        </Box>
                        <Box layerStyle={'sphere'}></Box>
                        <Box layerStyle={'sphere'} background={'brand.tertiary'} zIndex={2}></Box>
                    </GlassCard>
                    <Box width={280} height={180}>
                        <Box layerStyle="glass" height={'100%'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'} padding={4}>
                            <Heading as="h6" size="md" fontWeight={600}>
                                Efficient
                            </Heading>
                            <Text as={'span'} textAlign={'center'}>
                                Maximum productivity with minimum wasted effort
                            </Text>
                        </Box>
                        <Box></Box>
                        <Box></Box>
                    </Box>
                    <Box width={280} height={180}>
                        <Box layerStyle="glass" height={'100%'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'} padding={4}>
                            <Heading as="h6" size="md" fontWeight={600}>
                                Efficient
                            </Heading>
                            <Text as={'span'} textAlign={'center'}>
                                Maximum productivity with minimum wasted effort
                            </Text>
                        </Box>
                        <Box></Box>
                        <Box></Box>
                    </Box>
                    {/* <Box width={280} height={180}>
                        <Box layerStyle="glass" height={'100%'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'} padding={4}>
                            <Heading as="h5" size="md" fontWeight={600}>
                                Efficient
                            </Heading>
                            <Text as={'span'} textAlign={'center'}>
                                Maximum productivity with minimum wasted effort
                            </Text>
                        </Box>
                        <Box></Box>
                        <Box></Box>
                    </Box> */}
                    <Box alignSelf={'flex-end'} padding={4}>
                        <Heading as="h5" size="lg" fontWeight={600}>
                            {'<<'} Top <br></br> Features
                        </Heading>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
