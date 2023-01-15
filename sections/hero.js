import { Container, Stack, Flex, Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export default function Hero() {
    return (
        <Box width={'100%'}>
            <Container maxW="container.xl" backgroundImage={'./hero_background.png'} backgroundPosition={'right'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
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
                            <Text as={'span'} textStyle={'base'}>
                                Helping EVM projects avoid getting hacked, and losing funds, reputation, and credibility whilst reassuring users about the safety of new protocol changes.
                            </Text>
                            <Box>
                                <Button size="sm">GET IN TOUCH</Button>
                            </Box>
                        </Stack>
                        <Flex flex={'0 1 50%'} justify={'center'} align={'center'} position={'relative'} w={'full'}>
                            <Box position={'relative'} height={'300px'} rounded={'2xl'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./hero_vector_1.svg'} />
                            </Box>
                        </Flex>
                    </Stack>
                </Stack>
                <Stack direction={'row'} gap={4} py={{ base: 20, md: 28 }}>
                    <Box position={'relative'}>
                        <GlassCard width={'100px'} height={'80px'} position={'absolute'} top={'-25%'} left={'50%'} transform={'translateX(-50%)'} zIndex={2}>
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
                                    <Box position={'relative'} height={'50px'} width={'full'} overflow={'hidden'}>
                                        <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./chart_network.svg'} />
                                    </Box>
                                </Box>
                                {/* <Box layerStyle={'sphere'} /> */}
                            </Box>
                        </GlassCard>
                        <GlassCard width={280} height={180}>
                            <Box
                                width={'inherit'}
                                height={'inherit'}
                                position={'relative'}
                                overflow={'hidden'}
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'flex-end'}
                                padding={4}
                            >
                                <Stack textAlign={'center'} gap={1}>
                                    <Heading as="h6" size="md" fontWeight={600}>
                                        Efficient
                                    </Heading>
                                    <Text as={'span'}>Maximum productivity with minimum wasted effort</Text>
                                </Stack>
                                {/* <Box layerStyle={'sphere'} /> */}
                            </Box>
                        </GlassCard>
                    </Box>
                    <Box position={'relative'}>
                        <GlassCard width={'100px'} height={'80px'} position={'absolute'} top={'-25%'} left={'50%'} transform={'translateX(-50%)'} zIndex={2}>
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
                                    <Box position={'relative'} height={'50px'} width={'full'} overflow={'hidden'}>
                                        <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./integration.svg'} />
                                    </Box>
                                </Box>
                                {/* <Box layerStyle={'sphere'} /> */}
                            </Box>
                        </GlassCard>
                        <GlassCard width={280} height={180}>
                            <Box
                                width={'inherit'}
                                height={'inherit'}
                                position={'relative'}
                                overflow={'hidden'}
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'flex-end'}
                                padding={4}
                            >
                                <Stack textAlign={'center'} gap={1}>
                                    <Heading as="h6" size="md" fontWeight={600}>
                                        Simple Integration
                                    </Heading>
                                    <Text as={'span'}>Just add one line of code and you are all set with Pakt</Text>
                                </Stack>
                                {/* <Box layerStyle={'sphere'} /> */}
                            </Box>
                        </GlassCard>
                    </Box>
                    <Box position={'relative'}>
                        <GlassCard width={'100px'} height={'80px'} position={'absolute'} top={'-25%'} left={'50%'} transform={'translateX(-50%)'} zIndex={2}>
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
                                    <Box position={'relative'} height={'50px'} width={'full'} overflow={'hidden'}>
                                        <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./security.svg'} />
                                    </Box>
                                </Box>
                            </Box>
                        </GlassCard>
                        <GlassCard width={280} height={180}>
                            <Box
                                width={'inherit'}
                                height={'inherit'}
                                position={'relative'}
                                overflow={'hidden'}
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'flex-end'}
                                padding={4}
                            >
                                <Stack textAlign={'center'} gap={1}>
                                    <Heading as="h6" size="md" fontWeight={600}>
                                        Continous Security
                                    </Heading>
                                    <Text as={'span'}>Automates the monitoring of information security controls</Text>
                                </Stack>
                                {/* <Box layerStyle={'sphere'} /> */}
                            </Box>
                        </GlassCard>
                    </Box>
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
