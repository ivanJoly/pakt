import { Container, Stack, Flex, Box, Heading, Text, Image, Button, Grid } from '@chakra-ui/react';
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
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'}>
                            <Text as={'span'} textStyle={'base'}>
                                Stolen
                            </Text>
                            <Heading as="h5" size="xl" fontWeight={600}>
                                $19,990 Millions
                            </Heading>
                        </Stack>
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
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'}>
                            <Text as={'span'} textStyle={'base'}>
                                Vulnerabilities <br /> in each project
                            </Text>
                            <Heading as="h5" size="xl" fontWeight={600}>
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
                            <Heading as="h5" size="xl" fontWeight={600}>
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
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'}>
                            <Text as={'span'} textStyle={'base'}>
                                Other Numbers
                            </Text>
                            <Heading as="h5" size="xl" fontWeight={600}>
                                445
                            </Heading>
                        </Stack>
                    </GlassCard>
                </Box>
                <Box
                    position={'absolute'}
                    top={'50%'}
                    left={'30%'}
                    height={150}
                    width={150}
                    borderRadius={'50%'}
                    filter={'blur(10px)'}
                    background={'linear-gradient(322.15deg, #3171D0 17.94%, rgba(18, 232, 104, 100) 150.77%)'}
                    zIndex={1}
                    opacity={'0.85'}
                ></Box>
            </Grid>
        </Container>
    );
}
