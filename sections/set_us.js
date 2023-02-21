import { Container, Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import InfoCard from '../components/infoCard';

export default function SetUs() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 0 }}>
                    <Stack flex={{ base: 1, md: '0 1 75%', lg: '0 1 50%' }} spacing={{ base: 5, md: 10 }}>
                        <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                            <Text as={'span'}>_WHAT SETS US APART</Text>
                        </Box>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                            <Text as={'span'} position={'relative'}>
                                {'>/'}Innovative staging platform
                            </Text>
                            <br />
                        </Heading>
                        <Stack gap={{ base: 12, sm: 8 }} paddingLeft={{ base: 0, md: 20 }}>
                            <Text as={'span'} textStyle={'base'}>
                                The platform works by providing an automated code review system that focuses on changelog rather than code while also manually inspecting each line of code for errors.
                            </Text>
                            <Flex direction={'column'} gap={12} alignItems={'center'} maxW={600}>
                                <InfoCard
                                    title={'> Safely try things out'}
                                    description={'safely test out and evaluate protocol changes before officially deploying them'}
                                    image={'safe_retrieval'}
                                    rotate={-10}
                                >
                                    {/* Misc Background; */}
                                    <Box
                                        position={'absolute'}
                                        top={{ base: '5%', lg: '5%' }}
                                        left={{ base: '15%', lg: '15%' }}
                                        height={135}
                                        width={135}
                                        borderRadius={'50%'}
                                        filter={'blur(25px)'}
                                        background={'#2E56FF'}
                                        zIndex={1}
                                        opacity={'0.65'}
                                    ></Box>
                                    <Box
                                        position={'absolute'}
                                        top={{ base: '35%', lg: '35%' }}
                                        left={{ base: '45%', lg: '45%' }}
                                        height={95}
                                        width={95}
                                        borderRadius={'50%'}
                                        filter={'blur(25px)'}
                                        background={'#A7F0B7'}
                                        zIndex={0}
                                        opacity={'0.55'}
                                    ></Box>
                                </InfoCard>
                                <InfoCard title={'> Easier to audit'} description={'easier to audit protocol changes by providing an automated review system.'} image={'code_check'} rotate={10}>
                                    {/* Misc Background; */}
                                    <Box
                                        position={'absolute'}
                                        top={{ base: '5%', lg: '5%' }}
                                        left={{ base: '15%', lg: '15%' }}
                                        height={135}
                                        width={135}
                                        borderRadius={'50%'}
                                        filter={'blur(25px)'}
                                        background={'#2E56FF'}
                                        zIndex={1}
                                        opacity={'0.65'}
                                    ></Box>
                                    <Box
                                        position={'absolute'}
                                        top={{ base: '35%', lg: '35%' }}
                                        left={{ base: '45%', lg: '45%' }}
                                        height={95}
                                        width={95}
                                        borderRadius={'50%'}
                                        filter={'blur(25px)'}
                                        background={'#A7F0B7'}
                                        zIndex={0}
                                        opacity={'0.55'}
                                    ></Box>
                                </InfoCard>
                            </Flex>
                        </Stack>
                    </Stack>
                    <Flex display={{ base: 'none', sm: 'block' }} flex={'0 1 50%'} justify={'center'} align={'flex-start'} position={'relative'} w={'full'}>
                        <Box position={'relative'}>
                            <Box position={'relative'} height={'300px'} rounded={'2xl'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./set_us_vector.svg'} />
                            </Box>
                            <Box position={'absolute'} left={'60%'} bottom={'-20%'} transform={'translateX(-50%)'} height={'150px'} rounded={'2xl'} boxShadow={'2xl'} overflow={'hidden'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./set_us_vector_2.svg'} />
                            </Box>
                        </Box>
                    </Flex>
                </Stack>
            </Stack>
        </Container>
    );
}
