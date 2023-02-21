import { Container, Stack, Box, Heading, Text, Grid } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export default function Stats() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 12, md: 28 }}>
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
            <Grid position={'relative'} paddingX={{ base: 0, sm: 8, xl: 32 }} gap={8} gridTemplateColumns={'repeat(12, 1fr)'} gridTemplateRows={'repeat(2, 1fr)'} columnGap={4} rowGap={12}>
                <Box
                    position={'relative'}
                    zIndex={2}
                    width={'full'}
                    height={'150px'}
                    gridArea={{ base: '2 / 1 / 3 / 13', sm: '2 / 2 / 3 / 12', md: '2 / 2 / 3 / 7', lg: '1 / 1 / 1 / 6', xl: '1 / 2 / 2 / 7' }}
                >
                    <GlassCard width={'full'} height={'full'}>
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'} position={'relative'} zIndex={2}>
                            <Text as={'span'} textStyle={'base'}>
                                Stolen
                            </Text>
                            <Heading as="h5" size={{ base: 'lg', lg: 'xl' }} fontWeight={600}>
                                $19,990 Millions
                            </Heading>
                        </Stack>
                        <Box
                            position={'absolute'}
                            top={{ base: '10%', lg: '10%' }}
                            left={{ base: '15%', lg: '15%' }}
                            height={120}
                            width={120}
                            borderRadius={'50%'}
                            filter={'blur(20px)'}
                            background={'linear-gradient(0deg, #0125D5, #0125D5), linear-gradient(0deg, #0125D5, #0125D5), linear-gradient(0deg, #0125D5, #0125D5), #0125D5;'}
                            zIndex={1}
                            opacity={'0.4'}
                        ></Box>
                        <Box
                            position={'absolute'}
                            top={{ base: '15%', lg: '15%' }}
                            left={{ base: '20%', lg: '20%' }}
                            height={120}
                            width={120}
                            borderRadius={'50%'}
                            filter={'blur(20px)'}
                            background={'#002CAA'}
                            zIndex={1}
                            opacity={'0.4'}
                        ></Box>
                        <Box
                            position={'absolute'}
                            top={{ base: '50%', lg: '50%' }}
                            left={{ base: '65%', lg: '65%' }}
                            height={70}
                            width={70}
                            borderRadius={'50%'}
                            filter={'blur(20px)'}
                            background={'linear-gradient(0deg, #0125D5, #0125D5), linear-gradient(0deg, #0125D5, #0125D5), linear-gradient(0deg, #0125D5, #0125D5), #0125D5;'}
                            zIndex={1}
                            opacity={'0.4'}
                        ></Box>
                    </GlassCard>
                </Box>
                <Box
                    position={'relative'}
                    zIndex={2}
                    width={'full'}
                    height={'150px'}
                    gridArea={{ base: '3 / 7 / 4 / 13', sm: '3 / 7 / 4 / 12', md: '2 / 7 / 3 / 11', lg: '1 / 6 / 2 / 9', xl: '1 / 7 / 2 / 10' }}
                    transform={'translateY(32px)'}
                >
                    <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'} position={'relative'} zIndex={2}>
                            <Text as={'span'} textStyle={'base'}>
                                Vulnerabilities <br /> in each project
                            </Text>
                            <Heading as="h5" size={{ base: 'lg', lg: 'xl' }} fontWeight={600}>
                                445
                            </Heading>
                        </Stack>
                        <Box
                            position={'absolute'}
                            top={{ base: '10%', lg: '10%' }}
                            left={{ base: '5%', lg: '5%' }}
                            height={150}
                            width={150}
                            borderRadius={'50%'}
                            filter={'blur(15px)'}
                            background={'linear-gradient(56.29deg, #79F0A9 17.45%, rgba(1, 37, 213, 0) 70%);'}
                            zIndex={1}
                            opacity={'0.55'}
                        ></Box>
                        <Box
                            position={'absolute'}
                            top={{ base: '5%', lg: '5%' }}
                            left={{ base: '45%', lg: '45%' }}
                            height={95}
                            width={140}
                            borderRadius={'50%'}
                            filter={'blur(10px)'}
                            background={'linear-gradient(233.33deg, #002CAA 9.17%, rgba(0, 44, 170, 0) 81.88%);'}
                            zIndex={1}
                            opacity={'0.65'}
                        ></Box>
                    </GlassCard>
                </Box>
                <Box
                    position={'relative'}
                    zIndex={2}
                    width={'full'}
                    height={'150px'}
                    gridArea={{ base: '1 / 1 / 2 / 12', sm: '1 / 1 / 2 / 10', md: '1 / 1 / 2 / 8', lg: '1 / 9 / 2 / 12', xl: '1 / 10 / 2 / 13' }}
                    transform={'translateY(32px)'}
                >
                    <Text as={'p'} textStyle={'base'} fontSize={'sm'} marginTop={'-4px'}>
                        The growth of blockchain and crypto has been inflicted with the largest crypto hacks that have stirred the foundations of trust in blockchain applications.
                    </Text>
                </Box>
                <Box
                    position={'relative'}
                    zIndex={2}
                    width={'full'}
                    height={'150px'}
                    gridArea={{ base: '3 / 1 / 4 / 7', sm: '3 / 2 / 4 / 7', md: '3 / 3 / 4 / 7', lg: '2 / 3 / 3 / 6', xl: '2 / 5 / 3 / 7' }}
                    transform={'translateY(-22px)'}
                >
                    <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'}>
                            <Text as={'span'} textStyle={'base'}>
                                Attacks
                            </Text>
                            <Heading as="h5" size={{ base: 'lg', lg: 'xl' }} fontWeight={600}>
                                445
                            </Heading>
                        </Stack>
                    </GlassCard>
                </Box>
                <Box
                    position={'relative'}
                    zIndex={2}
                    width={'full'}
                    height={'150px'}
                    gridArea={{ base: '4 / 1 / 5 / 13', sm: '4 / 2 / 5 / 12', md: '3 / 7 / 3 / 12', lg: '2 / 6 / 3 / 10', xl: '2 / 7 / 3 / 11' }}
                >
                    <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'} position={'relative'} zIndex={2}>
                            <Text as={'span'} textStyle={'base'}>
                                Other Numbers
                            </Text>
                            <Heading as="h5" size={{ base: 'lg', lg: 'xl' }} fontWeight={600}>
                                445
                            </Heading>
                        </Stack>
                        <Box
                            position={'absolute'}
                            top={{ base: '0%', lg: '0%' }}
                            left={{ base: '5%', lg: '5%' }}
                            height={95}
                            width={120}
                            borderRadius={'50%'}
                            filter={'blur(20px)'}
                            background={'linear-gradient(322.15deg, #0125D5 17.94%, rgba(18, 108, 232, 0) 150.77%);'}
                            zIndex={1}
                            opacity={'0.75'}
                        ></Box>
                        <Box
                            position={'absolute'}
                            top={{ base: '50%', lg: '50%' }}
                            left={{ base: '65%', lg: '60%' }}
                            height={95}
                            width={120}
                            borderRadius={'50%'}
                            filter={'blur(20px)'}
                            background={'linear-gradient(322.15deg, #0125D5 17.94%, rgba(18, 108, 232, 0) 150.77%);'}
                            zIndex={1}
                            opacity={'0.75'}
                        ></Box>
                    </GlassCard>
                </Box>
                <Box
                    position={'absolute'}
                    top={{ base: '60%', md: '80%', lg: '70%' }}
                    left={{ base: '15%', md: '25%', lg: '45%' }}
                    height={150}
                    width={150}
                    borderRadius={'50%'}
                    filter={'blur(10px)'}
                    background={'linear-gradient(322.15deg, #3171D0 17.94%, rgba(18, 232, 104, 100) 150.77%)'}
                    zIndex={1}
                    opacity={'0.85'}
                ></Box>
                <Box
                    position={'absolute'}
                    top={{ base: '45%', lg: '45%' }}
                    left={{ base: '40%', lg: '35%' }}
                    height={75}
                    width={75}
                    borderRadius={'50%'}
                    background={'linear-gradient(180deg, #126CE8 0%, rgba(18, 108, 232, 0) 100%)'}
                    zIndex={1}
                    opacity={'1'}
                ></Box>
                <Box position={'absolute'} top={'35%'} left={'50%'} zIndex={1} opacity={'0.85'}>
                    <Text as={'span'} position={'relative'} fontSize={80}>
                        {'<<<'}
                    </Text>
                </Box>
            </Grid>
        </Container>
    );
}
