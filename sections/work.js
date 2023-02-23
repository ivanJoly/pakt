import { Container, Stack, Flex, Box, Heading, Text, Image, Grid } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';
import EmailClipboard from '../components/emailClipboard';

export default function Work() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} pt={{ base: 20, md: 28 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_WORK</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'/_'}Do you have an eye for bugs?
                    </Text>
                    <br />
                </Heading>
                <Grid position={'relative'} padding={{ base: 2, md: 8, lg: 20, xl: 32 }} gap={8} gridTemplateColumns={'repeat(12, 1fr)'} gridTemplateRows={'repeat(3, 1fr)'} columnGap={6} rowGap={6}>
                    <Box width={'full'} height={'150px'} gridArea={{ base: '1 / 1 / 2 / 13', md: '1 / 1 / 2 / 9', lg: '1 / 1 / 2 / 7' }}>
                        <Stack>
                            <Heading as="h5" size="lg" fontWeight={600}>
                                Whitehat hackers prepare!
                            </Heading>
                            <Text as={'span'} textStyle={'base'}>
                                Whitehat hackers are the essential, unsung heroes of Ethereum projects. As Ethereum evolves, so do the potential threats that it could face
                            </Text>
                        </Stack>
                    </Box>
                    <Box
                        width={'full'}
                        height={{ base: 'full', md: '320px' }}
                        maxW={{ base: 'inherit', md: '250px' }}
                        justifySelf={'start'}
                        alignSelf={{ base: 'center', lg: 'self-end' }}
                        gridArea={{ base: '2 / 1 / 3 / 12', md: '2 / 9 / 4 / 13', lg: '1 / 9 / 3 / 13', xl: '1 / 10 / 3 / 13' }}
                    >
                        <Box position={'relative'} height={'inherit'}>
                            <GlassCard
                                width={{ base: '80px', md: '150px' }}
                                height={{ base: '80px', md: '120px' }}
                                position={'absolute'}
                                top={{ base: '50%', md: '-5%' }}
                                left={{ base: '100%', md: '50%' }}
                                transform={{ base: 'translate(-50%, -50%)', md: 'translateX(-50%)' }}
                                zIndex={2}
                            >
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
                                        <Box position={'relative'} zIndex={2} height={'80px'} width={'full'} overflow={'hidden'}>
                                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./flash-payment.svg'} />
                                        </Box>
                                    </Box>
                                    <Box
                                        position={'absolute'}
                                        top={{ base: '45%', lg: '45%' }}
                                        left={{ base: '10%', lg: '5%' }}
                                        height={'80px'}
                                        width={'80px'}
                                        borderRadius={'50%'}
                                        filter={'blur(18px)'}
                                        background={'#2E56FF'}
                                        zIndex={0}
                                        opacity={'0.8'}
                                    ></Box>
                                </Box>
                            </GlassCard>
                            <GlassCard width={'full'} height={'full'} padding={2}>
                                <Flex
                                    width={'inherit'}
                                    height={'inherit'}
                                    position={'relative'}
                                    overflow={'hidden'}
                                    display={'flex'}
                                    flexDirection={{ base: 'row', md: 'column' }}
                                    alignItems={'center'}
                                    justifyContent={{ base: 'flex-start', md: 'flex-end' }}
                                    padding={4}
                                >
                                    <Stack flex={{ base: '0 1 75%', md: 0 }} textAlign={{ base: '', md: 'center' }} gap={1}>
                                        <Heading as="h6" size="sm" fontWeight={600}>
                                            Better pay than the rest
                                        </Heading>
                                        <Text as={'span'} textStyle={'base'} fontSize={'sm'}>
                                            PAKT offers better pay, for you to focus on providing quality work and secure protocols.
                                        </Text>
                                    </Stack>
                                </Flex>
                            </GlassCard>
                        </Box>
                    </Box>
                    <Box
                        width={'full'}
                        height={{ base: '100%', md: '180px' }}
                        gridArea={{ base: '3 / 2 / 4 / 13', md: '2 / 2 / 3 / 9', lg: '2 / 3 / 3 / 9', xl: '2 / 4 / 3 / 10' }}
                        transform={{ base: '', md: 'translateY(-10px)' }}
                    >
                        <Box height={'inherit'} position={'relative'}>
                            <GlassCard
                                width={{ base: '80px', md: '150px' }}
                                height={{ base: '80px', md: '120px' }}
                                position={'absolute'}
                                top={{ base: '50%', md: '10%' }}
                                left={{ base: '2%', md: '2%' }}
                                transform={{ base: 'translate(-50%, -50%)', md: 'translateX(-50%)' }}
                                zIndex={3}
                            >
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
                                        <Box position={'relative'} height={'80px'} width={'full'} overflow={'hidden'} zIndex={2}>
                                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./axis-lock.svg'} />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    position={'absolute'}
                                    top={{ base: '45%', lg: '25%' }}
                                    left={{ base: '10%', lg: '25%' }}
                                    height={'80px'}
                                    width={'80px'}
                                    borderRadius={'50%'}
                                    filter={'blur(20px)'}
                                    background={'#2E56FF'}
                                    zIndex={0}
                                    opacity={'0.95'}
                                ></Box>
                            </GlassCard>
                            <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2} padding={2}>
                                <Flex direction={'row'} height={'inherit'} padding={4}>
                                    <Box flex={{ base: '0 1 50px', md: '0 1 25%' }}></Box>
                                    <Stack flex={{ base: '0 1 100%', md: '0 1 75%' }} justifyContent={'center'} paddingRight={{ base: 0, lg: 4, xl: 12 }}>
                                        <Heading as="h5" size="sm" fontWeight={600}>
                                            Save users from theft
                                        </Heading>
                                        <Text as={'span'} textStyle={'base'} fontSize={'sm'}>
                                            {`Help protect users' funds at risk. Our rigorous automated review system provides an extra layer of security.`}
                                        </Text>
                                    </Stack>
                                </Flex>
                            </GlassCard>
                        </Box>
                    </Box>
                    <Box width={'full'} height={'180px'} gridArea={{ base: '5 / 1 / 6 / 12', md: '4 / 1 / 5 / 6', lg: '3 / 1 / 4 / 6' }}>
                        <Stack height={'full'} justifyContent={{ base: 'center', lg: 'flex-end' }} alignItems={'flex-start'} gap={4}>
                            <Flex gap={2} alignItems={'center'}>
                                <Box height={'15px'}>
                                    <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./email.svg'} />
                                </Box>
                                <Heading as="h6" size="sm" fontWeight={400}>
                                    Or send us an email to apply
                                </Heading>
                            </Flex>
                            <EmailClipboard fistText={'hire@upgradehub.com'} />
                        </Stack>
                    </Box>
                    <Box width={'full'} height={{ base: '100%', md: '180px' }} gridArea={{ base: '4 / 1 / 5 / 12', md: '3 / 1 / 4 / 8', lg: '3 / 6 / 4 / 12', xl: '3 / 6 / 4 / 12' }}>
                        <Box height={'inherit'} position={'relative'}>
                            <GlassCard
                                width={{ base: '80px', md: '150px' }}
                                height={{ base: '80px', md: '120px' }}
                                position={'absolute'}
                                top={{ base: '50%', md: '10%' }}
                                left={{ base: '100%', md: '95%' }}
                                transform={{ base: 'translate(-50%, -50%)', md: 'translateX(-50%)' }}
                                zIndex={3}
                            >
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
                                        <Box position={'relative'} height={'80px'} width={'full'} overflow={'hidden'} zIndex={2}>
                                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./request-create.svg'} />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    position={'absolute'}
                                    top={{ base: '45%', lg: '15%' }}
                                    left={{ base: '10%', lg: '25%' }}
                                    height={'80px'}
                                    width={'80px'}
                                    borderRadius={'50%'}
                                    filter={'blur(20px)'}
                                    background={'#2E56FF'}
                                    zIndex={0}
                                    opacity={'0.95'}
                                ></Box>
                                <Box
                                    position={'absolute'}
                                    top={{ base: '45%', lg: '35%' }}
                                    left={{ base: '10%', lg: '35%' }}
                                    height={'80px'}
                                    width={'80px'}
                                    borderRadius={'50%'}
                                    filter={'blur(20px)'}
                                    background={'#A7F0B7'}
                                    zIndex={0}
                                    opacity={'0.35'}
                                ></Box>
                            </GlassCard>
                            <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2} padding={2}>
                                <Flex direction={'row'} height={'inherit'} padding={4}>
                                    <Stack flex={'0 1 75%'} justifyContent={'center'}>
                                        <Heading as="h5" size="sm" fontWeight={600}>
                                            Work on an innovative company
                                        </Heading>
                                        <Text as={'span'} textStyle={'base'} fontSize={'sm'}>
                                            Working on an innovative company like PAKT is essential to ensure Ethereum projects stay secure and safe.
                                        </Text>
                                    </Stack>
                                </Flex>
                            </GlassCard>
                        </Box>
                    </Box>
                </Grid>
            </Stack>
        </Container>
    );
}
